import services from "../../domain/services";
import { execFnAndReturnError } from "../gql.utils"
import { createIdeaUnionType, deleteIdeaUnionType, updateIdeaUnionType } from "./idea.union.type";


const createIdea = async (_, { data }) => {
    return execFnAndReturnError(createIdeaUnionType, async () => {
        return {
            idea: await services.idea.createOne(data)
        }
    });
}

const updateIdea = async (_, { where: { id }, data }) => {
    return execFnAndReturnError(updateIdeaUnionType, async () => {
        return {
            idea: await services.idea.updateOne(parseInt(id), data)
        }
    })
}

const deleteIdea = async (_, { where: { id }}) => {
    return execFnAndReturnError(deleteIdeaUnionType, async () => {
        await services.idea.deleteOne(parseInt(id));
        return true;
    });
}

export default {
    Mutation: {
        createIdea,
        updateIdea,
        deleteIdea
    }
}