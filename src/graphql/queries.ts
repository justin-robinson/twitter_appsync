// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTweet = `query GetTweet($id: ID!) {
  getTweet(id: $id) {
    id
    owner
    text
    replies {
      items {
        id
        owner
        text
      }
      nextToken
    }
    tweet {
      id
      owner
      text
      replies {
        nextToken
      }
      tweet {
        id
        owner
        text
      }
    }
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
      owner
      text
      replies {
        nextToken
      }
      tweet {
        id
        owner
        text
      }
    }
    nextToken
  }
}
`;
export const searchTweets = `query SearchTweets(
  $filter: SearchableTweetFilterInput
  $sort: SearchableTweetSortInput
  $limit: Int
  $nextToken: String
) {
  searchTweets(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      owner
      text
      replies {
        nextToken
      }
      tweet {
        id
        owner
        text
      }
    }
    nextToken
    total
  }
}
`;
