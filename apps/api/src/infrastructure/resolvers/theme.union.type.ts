import { UnionResult } from "../gql.utils";

export const createThemeUnionType: UnionResult = {
    success: "CreateThemeResultSuccess",
    errors: [
        {
            __typename: "BadRequestError",
            code: "BAD_REQUEST_ERROR",
            message: "Bad request",
            errorCodes: [
                "THEME_FORMAT_ERROR",
            ]
        },
        {
            __typename: "ThemeAlreadyExistsError",
            code: "THEME_ALREADY_EXISTS_ERROR",
            message: "Theme already exists",
            errorCodes: [
                "THEME_ALREADY_EXISTS"
            ]
        }
    ]
}
export const updateThemeUnionType: UnionResult = {
    success: "UpdateThemeResultSuccess",
    errors: [
        {
            __typename: "BadRequestError",
            code: "BAD_REQUEST_ERROR",
            message: "Bad request",
            errorCodes: [
                "THEME_FORMAT_ERROR",
            ]
        },
        {
            __typename: "NotFoundError",
            code: "NOT_FOUND_ERROR",
            message: "Not found",
            errorCodes: [
                "THEME_NOT_FOUND"
            ]
        },
        {
            __typename: "ThemeAlreadyExistsError",
            code: "THEME_ALREADY_EXISTS_ERROR",
            message: "Theme already exists",
            errorCodes: [
                "THEME_ALREADY_EXISTS"
            ]
        }
    ]
}