import services from "../../domain/services"
import { execFnAndReturnError } from "../gql.utils"


const themes = async () => {
    return {
        themes: await services.theme.listAll()
    }
}

const randomThemes = async (_, { input: { amount } }) => {
    return ({
        themes: await services.theme.sample(amount)
    })
}



export default {
    Query: {
        themes,
        randomThemes
    }
}