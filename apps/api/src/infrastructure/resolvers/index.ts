import { mergeResolvers } from "@graphql-tools/merge";
import healthResolver from "./health.resolver";
import themeResolver from "./theme.resolver";

export const getResolvers = () => {
    return mergeResolvers([
        healthResolver,
        themeResolver
    ])
}

export default getResolvers;