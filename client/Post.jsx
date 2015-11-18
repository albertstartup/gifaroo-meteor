Post = React.createClass({
  getInitialState() {
    return postGetInitialState();
  },
  render() {
    return (
      <Tappable pressDelay={650} onPress={() => {this.setState({isAddingPostMedia: !this.state.isAddingPostMedia})}} onTap={() => {(sharePost).bind(this)(); (changePost).bind(this)();}} component="div" style={this.state.style}>
      <PostCaptionBar onEditCaption={(captureNewCaption).bind(this)} captionText={this.state.captionText}/>

      {(renderAddingPostMedia).bind(this)()}

      </Tappable>
      )
  }
})