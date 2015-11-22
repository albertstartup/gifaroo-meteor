PostCaptionBar = React.createClass({
  componentDidMount() {
    autosize(ReactDOM.findDOMNode(this));
  },
  componentDidUpdate() {
    autosize(ReactDOM.findDOMNode(this));
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