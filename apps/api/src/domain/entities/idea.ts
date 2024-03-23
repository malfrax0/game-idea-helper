import { Prisma } from "@prisma/client";
import { IEntity, rawEnumToDomainEnum } from "./type";
import { SafeParseError, z } from "zod";
import { DomainError, issueToDomainError } from "../../infrastructure/error";

export enum DomainIdeaCategory {
    GAMEPLAY = "GAMEPLAY",
    STORY = "STORY",
    MUSIC = "MUSIC",
    DESIGN = "DESIGN",
    UIUX = "UIUX",
    ANIMATION = "ANIMATION"
}

export interface DomainIdea {
    id?: number,
    title: string,
    content?: string,
    gameSpaceId: string,
    category: DomainIdeaCategory,
}

const schema = z.object({
    title: z.string(),
    content: z.string().default(""),
    gameSpaceId: z.string(),
    category: z.nativeEnum(DomainIdeaCategory)
})

// eslint-disable-next-line @typescript-eslint/ban-types
const IdeaEntity: IEntity<DomainIdea, Prisma.IdeaGetPayload<{}>> = {
    toRaw(domainValue) {
        return {
            title: domainValue.title,
            content: domainValue.content || "",
            category: domainValue.category,
            gameSpaceId: parseInt(domainValue.gameSpaceId),
            id: domainValue.id,
            tags: []
        }
    },
    toDomain(rawValue) {
        return {
            content: rawValue.content,
            gameSpaceId: rawValue.gameSpaceId.toString(),
            title: rawValue.title,
            category: rawEnumToDomainEnum(rawValue.category, DomainIdeaCategory),
            id: rawValue.id
        }
    },
    check(value) {
        const result = schema.safeParse(value);
        if (!result.success) {
            const errorResult = result as SafeParseError<typeof schema._input>
            const errors = errorResult.error;

            throw new DomainError({
                code: "IDEA_FORMAT_ERROR",
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

export default IdeaEntity;