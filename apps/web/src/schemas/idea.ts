import { graphql } from "../gql";

export const createIdea = graphql(/* GraphQL */`
    mutation M_CREATEIDEA($data: CreateIdeaInput!) {
        createIdea(data: $data) {
            __typename
            ... on CreateIdeaSuccess {
                idea {
                    category
                    id
                    title
                    content
                }
            }
            ... on BadRequestError {
                __typename
                code
                message
            }
            ... on BaseError {
                __typename
                code
                message
            }
        }
    }
`);

export const updateIdea = graphql(/* GraphQL */`
    mutation M_UPDATEIDEA($id: ID!, $data: UpdateIdeaInput!) {
        updateIdea(where: { id: $id }, data: $data) {
            __typename
            ... on UpdateIdeaSuccess {
                idea {
                    category
                    id
                    title
                    content
                }
            }
            ... on BadRequestError {
                __typename
                code
                message
            }
            ... on NotFoundError {
                __typename
                code
                message
            }
            ... on BaseError {
                __typename
                code
                message
            }
        }
    }
`);

export const deleteIdea = graphql(/* GraphQL */`
    mutation M_DELETEIDEA($id: ID!) {
        deleteIdea(where: { id: $id }) {
            __typename
            ... on NotFoundError {
                __typename
                code
                message
            }
            ... on BaseError {
                __typename
                code
                message
            }
        }
    }
`);

export default {
    createIdea,
    updateIdea,
    deleteIdea
}