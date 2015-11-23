PostMedia = React.createClass({
  render() {
    return (
        <Tappable pressDelay={650}
                onPress={this._onPress}
                onTap={this._onTap}
                component="div"
                style={this._style()}>

                  {() => {
                    if (isAcceptableVideoUri(this.props.post.newMediaUri)) {
                      return (<video style={this._containedStyle}
                      src={this.props.post.newMediaUri} autoPlay loop="loop"></video>);
                    } else if (isAcceptableImageUri(this.props.post.newMediaUri)) {
                      return (<img style={this._containedStyle}
                      src={this.props.post.newMediaUri}></img>)
                    }
                  }()}

        </Tappable>
    );
  },
  _onTap() {
    shareAndChangePost();
  },
  _style() {
    var height;
    var marginTop;
    
    var completeStyle = {}; 

    if (this.props.post.isAddingPostMedia) {
      height = 75 + '%';
      marginTop = 50 + '%';
    } else {
      height = 100 + '%';
      marginTop = 0;
    }

    completeStyle.height = height;
    completeStyle.marginTop = marginTop

    return completeStyle;
  },
  _containedStyle: {
    height: 100 + '%',
    width: 100 + '%',
    objectFit: 'contain'
  }
});