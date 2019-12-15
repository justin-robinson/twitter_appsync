// tslint:disable
// this is an auto generated file. This will be overwritten

export const listTweets = `query ListTweets(
  $filter: ModelTweetFilterInput
  $limit: Int
  $nextToken: String
) {
  listTweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      author {
        id
        username
        email
        first_name
        last_name
        owner
      }
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
export const getTweet = `query GetTweet($id: ID!) {
  getTweet(id: $id) {
    id
    owner
    author {
      id
      username
      email
      first_name
      last_name
      owner
    }
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
      author {
        id
        username
        email
        first_name
        last_name
        owner
      }
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
      author {
        id
        username
        email
        first_name
        last_name
        owner
      }
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
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    first_name
    last_name
    owner
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
      username
      email
      first_name
      last_name
      owner
    }
    nextToken
  }
}
`;
