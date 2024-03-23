import { DomainError } from "../../infrastructure/error";
import prisma from "../../infrastructure/prisma";
import entities from "../entities"
import { sampleSize } from "lodash"

const listAll = async () => {
    const themes = await prisma.theme.findMany();

    return themes.map(entities.theme.toDomain);
}

const sample = async (size: number) => {
    const themes = await listAll();

    return sampleSize(themes, size);
}

const createOne = async (data: {theme: string, active: boolean}) => {
    entities.theme.check(data);

    const sameName = await prisma.theme.findMany({ where: { theme: data.theme } });
    if (sameName && sameName.length) {
        throw new DomainError({
            code: "THEME_ALREADY_EXISTS",
            message: `Theme ${data.theme} already exists.`,
            payload: { data }
        })
    }

    const rawTheme = await prisma.theme.create({
        data: entities.theme.toRaw(data)
    });

    return entities.theme.toDomain(rawTheme);
}

const updateOne = async (themeId: number, data) => {
    const theme = await prisma.theme.findUnique({ where: { id: themeId } });

    if (!theme) {
        throw new DomainError({
            code: "THEME_NOT_FOUND",
            message: `Theme ${themeId} was not found in database.`,
            payload: {
                themeId
            }
        })
    }

    const sameName = await prisma.theme.findMany({
        where: {
            AND: [
                {
                    theme: theme.theme
                },
                {
                    id: {
                        not: themeId
                    }
                }
            ]
        }
    });
    if (sameName && sameName.length) {
        throw new DomainError({
            code: "THEME_ALREADY_EXISTS",
            message: `Theme ${data.theme} already exists.`,
            payload: { data }
        })
    }

    const newDomainTheme = entities.theme.toDomain({
        ...theme,
        ...data
    });

    entities.theme.check(newDomainTheme);

    const rawTheme = await prisma.theme.update({
        where: {
            id: themeId
        },
        data: entities.theme.toRaw(newDomainTheme)
    });

    return entities.theme.toDomain(rawTheme);
}

export default {
    listAll,
    sample,
    createOne,
    updateOne,
}