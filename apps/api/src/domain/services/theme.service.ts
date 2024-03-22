import repositories from "../../infrastructure/repositories"
import entities from "../entities"
import { sampleSize } from "lodash"

const listAll = async () => {
    const themes = await repositories.theme.findAll();

    return themes.map(entities.theme.toDomain);
}

const sample = async (size: number) => {
    const themes = await listAll();

    return sampleSize(themes, size);
}

const findOneOrNull = async (themeId: number) => {
    const theme = await repositories.theme.findOne(where: {
        themeId
    })
}

export default {
    listAll,
    sample,
}