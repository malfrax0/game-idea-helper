
export type GQLTypeName = string;

export interface ErrorProps {
    __typename: GQLTypeName,
    message: string,
    code: string
}

export type SuccessProps<T> = {
    __typename: GQLTypeName;
} & T;

export interface UnionError extends ErrorProps {
    errorCodes: string[]
}

export interface UnionResult {
    success: GQLTypeName,
    errors: UnionError[]
}

export async function execFnAndReturnError<T>(unionResult: UnionResult, fn: () => Promise<T> | T): Promise<SuccessProps<T> | ErrorProps> {
    try {
        const data = await fn();
        
        return {
            __typename: unionResult.success,
            ...data
        }
    }
    catch (err) {
        const code = err?.code;
        if (code) {
            const unionError = unionResult.errors.find((itUnionError) => itUnionError.code === code);
            if (unionError) {
                return unionError;
            }
        }
        return {
            __typename: "GenericError",
            code: "INTERNAL_SERVER_ERROR",
            message: "Internal server error."
        }
    }
}