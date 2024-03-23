import services from "../../domain/services"
import { execFnAndReturnError } from "../gql.utils";
import { createCreationSpaceUnionType } from "./creation.space.union.type";

const creationSpace = async (_, { where: { id } }) => {
    return await services.creationSpace.findById(parseInt(id));
}

const allCreationSpace = async () => {
    return await services.creationSpace.listAll();
}

const createCreationSpace = async (_, { data: {color, themeIds} }) => {
    return execFnAndReturnError(createCreationSpaceUnionType, async () => {
        const creationSpace = await services.creationSpace.createOne({color, themeIds: themeIds.map((id) => parseInt(id))});
        return {
            creationSpace
        }
    });
}

export default {
    Query: {
        creationSpace,
        allCreationSpace
    },
    Mutation: {
        createCreationSpace
    }
}