import { Optional } from "../../helper/type.helper";
import { DomainError } from "../../infrastructure/error";
import prisma from "../../infrastructure/prisma"
import entities from "../entities"
import {  DomainIdea } from "../entities/idea"

const createOne = async (data: DomainIdea) => {
    entities.idea.check(data);

    const gameSpace = await prisma.gameSpace.findUnique({
        where: {
            id: parseInt(data.gameSpaceId)
        }
    })
    if (!gameSpace) {
        throw new DomainError({
            code: "GAME_SPACE_NOT_FOUND_ERROR",
            message: `Gamespace ${data.gameSpaceId} is not found.`,
            payload: {
                ...data
            }
        })
    }

    const rawData = entities.idea.toRaw(data);

    const result = await prisma.idea.create({
        data: {
            title: rawData.title,
            content: rawData.content,
            category: rawData.category,
            gameSpace: {
                connect: {
                    id: gameSpace.id
                }
            }
        }
    });

    return entities.idea.toDomain(result);
}

const updateOne = async (id: number, data: Optional<DomainIdea>) => {
    const idea = await prisma.idea.findUnique({ where: { id }});
    
    if (!idea) {
        throw new DomainError({
            code: "IDEA_NOT_FOUND_ERROR",
            message: `Idea ${id} is not found`,
            payload: {
                id
            }
        })
    }
    
    const updateData = entities.idea.check({ ...entities.idea.toDomain(idea), ...data });

    const result = await prisma.idea.update({
        where: {
            id
        },
        data: entities.idea.toRaw(updateData)
    });

    return entities.idea.toDomain(result);
}

const deleteOne = async (id: number) => {
    const idea = await prisma.idea.findUnique({ where: { id } });

    if (!idea) {
        throw new DomainError({
            code: "IDEA_NOT_FOUND_ERROR",
            message: `Idea ${id} is not found`,
            payload: {
                id
            }
        })
    }

    await prisma.idea.delete({
        where: {
            id
        }
    });
}

export default {
    createOne,
    updateOne,
    deleteOne
}