// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTweet = `subscription OnCreateTweet($owner: String!) {
  onCreateTweet(owner: $owner) {
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
export const onUpdateTweet = `subscription OnUpdateTweet($owner: String!) {
  onUpdateTweet(owner: $owner) {
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
export const onDeleteTweet = `subscription OnDeleteTweet($owner: String!) {
  onDeleteTweet(owner: $owner) {
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
export const onCreateUser = `subscription OnCreateUser($owner: String!) {
  onCreateUser(owner: $owner) {
    id
    username
    email
    first_name
    last_name
    owner
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser($owner: String!) {
  onUpdateUser(owner: $owner) {
    id
    username
    email
    first_name
    last_name
    owner
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser($owner: String!) {
  onDeleteUser(owner: $owner) {
    id
    username
    email
    first_name
    last_name
    owner
  }
}
`;
