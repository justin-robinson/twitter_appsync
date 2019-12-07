// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    tweets {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      tweets {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTweet = `query GetTweet($id: ID!) {
  getTweet(id: $id) {
    id
    title
    user {
      id
      name
      tweets {
        nextToken
      }
    }
    replies {
      items {
        id
        title
      }
      nextToken
    }
    tweet {
      id
      title
      user {
        id
        name
      }
      replies {
        nextToken
      }
      tweet {
        id
        title
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
      title
      user {
        id
        name
      }
      replies {
        nextToken
      }
      tweet {
        id
        title
      }
    }
    nextToken
  }
}
`;
