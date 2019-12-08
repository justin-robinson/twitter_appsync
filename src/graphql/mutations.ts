// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTweet = `mutation CreateTweet(
  $input: CreateTweetInput!
  $condition: ModelTweetConditionInput
) {
  createTweet(input: $input, condition: $condition) {
    id
    text
    replies {
      nextToken
      startedAt
    }
    tweet {
      id
      text
      _version
      _deleted
      _lastChangedAt
      owner
    }
    _version
    _deleted
    _lastChangedAt
    owner
  }
}
`;
export const updateTweet = `mutation UpdateTweet(
  $input: UpdateTweetInput!
  $condition: ModelTweetConditionInput
) {
  updateTweet(input: $input, condition: $condition) {
    id
    text
    replies {
      nextToken
      startedAt
    }
    tweet {
      id
      text
      _version
      _deleted
      _lastChangedAt
      owner
    }
    _version
    _deleted
    _lastChangedAt
    owner
  }
}
`;
export const deleteTweet = `mutation DeleteTweet(
  $input: DeleteTweetInput!
  $condition: ModelTweetConditionInput
) {
  deleteTweet(input: $input, condition: $condition) {
    id
    text
    replies {
      nextToken
      startedAt
    }
    tweet {
      id
      text
      _version
      _deleted
      _lastChangedAt
      owner
    }
    _version
    _deleted
    _lastChangedAt
    owner
  }
}
`;
