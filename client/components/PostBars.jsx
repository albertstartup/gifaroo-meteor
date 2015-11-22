PostBars = React.createClass({
	render() {
		return (
      <div className="postBars">
        <PostCaptionBar post={this.props.post}/>

        {() => {
          if (this.props.post.isAddingPostMedia) {
            return (
              <span>
                <PostAddMediaBar post={this.props.post}/>
              </span>
            );
          }
        }()}
        <PostShareNewMediaBar/>
      </div>
    );
	}
});