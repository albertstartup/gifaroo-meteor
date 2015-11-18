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
      return posts[0];
    }
  },
  sharePost: function (mediaUri, captionText) {
    this.unblock();

    if (!mediaUri.includes('.gif')) {
      throw new Meteor.Error('media-not-gif', 'Media is not a gif');
      return;
    }

    check(mediaUri, String);
    check(captionText, String);

    Posts.insert({datePosted: new Date(), mediaUri: mediaUri, captionText: captionText || 'caption this'});
  }
});