AddGifButton = React.createClass({
  render() {
    return (

      <Tappable component="div"
                onTap={this._onTap}
                className="postBar"
                style={this._style}>
        {() => {
          if (this.props.post.isAddingPostMedia) {
            return 'NVM!'
          } else {
            return 'Add a GIF!'
          }
        }()}
      </Tappable>

      )
  },
  _onTap() {
    toggleIsAddingPostMedia()
  },
  _style: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28 + '%',
  }
})