Meteor.methods({
  getPostWithIndex: function (postIndex) {
    this.unblock();

    var posts;
    var post;
    var nextPostIndex;

    posts = Posts.find({}).fetch();
    
    if (postIndex >= posts.length) {
      post = posts[0]

      post.nextPostIndex = 1;
    } else {
      post = posts[postIndex];

      post.nextPostIndex = postIndex + 1;
    }

    return post;
  },
  sharePost: function (mediaUri, captionText) {
    this.unblock();

    if (!mediaUri.includes('.gif')) {
      throw new Meteor.Error('media-not-gif', 'Media is not a gif');
      return;
    }

    check(mediaUri, String);
    check(captionText, String);

    Posts.insert({mediaUri: mediaUri, captionText: captionText});
  },
  requestCaption: function(mediaUri) {
    this.unblock();
    check(mediaUri, String);

    Meteor.call('sharePost', mediaUri, 'caption this');
  }
});