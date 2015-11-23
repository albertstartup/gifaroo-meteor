App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      post: AppState.get('post')
    };  
  },
  render() {
    return <Post post={this.data.post}/>
  }
});