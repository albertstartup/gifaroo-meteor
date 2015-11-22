PostShareNewMediaBar = React.createClass({
  render() {
    return (

      <Tappable component="div"
                onTap={this._onTap}
                className="postBar"
                style={this._style}>
        <h1>Click to Share or to See a New Gif</h1>
      </Tappable>

      )
  },
  _onTap() {
    console.log('tapped PostShareNewMediaBar')
    shareAndChangePost();
  },
  _style: {
    color: 'white',
    textAlign: 'center'
  }
})