import { UnionResult } from "../gql.utils";

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