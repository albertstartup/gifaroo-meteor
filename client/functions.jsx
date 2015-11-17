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