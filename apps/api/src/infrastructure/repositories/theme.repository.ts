import { Prisma } from "@prisma/client";
import { PrismaError } from "../error";
import prisma from "../prisma"


export const findAll = async () => {
    try {
        const result = await prisma.theme.findMany();
        
        return result;
    }
    catch (err) {
        throw new PrismaError({
            code: "FIND_ALL_THEME_PRISMA_ERROR",
            message: err?.message
        })
    }
}

export const findOne = async (where: Prisma.ThemeWhereInput) => {
    try {
        const result = await prisma.theme.findFirst({
            where
        });
        
        return result;
    }
    catch (err) {
        throw new PrismaError({
            code: "FIND_ONE_THEME_PRISMA_ERROR",
            message: err?.message
        })
    }
}

export default {
    findAll
}