Post = React.createClass({
  render() {
    return (
      <div className="fullHeight">
        <PostBars post={this.props.post}/>
        
        <PostMedia post={this.props.post}/>

        <AddGifButton post={this.props.post}/>

        {() => {
          if (isAcceptableVideoUri(this.props.post.newMediaUri)) {
            return (
              <ReplayVideoButton/>
            )
          }
        }()}
      </div>
    );
  }
});