PostShareNewMediaBar = React.createClass({
  render() {
    return (

      <Tappable component="div"
                onTap={this._onTap}
                className="postBar"
                style={this._style}>
        Tap anywhere to share your caption or see a new gif
      </Tappable>

      )
  },
  _onTap() {
    console.log('tapped PostShareNewMediaBar')
    shareAndChangePost();
  },
  _style: {
    textAlign: 'center'
  }
})