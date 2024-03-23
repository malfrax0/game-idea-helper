import { GameSpace, Prisma } from "@prisma/client";
import { SafeParseError, z } from "zod";
import { IEntity } from "./type";
import { DomainError, issueToDomainError } from "../../infrastructure/error";
import GameSpaceEntity, { DomainGameSpace } from "./game.space";

export interface DomainCreationSpace {
    id?: number,
    color: string,
    creationDate: Date,
    spaces?: DomainGameSpace[]
}

const schema = z.object({
    color: z.string().regex(/^#[ABCDEF0-9]{6,8}/g),
    creationDate: z.date(),
    gameSpaces: z.array(z.any()).optional()
});

const aggregateWithGameSpace = (domainValue: DomainCreationSpace, gameSpaces?: GameSpace[]): DomainCreationSpace => {
    if (!gameSpaces) return domainValue;

    return { 
        ...domainValue,
        spaces: gameSpaces.map(GameSpaceEntity.toDomain)
    };
}

const CreationSpaceEntity: IEntity<DomainCreationSpace, Prisma.CreationSpaceGetPayload<{
    include: {
        spaces: true
    }
}>> = {
    toRaw(domainValue) {
        return {
            id: domainValue.id,
            color: domainValue.color,
            creationDate: domainValue.creationDate,
            spaces: domainValue ? domainValue.spaces.map(GameSpaceEntity.toRaw) : []
        }
    },
    toDomain(rawValue) {
        let domainValue: DomainCreationSpace = {
            id: rawValue.id,
            color: rawValue.color,
            creationDate: rawValue.creationDate
        }
        domainValue = aggregateWithGameSpace(domainValue, rawValue.spaces);
        return domainValue;
    },
    check(value) {
        const result = schema.safeParse(value);
        if (!result.success) {
            const errorResult = result as SafeParseError<typeof schema._input>
            const errors = errorResult.error;

            throw new DomainError({
                code: "CREATION_SPACE_FORMAT_ERROR",
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

export default CreationSpaceEntity;