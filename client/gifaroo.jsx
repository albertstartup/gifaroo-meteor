Meteor.startup(function() {
  App = React.createClass({
    getInitialState() {
      var newStyle = styles.postMedia;
      newStyle.backgroundImage = 'url(' + 'https://i.imgur.com/zXndIUc.gif' + ')';
      return { 
        captionText: 'Tap me to change the caption then tap the photo to share it and see another one.\nIf you find an interesting gif on another app one their share menu and click our app icon.',
        style: newStyle,
        nextPostIndex: 0,
        originalCaptionText: 'please caption lol',
        mediaUri: 'https://i.imgur.com/zXndIUc.gif'
      }
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

ReactDOM.render(<App/>, document.getElementById('render-target'));
});