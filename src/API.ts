/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTweetInput = {
  id?: string | null,
  text: string,
  _version?: number | null,
  tweetTweetId?: string | null,
};

export type ModelTweetConditionInput = {
  text?: ModelStringInput | null,
  and?: Array< ModelTweetConditionInput | null > | null,
  or?: Array< ModelTweetConditionInput | null > | null,
  not?: ModelTweetConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateTweetInput = {
  id: string,
  text?: string | null,
  _version?: number | null,
  tweetTweetId?: string | null,
};

export type DeleteTweetInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelTweetFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelTweetFilterInput | null > | null,
  or?: Array< ModelTweetFilterInput | null > | null,
  not?: ModelTweetFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateTweetMutationVariables = {
  input: CreateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type CreateTweetMutation = {
  createTweet:  {
    __typename: "Tweet",
    id: string,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      text: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type UpdateTweetMutationVariables = {
  input: UpdateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type UpdateTweetMutation = {
  updateTweet:  {
    __typename: "Tweet",
    id: string,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      text: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type DeleteTweetMutationVariables = {
  input: DeleteTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type DeleteTweetMutation = {
  deleteTweet:  {
    __typename: "Tweet",
    id: string,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      text: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type SyncTweetsQueryVariables = {
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTweetsQuery = {
  syncTweets:  {
    __typename: "ModelTweetConnection",
    items:  Array< {
      __typename: "Tweet",
      id: string,
      text: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetTweetQueryVariables = {
  id: string,
};

export type GetTweetQuery = {
  getTweet:  {
    __typename: "Tweet",
    id: string,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      text: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type ListTweetsQueryVariables = {
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTweetsQuery = {
  listTweets:  {
    __typename: "ModelTweetConnection",
    items:  Array< {
      __typename: "Tweet",
      id: string,
      text: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateTweetSubscriptionVariables = {
  owner: string,
};

export type OnCreateTweetSubscription = {
  onCreateTweet:  {
    __typename: "Tweet",
    id: string,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      text: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type OnUpdateTweetSubscriptionVariables = {
  owner: string,
};

export type OnUpdateTweetSubscription = {
  onUpdateTweet:  {
    __typename: "Tweet",
    id: string,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      text: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type OnDeleteTweetSubscriptionVariables = {
  owner: string,
};

export type OnDeleteTweetSubscription = {
  onDeleteTweet:  {
    __typename: "Tweet",
    id: string,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      text: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};
