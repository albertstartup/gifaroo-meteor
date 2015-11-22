AppState = new ReactiveState();

AppState.set('post', {
  originalCaptionText: 'default',
  newCaptionText: 'default',
  originalMediaUri: 'https://media.giphy.com/media/MJs7EYwHyG8XC/giphy.gif',
  newMediaUri: 'https://media.giphy.com/media/MJs7EYwHyG8XC/giphy.gif',
  ignoreIds: [],
  isAddingPostMedia: false,
  shouldShowShareNewMediaBar: true
});