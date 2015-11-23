PostCaptionBar = React.createClass({
  componentDidMount() {
    autosize(ReactDOM.findDOMNode(this));
  },
  componentDidUpdate() {
    autosize.update(ReactDOM.findDOMNode(this));
    if (isAcceptableMediaUri(this.props.post.newCaptionText)) {
      AppState.set('post.isAddingPostMedia', true);
      AppState.set('post.shouldShowShareNewMediaBar', true);
      AppState.set('post.newMediaUri', this.props.post.newCaptionText);
      AppState.set('post.newCaptionText',
        AppState.get('post.originalCaptionText'));
    }
  },
  render() {
    return (

      <textarea className="postBar"
                onChange={this._onEditCaption}
                value={this.props.post.newCaptionText}>
      </textarea>
    
    );
  },
  _onEditCaption(event) {
    AppState.set('post.newCaptionText', event.target.value);
  }
})