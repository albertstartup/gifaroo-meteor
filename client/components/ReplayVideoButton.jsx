ReplayVideoButton = React.createClass({
  render() {
    return (

      <Tappable component="div"
                onTap={this._onTap}
                className="postBar"
                style={this._style}>
        Replay
      </Tappable>

      )
  },
  _onTap() {
    document.getElementById('postVideo').play();
  },
  _style: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    right: 35 + '%',
    width: 28 + '%',
  }
})