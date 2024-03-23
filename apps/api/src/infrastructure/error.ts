import { ZodIssue } from "zod";

export class BaseError extends Error {
    type: string;
    code: string;
    payload?: any;

    constructor(type: string, {code, message, payload}: ErrorProps) {
        super(message)
        this.type = type;
        this.code = code;
        this.payload = payload;
        console.log({type, code, message, payload});
    }
}

interface ErrorProps {
    code: string;
    message?: string;
    payload?: any;
}

export class InfrastructureError extends BaseError {
    constructor(props: ErrorProps) {
        super("InfrastructureError", props);
    }
}

export class PrismaError extends BaseError {
    constructor(props: ErrorProps) {
        super("PrismaError", props);
    }
}

export class DomainError extends BaseError {
    constructor(props: ErrorProps) {
        super("DomainError", props);
    }
}

export const issueToDomainError = (issue: ZodIssue) => `${issue.code.toUpperCase()}_${issue.path.join("_").toUpperCase()}`