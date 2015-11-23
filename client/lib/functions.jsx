changePost = function(callback) {
  console.log('changing post');
  Meteor.call('getPost', AppState.get('post.ignoreIds') || [], function(error, result){
    if (!error && result) {
      var ignoreIds;

      if (result.shouldResetIgnoreIds) {
        ignoreIds = [];
      } else {
        ignoreIds = (AppState.get('post.ignoreIds') || []).concat(result._id)
      }

      AppState.set('post', {
        originalCaptionText: result.captionText,
        newCaptionText: result.captionText,
        originalMediaUri: result.mediaUri,
        newMediaUri: result.mediaUri,
        ignoreIds: ignoreIds,
        isAddingPostMedia: false,
        shouldShowShareNewMediaBar: (AppState.get('post.shouldShowShareNewMediaBar') || true),
        timesChangedPost: (AppState.get('post.timesChangedPost') || 0),
      });

      if (result.suggestedPreloadImageUri) {
        preloadImage(result.suggestedPreloadImageUri);
      }

      adjustShouldShowSharePostBar();

      if (callback) {
        callback();
      }
    } else {
      console.log('getPost error: ', error)
    }
  });
};

adjustShouldShowSharePostBar = function() {
  AppState.set('post.timesChangedPost',
    (AppState.get('post.timesChangedPost') || 0) +1);

  if (AppState.get('post.timesChangedPost') >= 3) {
    AppState.set('post.shouldShowShareNewMediaBar', false);
  }
}

shareAndChangePost = function() {
  sharePost();
  changePost();
};

sharePost = function() {
  if (isPostDifferent()) {
    Meteor.call('sharePost', (AppState.get('post.newMediaUri') || AppState.get('post.originalMediaUri')), (AppState.get('post.newCaptionText')) || AppState.get('post.originalCaptionText'));
  };
};

isPostDifferent = function() {
  return (AppState.get('post.newCaptionText') ||
          AppState.get('post.newMediaUri')) &&
          (AppState.get('post.newCaptionText') !== AppState.get('post.originalCaptionText') ||
          AppState.get('post.newMediaUri') !== AppState.get('post.originalMediaUri'))
}

toggleIsAddingPostMedia = function() {
  AppState.set('post.isAddingPostMedia', !AppState.get('post.isAddingPostMedia'));
  AppState.set('post.shouldShowShareNewMediaBar', true);
};

preloadImage = function(url) {
  var img = new Image();
  img.src = url;
}