import { Theme } from "@prisma/client"
import { SafeParseError, z } from "zod";
import { DomainError, issueToDomainError } from "../../infrastructure/error";

interface DomainTheme {
    id: string,
    theme: string,
    active: boolean
}

const schema = z.object({
    id: z.string(),
    theme: z.string().min(3),
    active: z.boolean().optional()
});

export default {
    toRaw: (domainValue: DomainTheme) => {
        return {
            id: parseInt(domainValue.id),
            theme: domainValue.theme,
            active: domainValue.active
        }
    },
    toDomain: (rawValue: Theme) => {
        return {
            id: rawValue.id.toString(),
            theme: rawValue.theme,
            active: rawValue.active
        }
    },
    check: (value: DomainTheme) => {
        const result = schema.safeParse(value);
        if (!result.success) {
            const errorResult = result as SafeParseError<typeof schema._input>;   
            const errors = errorResult.error;

            throw new DomainError({
                code: "THEME_FORMAT_ERROR",
                message: "Error on format",
                payload: {
                    errorCodes: errors.issues.map(issueToDomainError)
                }
            })
        }
    }
}