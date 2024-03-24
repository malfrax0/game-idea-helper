import { graphql } from "../gql";

export const themes = graphql(/* GraphQL */`
    query Q_THEMES {
        themes {
            active
            id
            theme
        }
    }
`);

export const randomThemes = graphql(/* GraphQL */`
    query Q_RANDOMTHEMES($amount: Int!) {
        randomThemes(input: {amount: $amount}) {
            active
            id
            theme
        }
    }
`);

export default {
    themes,
    randomThemes
}