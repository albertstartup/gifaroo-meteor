Meteor.startup(function() {
  App = React.createClass({
    render() {
      return <Post/>
    }
  })

ReactDOM.render(<App/>, document.getElementById('render-target'));
});