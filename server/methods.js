Meteor.methods({
  getPost: function (ignoreIds) {
    this.unblock();

    check(ignoreIds, [String]);

    var posts;

    posts = Posts.find({_id: {$nin: ignoreIds}}, {
      sort: {
        datePosted: -1
      }
    }).fetch();
    
    if (posts.length === 0) {
      var latestPost = Posts.find({}, {
        sort: {
          datePosted: -1
        }
      }).fetch()[0];
      latestPost.shouldResetIgnoreIds = true;
      return latestPost;
    } else {
      var post = posts[0];

      if (posts.length === 1) {
        post.shouldResetIgnoreIds = true;
      }

      return post;
    }
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