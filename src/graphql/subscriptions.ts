// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTweet = `subscription OnCreateTweet($owner: String!) {
  onCreateTweet(owner: $owner) {
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
export const onUpdateTweet = `subscription OnUpdateTweet($owner: String!) {
  onUpdateTweet(owner: $owner) {
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
export const onDeleteTweet = `subscription OnDeleteTweet($owner: String!) {
  onDeleteTweet(owner: $owner) {
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
