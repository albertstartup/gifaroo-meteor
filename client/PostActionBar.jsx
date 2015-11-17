  PostActionBar = React.createClass({
    render() {
      return (
        <div style={styles.postActionBar}>
          <PostActionButton onTap={this.props.onTapNext} type="next"/>
          <PostActionButton onTap={this.props.onTapShare} type="share"/>
        </div>
      )
    }
  })

PostActionButton = React.createClass({
  getButtonStyle: function() {
    if (this.props.type === 'share') {
      return styles.shareButton;
    } else if (this.props.type === 'next') {
      return styles.nextButton;
    }
  },
  getButtonText: function() {
    if (this.props.type === 'share') {
      return 'Share';
    } else if (this.props.type === 'next') {
      return 'Next';
    }
  },
  render() {
    return (
      <Tappable onTap={this.props.onTap} style={this.getButtonStyle()}>
      <span style={styles.buttonText}>{this.getButtonText()}</span>
      </Tappable>
      )
  }
})