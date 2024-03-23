import { GameSpace, Idea, Prisma, Theme } from "@prisma/client";
import { SafeParseError, z } from "zod";
import { IEntity } from "./type";
import { DomainError, issueToDomainError } from "../../infrastructure/error";
import ThemeEntity, { DomainTheme } from "./theme";
import IdeaEntity, { DomainIdea } from "./idea";

export interface DomainGameSpace {
    id?: number,
    rejected: boolean,
    creationSpaceId?: number,
    themeId?: number,
    theme?: DomainTheme,
    ideas?: DomainIdea[],
}

const schema = z.object({
    creationSpaceId: z.number(),
    themeId: z.number(),
    theme: z.any().optional(),
    ideas: z.array(z.any()).optional(),
    rejected: z.boolean().default(false),
});

const aggregateWithTheme = (domainValue: DomainGameSpace, theme?: Theme): DomainGameSpace => {
    if (!theme) return domainValue;

    return {
        ...domainValue,
        theme: ThemeEntity.toDomain(theme)
    }
}

const aggregateWithIdeas = (domainValue: DomainGameSpace, ideas?: Idea[]): DomainGameSpace => {
    if (!ideas) return domainValue;

    return {
        ...domainValue,
        ideas: ideas.map(IdeaEntity.toDomain)
    }
}

const GameSpaceEntity: IEntity<DomainGameSpace, Prisma.GameSpaceGetPayload<{
    include: {
        theme: true,
        ideas: true
    }
}>> = {
    toRaw(domainValue) {
        return {
            id: domainValue.id,
            creationSpaceId: domainValue.creationSpaceId,
            rejected: domainValue.rejected,
            themeId: domainValue.themeId,
            theme: domainValue.theme ? ThemeEntity.toRaw(domainValue.theme) : null,
            ideas: domainValue.ideas ? domainValue.ideas.map(IdeaEntity.toRaw): []
        }
    },
    toDomain(rawValue) {
        let domainValue: DomainGameSpace = {
            id: rawValue.id,
            rejected: rawValue.rejected,
            themeId: rawValue.themeId,
            creationSpaceId: rawValue.creationSpaceId
        }
        domainValue = aggregateWithTheme(domainValue, rawValue.theme);
        domainValue = aggregateWithIdeas(domainValue, rawValue.ideas)
        return domainValue;
    },
    check(value) {
        const result = schema.safeParse(value);
        if (!result.success) {
            const errorResult = result as SafeParseError<typeof schema._input>
            const errors = errorResult.error;

            throw new DomainError({
                code: "GAME_SPACE_FORMAT_ERROR",
                message: "Error on format",
                payload: {
                    errorCodes: errors.issues.map(issueToDomainError)
                }
            })
        }

        return { ...value, ...result.data };
    },
    schema
}

export default GameSpaceEntity;