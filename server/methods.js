Meteor.methods({
  getPost: function (ignoreIds) {
    this.unblock();

    check(ignoreIds, [String]);

    var posts;

    posts = Posts.find({_id: {$nin: ignoreIds}}).fetch();
    
    if (posts.length === 0) {
      return {mediaUri: 'http://www.gifbin.com/bin/042009/1241026091_youve_been_rickrolled.gif',
      captionText: 'Thats all the gifs, invite your funny friends so that you dont run out of gifs'
      } 
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

    Posts.insert({mediaUri: mediaUri, captionText: captionText || 'caption this'});
  }
});