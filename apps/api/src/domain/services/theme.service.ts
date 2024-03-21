import repositories from "../../infrastructure/repositories"
import entities from "../entities"

const listAll = async () => {
    const themes = await repositories.theme.findAll();

    return themes.map(entities.theme.toDomain);
}

export default {
    listAll
}