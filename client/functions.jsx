changePost = function() {
  Meteor.call('getPost', this.state.ignoreIds, (function (error, result) {
    console.log(error)
    var newStyle = (getNewStyleWithMediaUriAndOldStyle).bind(this)(result.mediaUri, this.state.style);

    if (result.shouldResetIgnoreIds) {
      var newIgnoreIds = [];
    } else {
      var newIgnoreIds = this.state.ignoreIds.concat([result._id || ''])
    }

    this.setState({
      captionText: result.captionText,
      style: newStyle,
      originalCaptionText: result.captionText,
      mediaUri: result.mediaUri,
      ignoreIds: newIgnoreIds,
      isAddingPostMedia: false,
    });
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
    captionText: 'Tap me to change the caption then tap the photo to share it and see another one.\nPress and hold the picture to add your own gif.',
    style: newStyle,
    originalCaptionText: 'Tap me to change the caption then tap the photo to share it and see another one.\nPress the picture to add your own gif.',
    mediaUri: 'https://i.imgur.com/zXndIUc.gif',
    ignoreIds: [],
    isAddingPostMedia: false,
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