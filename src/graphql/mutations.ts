// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTweet = `mutation CreateTweet(
  $input: CreateTweetInput!
  $condition: ModelTweetConditionInput
) {
  createTweet(input: $input, condition: $condition) {
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
export const updateTweet = `mutation UpdateTweet(
  $input: UpdateTweetInput!
  $condition: ModelTweetConditionInput
) {
  updateTweet(input: $input, condition: $condition) {
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
export const deleteTweet = `mutation DeleteTweet(
  $input: DeleteTweetInput!
  $condition: ModelTweetConditionInput
) {
  deleteTweet(input: $input, condition: $condition) {
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
