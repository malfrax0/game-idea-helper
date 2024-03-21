import { sampleSize } from "lodash"
import services from "../../domain/services"
import { execFnAndReturnError } from "../gql.utils"
import { randomThemeUnionType, themesUnionType } from "./theme.union.type"


const themes = async () => {
    const ret = await execFnAndReturnError(themesUnionType, async () => ({
            themes: await services.theme.listAll()
        })
    );

    return ret;
}

const randomThemes = async (_, { input: { amount } }) => {
    const ret = await execFnAndReturnError(randomThemeUnionType, async () => {
        const themes = await services.theme.listAll();

        return ({
            themes: sampleSize(themes, amount)
        })
    });
    return ret;
}

export default {
    Query: {
        themes,
        randomThemes
    }
}