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
  DateTimeISO: { input: any; output: any; }
};

export type AllGameSpacesWhereInput = {
  creationSpaceId: Scalars['ID']['input'];
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

export type CreateCreationSpaceInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  themeIds: Array<Scalars['ID']['input']>;
};

export type CreateCreationSpaceResult = BadRequestError | BaseError | CreateCreationSpaceSuccess;

export type CreateCreationSpaceSuccess = {
  __typename?: 'CreateCreationSpaceSuccess';
  creationSpace: CreationSpace;
};

export type CreateGameSpaceInput = {
  creationSpaceId: Scalars['ID']['input'];
  themeId: Scalars['ID']['input'];
};

export type CreateGameSpaceResult = BadRequestError | BaseError | CreateGameSpaceSuccess | NotFoundError;

export type CreateGameSpaceSuccess = {
  __typename?: 'CreateGameSpaceSuccess';
  gameSpace: GameSpace;
};

export type CreateIdeaInput = {
  category: IdeaCategory;
  content?: InputMaybe<Scalars['String']['input']>;
  gameSpaceId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateIdeaResult = BadRequestError | BaseError | CreateIdeaSuccess;

export type CreateIdeaSuccess = {
  __typename?: 'CreateIdeaSuccess';
  idea: Idea;
};

export type CreateThemeInput = {
  theme: Scalars['String']['input'];
};

export type CreateThemeResult = BadRequestError | BaseError | CreateThemeResultSuccess | ThemeAlreadyExistsError;

export type CreateThemeResultSuccess = {
  __typename?: 'CreateThemeResultSuccess';
  theme: Theme;
};

export type CreationSpace = {
  __typename?: 'CreationSpace';
  color?: Maybe<Scalars['String']['output']>;
  creationDate: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  ideaTags?: Maybe<Array<Tag>>;
  spaces?: Maybe<Array<GameSpace>>;
  taskTags?: Maybe<Array<Tag>>;
};

export type CreationSpaceNotFoundError = {
  __typename?: 'CreationSpaceNotFoundError';
  message: Scalars['String']['output'];
};

export type CreationSpaceWhere = {
  id: Scalars['ID']['input'];
};

export type DeleteIdeaResult = BaseError | DeleteIdeaSuccess | NotFoundError;

export type DeleteIdeaSuccess = {
  __typename?: 'DeleteIdeaSuccess';
  idea: Idea;
};

export type DeleteIdeaWhere = {
  id: Scalars['ID']['input'];
};

export type GameSpace = {
  __typename?: 'GameSpace';
  creationSpace?: Maybe<CreationSpace>;
  creationSpaceID?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  ideas?: Maybe<Array<Idea>>;
  rejected?: Maybe<Scalars['Boolean']['output']>;
  theme?: Maybe<Theme>;
  themeId?: Maybe<Scalars['ID']['output']>;
};

export type GameSpaceNotFoundError = {
  __typename?: 'GameSpaceNotFoundError';
  message: Scalars['String']['output'];
};

export type GameSpaceWhere = {
  id: Scalars['ID']['input'];
};

export type Idea = {
  __typename?: 'Idea';
  category?: Maybe<IdeaCategory>;
  content?: Maybe<Scalars['String']['output']>;
  gameSpace?: Maybe<GameSpace>;
  gameSpaceId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export enum IdeaCategory {
  Animation = 'ANIMATION',
  Design = 'DESIGN',
  Gameplay = 'GAMEPLAY',
  Music = 'MUSIC',
  Story = 'STORY',
  Uiux = 'UIUX'
}

export type Mutation = {
  __typename?: 'Mutation';
  createCreationSpace: CreateCreationSpaceResult;
  createGameSpace: CreateGameSpaceResult;
  createIdea: CreateIdeaResult;
  createTheme: CreateThemeResult;
  deleteIdea: DeleteIdeaResult;
  updateCreationSpace: UpdateCreationSpaceResult;
  updateGameSpace: UpdateGameSpaceResult;
  updateIdea: UpdateIdeaResult;
  updateTheme: UpdateThemeResult;
};


export type MutationCreateCreationSpaceArgs = {
  data: CreateCreationSpaceInput;
};


export type MutationCreateGameSpaceArgs = {
  data: CreateGameSpaceInput;
};


export type MutationCreateIdeaArgs = {
  data: CreateIdeaInput;
};


export type MutationCreateThemeArgs = {
  data: CreateThemeInput;
};


export type MutationDeleteIdeaArgs = {
  where: DeleteIdeaWhere;
};


export type MutationUpdateCreationSpaceArgs = {
  data: UpdateCreationSpaceInput;
  where?: InputMaybe<UpdateGameSpaceWhere>;
};


export type MutationUpdateGameSpaceArgs = {
  data: UpdateGameSpaceInput;
  where?: InputMaybe<UpdateGameSpaceWhere>;
};


export type MutationUpdateIdeaArgs = {
  data: UpdateIdeaInput;
  where: UpdateIdeaWhere;
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
  allCreationSpace: Array<CreationSpace>;
  allGameSpaces: Array<GameSpace>;
  creationSpace: CreationSpace;
  gameSpace: GameSpace;
  randomThemes: Array<Theme>;
  ready?: Maybe<Scalars['Boolean']['output']>;
  themes: Array<Theme>;
  version?: Maybe<Scalars['String']['output']>;
};


export type QueryAllGameSpacesArgs = {
  where: AllGameSpacesWhereInput;
};


export type QueryCreationSpaceArgs = {
  where: CreationSpaceWhere;
};


export type QueryGameSpaceArgs = {
  where: GameSpaceWhere;
};


export type QueryRandomThemesArgs = {
  input: RandomThemeWhereInput;
};

export type RandomThemeWhereInput = {
  amount: Scalars['Int']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  color?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

export type Theme = {
  __typename?: 'Theme';
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  theme: Scalars['String']['output'];
};

export type ThemeAlreadyExistsError = {
  __typename?: 'ThemeAlreadyExistsError';
  message: Scalars['String']['output'];
};

export type ThemeWhereInput = {
  id: Scalars['ID']['input'];
};

export type UpdateCreationSpaceInput = {
  color?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCreationSpaceResult = BadRequestError | BaseError | CreationSpaceNotFoundError | NotFoundError | UpdateCreationSpaceSuccess;

export type UpdateCreationSpaceSuccess = {
  __typename?: 'UpdateCreationSpaceSuccess';
  creationSpace: CreationSpace;
};

export type UpdateCreationSpaceWhere = {
  id: Scalars['ID']['input'];
};

export type UpdateGameSpaceInput = {
  rejected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateGameSpaceResult = BadRequestError | BaseError | GameSpaceNotFoundError | NotFoundError | UpdateGameSpaceSuccess;

export type UpdateGameSpaceSuccess = {
  __typename?: 'UpdateGameSpaceSuccess';
  gameSpace: GameSpace;
};

export type UpdateGameSpaceWhere = {
  id: Scalars['ID']['input'];
};

export type UpdateIdeaInput = {
  category?: InputMaybe<IdeaCategory>;
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateIdeaResult = BadRequestError | BaseError | NotFoundError | UpdateIdeaSuccess;

export type UpdateIdeaSuccess = {
  __typename?: 'UpdateIdeaSuccess';
  idea: Idea;
};

export type UpdateIdeaWhere = {
  id: Scalars['ID']['input'];
};

export type UpdateThemeInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateThemeResult = BadRequestError | BaseError | NotFoundError | ThemeAlreadyExistsError | UpdateThemeResultSuccess;

export type UpdateThemeResultSuccess = {
  __typename?: 'UpdateThemeResultSuccess';
  theme: Theme;
};

export type Q_CreationspaceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Q_CreationspaceQuery = { __typename?: 'Query', creationSpace: { __typename?: 'CreationSpace', color?: string | null, creationDate: any, id: string, spaces?: Array<{ __typename?: 'GameSpace', id: string, rejected?: boolean | null, theme?: { __typename?: 'Theme', theme: string, id: string } | null, ideas?: Array<{ __typename?: 'Idea', title?: string | null, id: string, content?: string | null, category?: IdeaCategory | null }> | null }> | null } };

export type Q_AllcreationspaceQueryVariables = Exact<{ [key: string]: never; }>;


export type Q_AllcreationspaceQuery = { __typename?: 'Query', allCreationSpace: Array<{ __typename?: 'CreationSpace', color?: string | null, creationDate: any, id: string, spaces?: Array<{ __typename?: 'GameSpace', id: string, rejected?: boolean | null, theme?: { __typename?: 'Theme', theme: string, id: string } | null, ideas?: Array<{ __typename?: 'Idea', title?: string | null, id: string, content?: string | null, category?: IdeaCategory | null }> | null }> | null }> };

export type M_CreatecreationspaceMutationVariables = Exact<{
  data: CreateCreationSpaceInput;
}>;


export type M_CreatecreationspaceMutation = { __typename?: 'Mutation', createCreationSpace: { __typename: 'BadRequestError', code: string, message: string } | { __typename: 'BaseError', code: string, message: string } | { __typename: 'CreateCreationSpaceSuccess', creationSpace: { __typename?: 'CreationSpace', id: string } } };

export type M_UpdatecreationspaceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: UpdateCreationSpaceInput;
}>;


export type M_UpdatecreationspaceMutation = { __typename?: 'Mutation', updateCreationSpace: { __typename: 'BadRequestError', code: string, message: string } | { __typename: 'BaseError', code: string, message: string } | { __typename: 'CreationSpaceNotFoundError', message: string } | { __typename: 'NotFoundError', code: string, message: string } | { __typename: 'UpdateCreationSpaceSuccess', creationSpace: { __typename?: 'CreationSpace', id: string } } };

export type Q_ReadyQueryVariables = Exact<{ [key: string]: never; }>;


export type Q_ReadyQuery = { __typename?: 'Query', ready?: boolean | null };

export type M_CreateideaMutationVariables = Exact<{
  data: CreateIdeaInput;
}>;


export type M_CreateideaMutation = { __typename?: 'Mutation', createIdea: { __typename: 'BadRequestError', code: string, message: string } | { __typename: 'BaseError', code: string, message: string } | { __typename: 'CreateIdeaSuccess', idea: { __typename?: 'Idea', category?: IdeaCategory | null, id: string, title?: string | null, content?: string | null } } };

export type M_UpdateideaMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: UpdateIdeaInput;
}>;


export type M_UpdateideaMutation = { __typename?: 'Mutation', updateIdea: { __typename: 'BadRequestError', code: string, message: string } | { __typename: 'BaseError', code: string, message: string } | { __typename: 'NotFoundError', code: string, message: string } | { __typename: 'UpdateIdeaSuccess', idea: { __typename?: 'Idea', category?: IdeaCategory | null, id: string, title?: string | null, content?: string | null } } };

export type M_DeleteideaMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type M_DeleteideaMutation = { __typename?: 'Mutation', deleteIdea: { __typename: 'BaseError', code: string, message: string } | { __typename: 'DeleteIdeaSuccess' } | { __typename: 'NotFoundError', code: string, message: string } };

export type Q_ThemesQueryVariables = Exact<{ [key: string]: never; }>;


export type Q_ThemesQuery = { __typename?: 'Query', themes: Array<{ __typename?: 'Theme', active: boolean, id: string, theme: string }> };

export type Q_RandomthemesQueryVariables = Exact<{
  amount: Scalars['Int']['input'];
}>;


export type Q_RandomthemesQuery = { __typename?: 'Query', randomThemes: Array<{ __typename?: 'Theme', active: boolean, id: string, theme: string }> };


export const Q_CreationspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Q_CREATIONSPACE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creationSpace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"spaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ideas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Q_CreationspaceQuery, Q_CreationspaceQueryVariables>;
export const Q_AllcreationspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Q_ALLCREATIONSPACE"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCreationSpace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"spaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ideas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Q_AllcreationspaceQuery, Q_AllcreationspaceQueryVariables>;
export const M_CreatecreationspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"M_CREATECREATIONSPACE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCreationSpaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCreationSpace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCreationSpaceSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creationSpace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BadRequestError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<M_CreatecreationspaceMutation, M_CreatecreationspaceMutationVariables>;
export const M_UpdatecreationspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"M_UPDATECREATIONSPACE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCreationSpaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCreationSpace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCreationSpaceSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creationSpace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreationSpaceNotFoundError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BadRequestError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotFoundError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<M_UpdatecreationspaceMutation, M_UpdatecreationspaceMutationVariables>;
export const Q_ReadyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Q_READY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ready"}}]}}]} as unknown as DocumentNode<Q_ReadyQuery, Q_ReadyQueryVariables>;
export const M_CreateideaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"M_CREATEIDEA"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateIdeaInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIdea"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateIdeaSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BadRequestError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<M_CreateideaMutation, M_CreateideaMutationVariables>;
export const M_UpdateideaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"M_UPDATEIDEA"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateIdeaInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateIdea"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateIdeaSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BadRequestError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotFoundError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<M_UpdateideaMutation, M_UpdateideaMutationVariables>;
export const M_DeleteideaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"M_DELETEIDEA"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteIdea"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotFoundError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<M_DeleteideaMutation, M_DeleteideaMutationVariables>;
export const Q_ThemesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Q_THEMES"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"themes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]}}]} as unknown as DocumentNode<Q_ThemesQuery, Q_ThemesQueryVariables>;
export const Q_RandomthemesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Q_RANDOMTHEMES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"randomThemes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]}}]} as unknown as DocumentNode<Q_RandomthemesQuery, Q_RandomthemesQueryVariables>;