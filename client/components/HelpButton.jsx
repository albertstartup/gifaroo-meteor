HelpButton = React.createClass({
  render() {
    return (

      <Tappable component="div"
                onTap={this._onTap}
                className="postBar"
                style={this._style}>
        Help Dawg!
      </Tappable>

      )
  },
  _onTap() {
    console.log('tapped HelpButton')
    shareAndChangePost();
  },
  _style: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28 + '%',
  }
})