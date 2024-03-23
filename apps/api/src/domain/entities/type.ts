import { Prisma } from "@prisma/client";
import { EnumLike, ZodObject, ZodType } from "zod";

type EntitySchema<T> = {
    [Property in keyof T]: ZodType
}

export interface IEntity<Domain, Raw> {
    toRaw: (domainValue: Domain) => Raw,
    toDomain: (rawValue: Raw) => Domain,
    check: (value: Domain) => Domain,
    schema: ZodObject<EntitySchema<Domain>>,
}

export function rawEnumToDomainEnum<RawEnum, DomainEnum extends EnumLike>(enumValue: RawEnum, domainEnum: DomainEnum) {
    return domainEnum[enumValue as keyof DomainEnum];
}