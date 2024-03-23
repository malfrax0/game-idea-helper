import { UnionResult } from "../gql.utils";

export const createIdeaUnionType: UnionResult = {
    success: "CreateIdeaSuccess",
    errors: [
        {
            __typename: "BadRequestError",
            code: "BAD_REQUEST_ERROR",
            message: "Bad request",
            errorCodes: [
                "IDEA_FORMAT_ERROR",
            ]
        }
    ]
}

export const updateIdeaUnionType: UnionResult = {
    success: "UpdateIdeaSuccess",
    errors: [
        {
            __typename: "BadRequestError",
            code: "BAD_REQUEST_ERROR",
            message: "Bad request",
            errorCodes: [
                "IDEA_FORMAT_ERROR",
            ]
        },
        {
            __typename: "NotFoundError",
            code: "NOT_FOUND_ERROR",
            message: "Not found",
            errorCodes: [
                "IDEA_NOT_FOUND"
            ]
        },
    ]
}

export const deleteIdeaUnionType: UnionResult = {
    success: "DeleteIdeaSuccess",
    errors: [
        {
            __typename: "NotFoundError",
            code: "NOT_FOUND_ERROR",
            message: "Not found",
            errorCodes: [
                "IDEA_NOT_FOUND"
            ]
        },
    ]
}