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

      <Tappable stopPropagation={true} component="div">

      <div style={styles.captionBar}>
      <textarea style={{
        color: 'white',
        backgroundColor: 'transparent',
        border: 'none',
        width: 95 + '%',
        height: 20,
        fontSize: '17',
        paddingTop: 14 + 'px',
        paddingBottom: 14 + 'px',
        paddingLeft: 10 + 'px',
        paddingRight: 10 + 'px',
      }} onChange={this.props.onEditCaption}></textarea>
      </div>
      </Tappable>

      )
  }
})