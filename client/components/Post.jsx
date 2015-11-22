Post = React.createClass({
  render() {
    return (
      <div className="fullHeight">
        <PostBars post={this.props.post}/>
        
        <PostMedia post={this.props.post}/>
      </div>
    );
  }
});