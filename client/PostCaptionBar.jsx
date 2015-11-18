PostCaptionBar = React.createClass({
  componentDidMount() {
    ReactDOM.findDOMNode(this).childNodes[0].childNodes[0].value = this.props.captionText;
    autosize(ReactDOM.findDOMNode(this).childNodes[0].childNodes[0]);
  },
  componentDidUpdate() {
    ReactDOM.findDOMNode(this).childNodes[0].childNodes[0].value = this.props.captionText;
  },
  render() {
    return (

      <Tappable onTap={this.props.onTap} preventDefault={this.props.disableTextInput} stopPropagation={true} component="div">

      <div style={styles.captionBar}>
      <textarea style={styles.captionBarTextarea} onChange={this.props.onEditCaption}></textarea>
      </div>
      </Tappable>

      )
  }
})