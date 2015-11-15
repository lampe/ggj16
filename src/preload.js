Preload = {};

Preload.atlasJSONHash = function () {

}

Preload.image = function () {

}

Preload.audio = function () {
  game.load.audio("startup", ['assets/audio/intro/gbstartup.mp3','assets/audio/intro/gbstartup.ogg']);
}

Preload.start = function () {
  Preload.atlasJSONHash();
  Preload.image();
  Preload.audio();
}
