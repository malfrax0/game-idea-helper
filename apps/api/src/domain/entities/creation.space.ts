import { CreationSpace } from "@prisma/client";
import { z } from "zod";
import { IEntity } from "./type";


interface DomainCreationSpace {

}

const schema = z.object({
    id: z.string().optional(),
    color: z.string().regex(/^#[ABCDEF0-9]{6,8}/g),
    creationDate: z.date(),
    
});

const CreationSpaceEntity: IEntity<DomainCreationSpace, CreationSpace> = {
    toRaw(domainValue) {
        return {

        }
    },
    toDomain(rawValue) {
        return {

        }
    },
    check(value) {
        return {

        }
    },
}