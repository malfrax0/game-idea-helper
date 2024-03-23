import { mergeResolvers } from "@graphql-tools/merge";
import healthResolver from "./health.resolver";
import themeResolver from "./theme.resolver";
import creationSpaceResolver from "./creation.space.resolver";
import ideaResolver from "./idea.resolver";

export const getResolvers = () => {
    return mergeResolvers([
        healthResolver,
        themeResolver,
        creationSpaceResolver,
        ideaResolver
    ])
}

export default getResolvers;