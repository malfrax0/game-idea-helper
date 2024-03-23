import services from "../../domain/services"
import { execFnAndReturnError } from "../gql.utils"
import { createThemeUnionType, updateThemeUnionType } from "./theme.union.type"


const themes = async () => {
    return await services.theme.listAll();
}

const randomThemes = async (_, { input: { amount } }) => {
    return await services.theme.sample(amount);
}

const createTheme = async (_, {data: { theme }}) => {
    return execFnAndReturnError(createThemeUnionType, async () => {
        return {
            theme: await services.theme.createOne({theme, active: true})
        }
    })
}

const updateTheme = async (_, {data, where}) => {
    return execFnAndReturnError(updateThemeUnionType, async () => {
        return {
            theme: await services.theme.updateOne(parseInt(where.id), data)
        }
    })
}

export default {
    Query: {
        themes,
        randomThemes
    },
    Mutation: {
        createTheme,
        updateTheme
    }
}