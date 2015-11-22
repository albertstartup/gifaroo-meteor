PostShareNewMediaBar = React.createClass({
  render() {
    return (

      <Tappable component="div"
                onTap={this._onTap}
                className="postBar"
                style={this._style}>{this._copy()}</Tappable>

      );
  },
  _onTap() {
    console.log('tapped PostShareNewMediaBar')
    shareAndChangePost();
  },
  _style: {
    textAlign: 'center'
  },
  _copy() {
    if (this.props.post.isAddingPostMedia) {
      return 'Tap here to share your new gif and caption'
    } else {
      return 'Tap anywhere to share your caption or see a new gif'
    }
  }
})