isAcceptableMediaUri = function(mediaUri) {
  //mediaUri.includes('') || mediaUri.includes('')
	return isAcceptableVideoUri(mediaUri) || isAcceptableImageUri(mediaUri)
};

isAcceptableVideoUri = function(mediaUri) {
	return mediaUri.includes('.mp4') || mediaUri.includes('.gifv');
};

isAcceptableImageUri = function(mediaUri) {
	return mediaUri.includes('.gif') ||
  mediaUri.includes('.jpeg') ||
  mediaUri.includes('.jpg') ||
  mediaUri.includes('.png');
}