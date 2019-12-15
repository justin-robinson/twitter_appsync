// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTweet = `mutation CreateTweet(
  $input: CreateTweetInput!
  $condition: ModelTweetConditionInput
) {
  createTweet(input: $input, condition: $condition) {
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
export const updateTweet = `mutation UpdateTweet(
  $input: UpdateTweetInput!
  $condition: ModelTweetConditionInput
) {
  updateTweet(input: $input, condition: $condition) {
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
export const deleteTweet = `mutation DeleteTweet(
  $input: DeleteTweetInput!
  $condition: ModelTweetConditionInput
) {
  deleteTweet(input: $input, condition: $condition) {
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
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    email
    first_name
    last_name
    owner
  }
}
`;
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    email
    first_name
    last_name
    owner
  }
}
`;
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    email
    first_name
    last_name
    owner
  }
}
`;
