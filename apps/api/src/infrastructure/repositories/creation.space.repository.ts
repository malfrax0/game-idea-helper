import { CreationSpace, Prisma } from "@prisma/client";
import prisma from "../prisma";

const DEFAULT_FIND_ONE_INCLUDE: Prisma.CreationSpaceInclude = {
    ideaTags: true,
    taskTags: true,
    spaces: {
        include: {
            ideas: true,
            tasks: true
        }
    }
}

const findOne = async (id: number, include: Prisma.CreationSpaceInclude = DEFAULT_FIND_ONE_INCLUDE) => {
    return prisma.creationSpace.findUnique({
        where: {
            id
        },
        include
    })
}

const findAll = async (include: Prisma.CreationSpaceInclude | undefined) => {
    return prisma.creationSpace.findMany({include});
}

const createOne = async ({ color, creationDate }: Prisma.CreationSpaceCreateInput) => {
    prisma.creationSpace.create({
        data: {
            color,
            creationDate
        }
    });
}

export default {
    findAll,
    findOne,
    createOne
}