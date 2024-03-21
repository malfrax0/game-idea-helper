/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BadRequestError = {
  __typename?: 'BadRequestError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type BaseError = {
  __typename?: 'BaseError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type CreateThemeInput = {
  theme: Scalars['String']['input'];
};

export type CreateThemeResult = BadRequestError | BaseError | CreateThemeResultSuccess;

export type CreateThemeResultSuccess = {
  __typename?: 'CreateThemeResultSuccess';
  theme: Theme;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTheme?: Maybe<CreateThemeResultSuccess>;
  updateTheme?: Maybe<UpdateThemeResultSuccess>;
};


export type MutationCreateThemeArgs = {
  data: CreateThemeInput;
};


export type MutationUpdateThemeArgs = {
  data: UpdateThemeInput;
  where: ThemeWhereInput;
};

export type NotFoundError = {
  __typename?: 'NotFoundError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  randomThemes?: Maybe<RandomThemesResult>;
  ready?: Maybe<Scalars['Boolean']['output']>;
  theme?: Maybe<ThemeResult>;
  themes?: Maybe<ThemesResult>;
  version?: Maybe<Scalars['String']['output']>;
};


export type QueryRandomThemesArgs = {
  input: RandomThemeWhereInput;
};


export type QueryThemeArgs = {
  where: ThemeWhereInput;
};

export type RandomThemeWhereInput = {
  amount: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};

export type RandomThemesResult = BaseError | RandomThemesResultSuccess;

export type RandomThemesResultSuccess = {
  __typename?: 'RandomThemesResultSuccess';
  theme: Array<Theme>;
};

export type Theme = {
  __typename?: 'Theme';
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  theme: Scalars['String']['output'];
};

export type ThemeResult = BaseError | NotFoundError | ThemeResultSuccess;

export type ThemeResultSuccess = {
  __typename?: 'ThemeResultSuccess';
  theme: Theme;
};

export type ThemeWhereInput = {
  id: Scalars['ID']['input'];
};

export type ThemesResult = BaseError | ThemeResultSuccess;

export type ThemesResultSuccess = {
  __typename?: 'ThemesResultSuccess';
  theme: Array<Theme>;
};

export type UpdateThemeInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateThemeResult = BadRequestError | BaseError | NotFoundError | UpdateThemeResultSuccess;

export type UpdateThemeResultSuccess = {
  __typename?: 'UpdateThemeResultSuccess';
  theme: Theme;
};

export type Q_ReadyQueryVariables = Exact<{ [key: string]: never; }>;


export type Q_ReadyQuery = { __typename?: 'Query', ready?: boolean | null };


export const Q_ReadyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Q_READY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ready"}}]}}]} as unknown as DocumentNode<Q_ReadyQuery, Q_ReadyQueryVariables>;