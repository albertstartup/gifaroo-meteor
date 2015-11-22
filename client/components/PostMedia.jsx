PostMedia = React.createClass({
  render() {
    return (
        <Tappable pressDelay={650}
                onPress={this._onPress}
                onTap={this._onTap}
                component="div"
                style={this._style()}></Tappable>
    );
  },
  _onTap() {
    shareAndChangePost();
  },
  _style() {
    var height;
    var backgroundSize;
    var marginTop;
    
    var completeStyle; 

    var mediaUri = this.props.post.newMediaUri || this.props.post.originalMediaUri;

    var base = {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };

    completeStyle = base;

    if (this.props.post.isAddingPostMedia) {
      height = 75 + '%';
      backgroundSize = 'contain';
      marginTop = 50 + '%';
    } else {
      height = 100 + '%';
      backgroundSize = 'contain';
      marginTop = 0;
    }

    completeStyle.backgroundImage = 'url(' + (mediaUri) + ')';
    completeStyle.height = height;
    completeStyle.backgroundSize = backgroundSize;
    completeStyle.marginTop = marginTop

    return completeStyle;
  }
});