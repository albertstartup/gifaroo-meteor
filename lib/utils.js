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

addProtocol = function(uri) {
   if (!uri.includes('http://') && !uri.includes('https://')) {
      var defaultProtocol = 'http://';
      return defaultProtocol.concat(uri);
    } else {
      return uri
    }
}