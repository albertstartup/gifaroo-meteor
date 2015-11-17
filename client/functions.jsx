changeToPostWithIndex = function(index) {
  Meteor.call('getPostWithIndex', index, (function (error, result) {
    var newStyle = this.state.style;
    newStyle.backgroundImage = 'url(' + result.mediaUri + ')';

    this.setState({
      captionText: result.captionText,
      style: newStyle,
      nextPostIndex: result.nextPostIndex,
      originalCaptionText: result.captionText,
      mediaUri: result.mediaUri
    })
  }).bind(this));
}

postGetInitialState = function() {
  var newStyle = styles.postMedia;
  newStyle.backgroundImage = 'url(' + 'https://i.imgur.com/zXndIUc.gif' + ')';
  return { 
    captionText: 'Tap me to change the caption then tap the photo to share it and see another one.\nIf you find a funny gif on another app, open their share menu and click on Gifaroo.',
    style: newStyle,
    nextPostIndex: 0,
    originalCaptionText: 'please caption lol',
    mediaUri: 'https://i.imgur.com/zXndIUc.gif'
  }
}