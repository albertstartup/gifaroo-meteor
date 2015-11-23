PostAddMediaBar = React.createClass({
  componentDidMount() {
    autosize(ReactDOM.findDOMNode(this));
  },
  componentDidUpdate() {
    autosize.update(ReactDOM.findDOMNode(this));
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
    var newValue;

    if (event.target.value.includes('.gifv')) {
      newValue = event.target.value.replace('.gifv', '.mp4');
    } else {
      newValue = null;
    }

    AppState.set('post.newMediaUri', newValue || event.target.value);
  }
})