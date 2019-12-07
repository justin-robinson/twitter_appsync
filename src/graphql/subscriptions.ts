// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateTweet = `subscription OnCreateTweet {
  onCreateTweet {
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
export const onUpdateTweet = `subscription OnUpdateTweet {
  onUpdateTweet {
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
export const onDeleteTweet = `subscription OnDeleteTweet {
  onDeleteTweet {
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
