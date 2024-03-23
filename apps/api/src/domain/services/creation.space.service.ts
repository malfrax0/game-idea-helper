import prisma from "../../infrastructure/prisma"
import entities from "../entities";

const findById = async (id: number) => {
    const result = await prisma.creationSpace.findUnique({
        where: {
            id: id
        },
        include: {
            spaces: {
                include: {
                    ideas: true,
                    theme: true,
                    tasks: true
                }
            }
        }
    });

    if (!result) return null;

    return entities.creationSpace.toDomain(result);
}

const listAll = async () => {
    const result = await prisma.creationSpace.findMany({
        include: {
            spaces: {
                include: {
                    tasks: true,
                    theme: true,
                    ideas: true
                }
            }
        }
    });

    return result.map(entities.creationSpace.toDomain);
}

type CreateOneProps = {
    color?: string,
    themeIds: number[]
}

const createOne = async (data: CreateOneProps) => {

    const result = await prisma.creationSpace.create({
        data: {
            color: data.color,
            creationDate: new Date(),
            spaces: {
                createMany: {
                    data: data.themeIds.map((theme) => ({
                        themeId: theme,
                        rejected: false
                    }))
                }
            }
        },
        include: {
            spaces: {
                include: {
                    theme: true
                }
            }
        }
    })

    return entities.creationSpace.toDomain(result);
}

export default {
    findById,
    listAll,
    createOne
}