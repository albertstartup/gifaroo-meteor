PostMedia = React.createClass({
  componentWillUpdate(nextProps) {
    var imgEl;
    if (isAcceptableImageUri(nextProps.post.newMediaUri)) {
      imgEl = $(ReactDOM.findDOMNode(this)).find('img').first()
      imgEl.attr('src', '');
      imgEl.attr('src', nextProps.post.newMediaUri);
    }
  },
  render() {
    return (
        <Tappable pressDelay={650}
                onPress={this._onPress}
                onTap={this._onTap}
                component="div"
                style={this._style()}>

                  {() => {
                    if (isAcceptableVideoUri(this.props.post.newMediaUri)) {
                      return (<video id="postVideo" style={this._containedStyle}
                      src={this.props.post.newMediaUri} autoPlay preload="auto" loop="loop"
                      ref={this._attachCustomAttributes}
                      ></video>);
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
    
    var style = {
      height: 100 + '%',
      boxSizing: 'border-box',
    }; 

    if (this.props.post.isAddingPostMedia) {
      paddingTop = 50 + '%';
    } else {
      paddingTop = 0;
    }

    style.paddingTop = paddingTop;

    return style;
  },
  _containedStyle: {
    height: 100 + '%',
    width: 100 + '%',
    objectFit: 'contain'
  },
  _attachCustomAttributes(domNode) {
    if (domNode) {
      domNode.setAttribute('webkit-playsinline', 'true');
    }
  }
});