changeToPostWithIndex = function(index) {
  Meteor.call('getPostWithIndex', index, (function (error, result) {
    var newStyle = (getNewStyleWithMediaUriAndOldStyle).bind(this)(result.mediaUri, this.state.style);
    this.setState({
      captionText: result.captionText,
      style: newStyle,
      nextPostIndex: result.nextPostIndex,
      originalCaptionText: result.captionText,
      mediaUri: result.mediaUri,
    })
  }).bind(this));
};

getNewStyleWithMediaUriAndOldStyle = function(mediaUri, oldStyle) {
  var newStyle = oldStyle;
  newStyle.backgroundImage = 'url(' + mediaUri + ')';
  return newStyle;
};

postGetInitialState = function() {
  var newStyle = (getNewStyleWithMediaUriAndOldStyle).bind(this)('https://i.imgur.com/zXndIUc.gif', styles.postMedia);
  return { 
    captionText: 'Tap me to change the caption then tap the photo to share it and see another one.\nIf you find a funny gif on another app, open their share menu and click on Gifaroo.',
    style: newStyle,
    nextPostIndex: 0,
    originalCaptionText: 'please caption lol',
    mediaUri: 'https://i.imgur.com/zXndIUc.gif'
  }
};

captureNewCaption = function(event) {
  console.log(this.state.captionText, event.target.value)
  this.setState({
    captionText: event.target.value
  })
};

captureNewMediaUri = function(event) {
  console.log(event.target.value)
  var newStyle = (getNewStyleWithMediaUriAndOldStyle).bind(this)(event.target.value, this.state.style);
  this.setState({
    mediaUri: event.target.value,
    style: newStyle
  })
};

changePost = function() {
  (changeToPostWithIndex).bind(this)(this.state.nextPostIndex)
};

sharePost = function() {
  if (this.state.captionText !== this.state.originalCaptionText) {
    Meteor.call('sharePost', this.state.mediaUri, this.state.captionText);
  };
};

renderAddingPostMedia = function() {
  if (this.state.isAddingPostMedia) {
    return (
      <span>
      <PostCaptionBar onEditCaption={(captureNewMediaUri).bind(this)} captionText={this.state.mediaUri || 'Enter gif url here'}/>
      <PostCaptionBar onTap={() => {this.setState({isAddingPostMedia: false}); (sharePost).bind(this)(); (changePost).bind(this)();}} disableTextInput={true} captionText={'Click here to share'}/>
      </span>
      )
  }
};