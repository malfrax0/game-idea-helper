import { Domain } from "domain";
import { ZodObject, ZodType, z } from "zod";

type EntitySchema<T> = {
    [Property in keyof T]: ZodType
}

export interface IEntity<Domain, Raw> {
    toRaw: (domainValue: Domain) => Raw,
    toDomain: (rawValue: Raw) => Domain,
    check: (value: Domain) => Domain,
    schema: ZodObject<EntitySchema<Domain>>,
}