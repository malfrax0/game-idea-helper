/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query Q_CREATIONSPACE($id: ID!) {\n        creationSpace(where: { id: $id }) {\n            color\n            creationDate\n            id\n            spaces {\n                id\n                rejected\n                theme {\n                    theme\n                    id\n                }\n                ideas {\n                    title\n                    id\n                    content\n                    category\n                }\n            }\n        }\n    }\n": types.Q_CreationspaceDocument,
    "\n    query Q_ALLCREATIONSPACE {\n        allCreationSpace {\n            color\n            creationDate\n            id\n            spaces {\n                id\n                rejected\n                theme {\n                    theme\n                    id\n                }\n                ideas {\n                    title\n                    id\n                    content\n                    category\n                }\n            }\n        }\n    }\n": types.Q_AllcreationspaceDocument,
    "\n    mutation M_CREATECREATIONSPACE($data: CreateCreationSpaceInput!) {\n        createCreationSpace(data: $data) {\n            __typename\n            ... on CreateCreationSpaceSuccess {\n                creationSpace {\n                    id\n                }\n            }\n            ... on BadRequestError {\n                code\n                message\n            }\n            ... on BaseError {\n                code\n                message\n            }\n        }\n    }\n": types.M_CreatecreationspaceDocument,
    "\n    mutation M_UPDATECREATIONSPACE($id: ID!, $data: UpdateCreationSpaceInput!) {\n        updateCreationSpace(data: $data, where: {id: $id}) {\n            __typename\n            ... on UpdateCreationSpaceSuccess {\n                creationSpace {\n                    id\n                }\n            }\n            ... on CreationSpaceNotFoundError {\n                message\n            }\n            ... on BadRequestError {\n                code\n                message\n            }\n            ... on NotFoundError {\n                code\n                message\n            }\n            ... on BaseError {\n                code\n                message\n            }\n        }\n    }\n": types.M_UpdatecreationspaceDocument,
    "\n    query Q_READY {\n        ready\n    }\n": types.Q_ReadyDocument,
    "\n    mutation M_CREATEIDEA($data: CreateIdeaInput!) {\n        createIdea(data: $data) {\n            __typename\n            ... on CreateIdeaSuccess {\n                idea {\n                    category\n                    id\n                    title\n                    content\n                }\n            }\n            ... on BadRequestError {\n                __typename\n                code\n                message\n            }\n            ... on BaseError {\n                __typename\n                code\n                message\n            }\n        }\n    }\n": types.M_CreateideaDocument,
    "\n    mutation M_UPDATEIDEA($id: ID!, $data: UpdateIdeaInput!) {\n        updateIdea(where: { id: $id }, data: $data) {\n            __typename\n            ... on UpdateIdeaSuccess {\n                idea {\n                    category\n                    id\n                    title\n                    content\n                }\n            }\n            ... on BadRequestError {\n                __typename\n                code\n                message\n            }\n            ... on NotFoundError {\n                __typename\n                code\n                message\n            }\n            ... on BaseError {\n                __typename\n                code\n                message\n            }\n        }\n    }\n": types.M_UpdateideaDocument,
    "\n    mutation M_DELETEIDEA($id: ID!) {\n        deleteIdea(where: { id: $id }) {\n            __typename\n            ... on NotFoundError {\n                __typename\n                code\n                message\n            }\n            ... on BaseError {\n                __typename\n                code\n                message\n            }\n        }\n    }\n": types.M_DeleteideaDocument,
    "\n    query Q_THEMES {\n        themes {\n            active\n            id\n            theme\n        }\n    }\n": types.Q_ThemesDocument,
    "\n    query Q_RANDOMTHEMES($amount: Int!) {\n        randomThemes(input: {amount: $amount}) {\n            active\n            id\n            theme\n        }\n    }\n": types.Q_RandomthemesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Q_CREATIONSPACE($id: ID!) {\n        creationSpace(where: { id: $id }) {\n            color\n            creationDate\n            id\n            spaces {\n                id\n                rejected\n                theme {\n                    theme\n                    id\n                }\n                ideas {\n                    title\n                    id\n                    content\n                    category\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query Q_CREATIONSPACE($id: ID!) {\n        creationSpace(where: { id: $id }) {\n            color\n            creationDate\n            id\n            spaces {\n                id\n                rejected\n                theme {\n                    theme\n                    id\n                }\n                ideas {\n                    title\n                    id\n                    content\n                    category\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Q_ALLCREATIONSPACE {\n        allCreationSpace {\n            color\n            creationDate\n            id\n            spaces {\n                id\n                rejected\n                theme {\n                    theme\n                    id\n                }\n                ideas {\n                    title\n                    id\n                    content\n                    category\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query Q_ALLCREATIONSPACE {\n        allCreationSpace {\n            color\n            creationDate\n            id\n            spaces {\n                id\n                rejected\n                theme {\n                    theme\n                    id\n                }\n                ideas {\n                    title\n                    id\n                    content\n                    category\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation M_CREATECREATIONSPACE($data: CreateCreationSpaceInput!) {\n        createCreationSpace(data: $data) {\n            __typename\n            ... on CreateCreationSpaceSuccess {\n                creationSpace {\n                    id\n                }\n            }\n            ... on BadRequestError {\n                code\n                message\n            }\n            ... on BaseError {\n                code\n                message\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation M_CREATECREATIONSPACE($data: CreateCreationSpaceInput!) {\n        createCreationSpace(data: $data) {\n            __typename\n            ... on CreateCreationSpaceSuccess {\n                creationSpace {\n                    id\n                }\n            }\n            ... on BadRequestError {\n                code\n                message\n            }\n            ... on BaseError {\n                code\n                message\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation M_UPDATECREATIONSPACE($id: ID!, $data: UpdateCreationSpaceInput!) {\n        updateCreationSpace(data: $data, where: {id: $id}) {\n            __typename\n            ... on UpdateCreationSpaceSuccess {\n                creationSpace {\n                    id\n                }\n            }\n            ... on CreationSpaceNotFoundError {\n                message\n            }\n            ... on BadRequestError {\n                code\n                message\n            }\n            ... on NotFoundError {\n                code\n                message\n            }\n            ... on BaseError {\n                code\n                message\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation M_UPDATECREATIONSPACE($id: ID!, $data: UpdateCreationSpaceInput!) {\n        updateCreationSpace(data: $data, where: {id: $id}) {\n            __typename\n            ... on UpdateCreationSpaceSuccess {\n                creationSpace {\n                    id\n                }\n            }\n            ... on CreationSpaceNotFoundError {\n                message\n            }\n            ... on BadRequestError {\n                code\n                message\n            }\n            ... on NotFoundError {\n                code\n                message\n            }\n            ... on BaseError {\n                code\n                message\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Q_READY {\n        ready\n    }\n"): (typeof documents)["\n    query Q_READY {\n        ready\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation M_CREATEIDEA($data: CreateIdeaInput!) {\n        createIdea(data: $data) {\n            __typename\n            ... on CreateIdeaSuccess {\n                idea {\n                    category\n                    id\n                    title\n                    content\n                }\n            }\n            ... on BadRequestError {\n                __typename\n                code\n                message\n            }\n            ... on BaseError {\n                __typename\n                code\n                message\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation M_CREATEIDEA($data: CreateIdeaInput!) {\n        createIdea(data: $data) {\n            __typename\n            ... on CreateIdeaSuccess {\n                idea {\n                    category\n                    id\n                    title\n                    content\n                }\n            }\n            ... on BadRequestError {\n                __typename\n                code\n                message\n            }\n            ... on BaseError {\n                __typename\n                code\n                message\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation M_UPDATEIDEA($id: ID!, $data: UpdateIdeaInput!) {\n        updateIdea(where: { id: $id }, data: $data) {\n            __typename\n            ... on UpdateIdeaSuccess {\n                idea {\n                    category\n                    id\n                    title\n                    content\n                }\n            }\n            ... on BadRequestError {\n                __typename\n                code\n                message\n            }\n            ... on NotFoundError {\n                __typename\n                code\n                message\n            }\n            ... on BaseError {\n                __typename\n                code\n                message\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation M_UPDATEIDEA($id: ID!, $data: UpdateIdeaInput!) {\n        updateIdea(where: { id: $id }, data: $data) {\n            __typename\n            ... on UpdateIdeaSuccess {\n                idea {\n                    category\n                    id\n                    title\n                    content\n                }\n            }\n            ... on BadRequestError {\n                __typename\n                code\n                message\n            }\n            ... on NotFoundError {\n                __typename\n                code\n                message\n            }\n            ... on BaseError {\n                __typename\n                code\n                message\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation M_DELETEIDEA($id: ID!) {\n        deleteIdea(where: { id: $id }) {\n            __typename\n            ... on NotFoundError {\n                __typename\n                code\n                message\n            }\n            ... on BaseError {\n                __typename\n                code\n                message\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation M_DELETEIDEA($id: ID!) {\n        deleteIdea(where: { id: $id }) {\n            __typename\n            ... on NotFoundError {\n                __typename\n                code\n                message\n            }\n            ... on BaseError {\n                __typename\n                code\n                message\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Q_THEMES {\n        themes {\n            active\n            id\n            theme\n        }\n    }\n"): (typeof documents)["\n    query Q_THEMES {\n        themes {\n            active\n            id\n            theme\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Q_RANDOMTHEMES($amount: Int!) {\n        randomThemes(input: {amount: $amount}) {\n            active\n            id\n            theme\n        }\n    }\n"): (typeof documents)["\n    query Q_RANDOMTHEMES($amount: Int!) {\n        randomThemes(input: {amount: $amount}) {\n            active\n            id\n            theme\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;