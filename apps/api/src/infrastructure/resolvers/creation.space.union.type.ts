import { UnionResult } from "../gql.utils";

export const createCreationSpaceUnionType: UnionResult = {
    success: "CreateCreationSpaceSuccess",
    errors: [
        {
            __typename: "BadRequestError",
            code: "BAD_REQUEST_ERROR",
            message: "Bad request",
            errorCodes: [
                "CREATION_SPACE_FORMAT_ERROR",
            ]
        }
    ]
}

export const updateCreationSpaceUnionType: UnionResult = {
    success: "UpdateCreationSpaceSuccess",
    errors: [
        {
            __typename: "BadRequestError",
            code: "BAD_REQUEST_ERROR",
            message: "Bad request",
            errorCodes: [
                "CREATION_SPACE_FORMAT_ERROR",
            ]
        },
        {
            __typename: "NotFoundError",
            code: "NOT_FOUND_ERROR",
            message: "Not found",
            errorCodes: [
                "CREATION_SPACE_NOT_FOUND"
            ]
        },
    ]
}