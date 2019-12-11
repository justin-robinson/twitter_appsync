// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTweet = `subscription OnCreateTweet($owner: String!) {
  onCreateTweet(owner: $owner) {
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
export const onUpdateTweet = `subscription OnUpdateTweet($owner: String!) {
  onUpdateTweet(owner: $owner) {
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
export const onDeleteTweet = `subscription OnDeleteTweet($owner: String!) {
  onDeleteTweet(owner: $owner) {
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
