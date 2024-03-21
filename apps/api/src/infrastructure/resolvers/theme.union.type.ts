import { UnionResult } from "../gql.utils";

const badRequestTheme = {
    __typename: "NotFoundError",
    code: "NOT_FOUND_ERROR",
    message: "Not found",
    errorCodes: ["THEME_NOT_FOUND"]
}

export const themesUnionType: UnionResult = {
    success: "ThemesResultSuccess",
    errors: []
}

export const themeUnionType: UnionResult = {
    success: "ThemeResultSuccess",
    errors: [badRequestTheme]
}

export const randomThemeUnionType: UnionResult = {
    success: "RandomThemesResultSuccess",
    errors: []
}

export const createThemeUnionType: UnionResult = {
    success: "CreateThemeResultSuccess",
    errors: [
        {
            __typename: "BadRequestError",
            code: "BAD_REQUEST_ERROR",
            message: "Bad request",
            errorCodes: [

            ]
        }
    ]
}