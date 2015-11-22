PostBars = React.createClass({
	render() {
		return (
      <div className="postBars">
        <PostCaptionBar post={this.props.post}/>

        {() => {
          if (this.props.post.isAddingPostMedia) {
            return (<PostAddMediaBar post={this.props.post}/>);
          }
        }()}

        {() => {
          if (this.props.post.shouldShowShareNewMediaBar) {
            return (<PostShareNewMediaBar post={this.props.post}/>);
          }
        }()}
      </div>
    );
	}
});