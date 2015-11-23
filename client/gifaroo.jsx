Meteor.startup(function() {
  changePost(() => {
    ReactDOM.render(<App/>, document.getElementById('render-target'))
  });
});