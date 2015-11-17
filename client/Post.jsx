Post = React.createClass({
    getInitialState() {
      postGetInitialState();
    },
    componentDidMount() {
      (changeToPostWithIndex).bind(this)(0)
    },
    changePost() {
      (changeToPostWithIndex).bind(this)(this.state.nextPostIndex)
    },
    sharePost() {
      if (this.state.captionText !== this.state.originalCaptionText) {
        Meteor.call('sharePost', this.state.mediaUri, this.state.captionText);
      };
    },
    captureNewCaption(event) {
      this.setState({
        captionText: event.target.value
      });
    },
    render() {
      return (
        <Tappable onTap={() => {this.sharePost(); this.changePost();}} component="div" style={this.state.style}>
        <PostCaptionBar onEditCaption={this.captureNewCaption} captionText={this.state.captionText}/>
        </Tappable>
        )
    }
  })