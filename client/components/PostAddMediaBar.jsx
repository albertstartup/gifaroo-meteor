PostAddMediaBar = React.createClass({
  componentDidMount() {
    autosize(ReactDOM.findDOMNode(this));
  },
  componentDidUpdate() {
    autosize(ReactDOM.findDOMNode(this));
  },
  render() {
    return (

      <textarea className="postBar"
                onChange={this._onEditPostMediaUri}
                value={this.props.post.newMediaUri}>
      </textarea>

    );
  },
  _onEditPostMediaUri(event) {
    AppState.set('post.newMediaUri', event.target.value);
  }
})