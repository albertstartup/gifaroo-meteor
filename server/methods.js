Meteor.methods({
  getPost: function (ignoreIds) {
    this.unblock();

    check(ignoreIds, [String]);

    var postToSend;

    var filteredPosts;

    var unFilteredPosts = Posts.find({}, {
      sort: {
        datePosted: -1
      }
    }).fetch();

    if (!unFilteredPosts.length) {
      throw new Meteor.Error('no-posts', 'There are no Posts.');
      return;
    }

    filteredPosts = _.reject(unFilteredPosts, function(post) {
      var _index = _.indexOf(ignoreIds, post._id);
      if (_index === -1) {
        return false
      } else {
        return true
      }
    });
    
    if (filteredPosts.length === 0) {
      postToSend= unFilteredPosts[0];

      postToSend.shouldResetIgnoreIds = true;

    } else {
      postToSend = filteredPosts[0];

      if (filteredPosts.length === 1) {
        postToSend.shouldResetIgnoreIds = true;
      }

    }

    if (unFilteredPosts.length > 1) {
      if (filteredPosts.length > 1) {
        if (isAcceptableImageUri(filteredPosts[1].mediaUri)) {
          postToSend.suggestedPreloadImageUri = filteredPosts[1].mediaUri;
        }
      } else {
        if (isAcceptableImageUri(unFilteredPosts[1].mediaUri)) {
          postToSend.suggestedPreloadImageUri = unFilteredPosts[1].mediaUri;
        }
      }
    }

    return postToSend;
  },
  sharePost: function (mediaUri, captionText) {
    this.unblock();

    check(mediaUri, String);
    check(captionText, String);

    if (mediaUri.includes('.gifv')) {
      mediaUri = mediaUri.replace('.gifv', '.mp4');
    }

    if (!isAcceptableMediaUri(mediaUri)) {
      throw new Meteor.Error('media-uri-not-acceptable', 'Media Uri is not acceptable');
      return;
    }

    if (!captionText) {
      throw new Meteor.Error('caption-empty', 'Caption can not be empty');
      return;
    }

    if (Posts.find({mediaUri: mediaUri, captionText: captionText}).count()) {
      throw new Meteor.Error('duplicate-post', 'Post is a duplicate.');
      return;
    }

    Posts.insert({datePosted: new Date(), mediaUri: mediaUri, captionText: captionText || 'caption this'});
  }
});