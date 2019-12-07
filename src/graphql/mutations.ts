// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createTweet = `mutation CreateTweet(
  $input: CreateTweetInput!
  $condition: ModelTweetConditionInput
) {
  createTweet(input: $input, condition: $condition) {
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
export const updateTweet = `mutation UpdateTweet(
  $input: UpdateTweetInput!
  $condition: ModelTweetConditionInput
) {
  updateTweet(input: $input, condition: $condition) {
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
export const deleteTweet = `mutation DeleteTweet(
  $input: DeleteTweetInput!
  $condition: ModelTweetConditionInput
) {
  deleteTweet(input: $input, condition: $condition) {
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
