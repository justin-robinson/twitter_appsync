/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTweetInput = {
  id?: string | null,
  owner?: string | null,
  author?: UserInput | null,
  text: string,
  tweetTweetId?: string | null,
};

export type UserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  first_name?: string | null,
  last_name?: string | null,
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
  owner?: string | null,
  author?: UserInput | null,
  text?: string | null,
  tweetTweetId?: string | null,
};

export type DeleteTweetInput = {
  id?: string | null,
};

export type ModelTweetFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
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

export type SearchableTweetFilterInput = {
  id?: SearchableIDFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  text?: SearchableStringFilterInput | null,
  and?: Array< SearchableTweetFilterInput | null > | null,
  or?: Array< SearchableTweetFilterInput | null > | null,
  not?: SearchableTweetFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableTweetSortInput = {
  field?: SearchableTweetSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableTweetSortableFields {
  id = "id",
  owner = "owner",
  text = "text",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type CreateTweetMutationVariables = {
  input: CreateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type CreateTweetMutation = {
  createTweet:  {
    __typename: "Tweet",
    id: string,
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      username: string | null,
      email: string | null,
      first_name: string | null,
      last_name: string | null,
    } | null,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      owner: string | null,
      author:  {
        __typename: "User",
        id: string,
        username: string | null,
        email: string | null,
        first_name: string | null,
        last_name: string | null,
      } | null,
      text: string,
      replies:  {
        __typename: "ModelTweetConnection",
        nextToken: string | null,
      } | null,
      tweet:  {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null,
    } | null,
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
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      username: string | null,
      email: string | null,
      first_name: string | null,
      last_name: string | null,
    } | null,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      owner: string | null,
      author:  {
        __typename: "User",
        id: string,
        username: string | null,
        email: string | null,
        first_name: string | null,
        last_name: string | null,
      } | null,
      text: string,
      replies:  {
        __typename: "ModelTweetConnection",
        nextToken: string | null,
      } | null,
      tweet:  {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null,
    } | null,
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
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      username: string | null,
      email: string | null,
      first_name: string | null,
      last_name: string | null,
    } | null,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      owner: string | null,
      author:  {
        __typename: "User",
        id: string,
        username: string | null,
        email: string | null,
        first_name: string | null,
        last_name: string | null,
      } | null,
      text: string,
      replies:  {
        __typename: "ModelTweetConnection",
        nextToken: string | null,
      } | null,
      tweet:  {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null,
    } | null,
  } | null,
};

export type GetTweetQueryVariables = {
  id: string,
};

export type GetTweetQuery = {
  getTweet:  {
    __typename: "Tweet",
    id: string,
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      username: string | null,
      email: string | null,
      first_name: string | null,
      last_name: string | null,
    } | null,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      owner: string | null,
      author:  {
        __typename: "User",
        id: string,
        username: string | null,
        email: string | null,
        first_name: string | null,
        last_name: string | null,
      } | null,
      text: string,
      replies:  {
        __typename: "ModelTweetConnection",
        nextToken: string | null,
      } | null,
      tweet:  {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null,
    } | null,
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
      owner: string | null,
      author:  {
        __typename: "User",
        id: string,
        username: string | null,
        email: string | null,
        first_name: string | null,
        last_name: string | null,
      } | null,
      text: string,
      replies:  {
        __typename: "ModelTweetConnection",
        nextToken: string | null,
      } | null,
      tweet:  {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchTweetsQueryVariables = {
  filter?: SearchableTweetFilterInput | null,
  sort?: SearchableTweetSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchTweetsQuery = {
  searchTweets:  {
    __typename: "SearchableTweetConnection",
    items:  Array< {
      __typename: "Tweet",
      id: string,
      owner: string | null,
      author:  {
        __typename: "User",
        id: string,
        username: string | null,
        email: string | null,
        first_name: string | null,
        last_name: string | null,
      } | null,
      text: string,
      replies:  {
        __typename: "ModelTweetConnection",
        nextToken: string | null,
      } | null,
      tweet:  {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type OnCreateTweetSubscriptionVariables = {
  owner: string,
};

export type OnCreateTweetSubscription = {
  onCreateTweet:  {
    __typename: "Tweet",
    id: string,
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      username: string | null,
      email: string | null,
      first_name: string | null,
      last_name: string | null,
    } | null,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      owner: string | null,
      author:  {
        __typename: "User",
        id: string,
        username: string | null,
        email: string | null,
        first_name: string | null,
        last_name: string | null,
      } | null,
      text: string,
      replies:  {
        __typename: "ModelTweetConnection",
        nextToken: string | null,
      } | null,
      tweet:  {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateTweetSubscriptionVariables = {
  owner: string,
};

export type OnUpdateTweetSubscription = {
  onUpdateTweet:  {
    __typename: "Tweet",
    id: string,
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      username: string | null,
      email: string | null,
      first_name: string | null,
      last_name: string | null,
    } | null,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      owner: string | null,
      author:  {
        __typename: "User",
        id: string,
        username: string | null,
        email: string | null,
        first_name: string | null,
        last_name: string | null,
      } | null,
      text: string,
      replies:  {
        __typename: "ModelTweetConnection",
        nextToken: string | null,
      } | null,
      tweet:  {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteTweetSubscriptionVariables = {
  owner: string,
};

export type OnDeleteTweetSubscription = {
  onDeleteTweet:  {
    __typename: "Tweet",
    id: string,
    owner: string | null,
    author:  {
      __typename: "User",
      id: string,
      username: string | null,
      email: string | null,
      first_name: string | null,
      last_name: string | null,
    } | null,
    text: string,
    replies:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tweet:  {
      __typename: "Tweet",
      id: string,
      owner: string | null,
      author:  {
        __typename: "User",
        id: string,
        username: string | null,
        email: string | null,
        first_name: string | null,
        last_name: string | null,
      } | null,
      text: string,
      replies:  {
        __typename: "ModelTweetConnection",
        nextToken: string | null,
      } | null,
      tweet:  {
        __typename: "Tweet",
        id: string,
        owner: string | null,
        text: string,
      } | null,
    } | null,
  } | null,
};
