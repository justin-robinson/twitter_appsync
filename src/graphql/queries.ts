// tslint:disable
// this is an auto generated file. This will be overwritten

export const syncTweets = `query SyncTweets(
  $filter: ModelTweetFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTweets(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      text
      _version
      _deleted
      _lastChangedAt
      owner
    }
    nextToken
    startedAt
  }
}
`;
export const getTweet = `query GetTweet($id: ID!) {
  getTweet(id: $id) {
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
export const listTweets = `query ListTweets(
  $filter: ModelTweetFilterInput
  $limit: Int
  $nextToken: String
) {
  listTweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      _version
      _deleted
      _lastChangedAt
      owner
    }
    nextToken
    startedAt
  }
}
`;
