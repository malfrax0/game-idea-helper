import { graphql } from "../gql";

export const creationSpace = graphql(/* GraphQL */`
    query Q_CREATIONSPACE($id: ID!) {
        creationSpace(where: { id: $id }) {
            color
            creationDate
            id
            spaces {
                id
                rejected
                theme {
                    theme
                    id
                }
                ideas {
                    title
                    id
                    content
                    category
                }
            }
        }
    }
`)

export const allCreationSpace = graphql(/* GraphQL */`
    query Q_ALLCREATIONSPACE {
        allCreationSpace {
            color
            creationDate
            id
            spaces {
                id
                rejected
                theme {
                    theme
                    id
                }
                ideas {
                    title
                    id
                    content
                    category
                }
            }
        }
    }
`)

export const createCreationSpace = graphql(/* GraphQL */`
    mutation M_CREATECREATIONSPACE($data: CreateCreationSpaceInput!) {
        createCreationSpace(data: $data) {
            __typename
            ... on CreateCreationSpaceSuccess {
                creationSpace {
                    id
                }
            }
            ... on BadRequestError {
                code
                message
            }
            ... on BaseError {
                code
                message
            }
        }
    }
`);

export const updateCreationSpace = graphql(/* GraphQL */`
    mutation M_UPDATECREATIONSPACE($id: ID!, $data: UpdateCreationSpaceInput!) {
        updateCreationSpace(data: $data, where: {id: $id}) {
            __typename
            ... on UpdateCreationSpaceSuccess {
                creationSpace {
                    id
                }
            }
            ... on CreationSpaceNotFoundError {
                message
            }
            ... on BadRequestError {
                code
                message
            }
            ... on NotFoundError {
                code
                message
            }
            ... on BaseError {
                code
                message
            }
        }
    }
`);

export default {
    creationSpace,
    allCreationSpace,
    createCreationSpace,
    updateCreationSpace
}