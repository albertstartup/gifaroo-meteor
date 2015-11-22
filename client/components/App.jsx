App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      post: AppState.get('post')
    };  
  },
  componentDidMount() {
    changePost();
  },
  render() {
    return <Post post={this.data.post}/>
  }
});