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
  themes: Array<Scalars['ID']['input']>;
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

export type Q_ReadyQueryVariables = Exact<{ [key: string]: never; }>;


export type Q_ReadyQuery = { __typename?: 'Query', ready?: boolean | null };


export const Q_ReadyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Q_READY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ready"}}]}}]} as unknown as DocumentNode<Q_ReadyQuery, Q_ReadyQueryVariables>;