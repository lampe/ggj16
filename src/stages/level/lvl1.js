Lvl1 = function () {
  this.init = function () {
    game.player = new Player({
      speed: 70,
      name: 'player1',
      path: 'assets/player/hero',
      healthPaths: {
        full: 'assets/ui/health1.png',
        empth: 'assets/ui/health2.png'
      },
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: 32,
        y: 70
      },
      frameRate: 10,
    });
  }
  this.preload = function () {
    game.player.preload();
  }
  this.create = function () {
    game.player.create();
  }
  this.render = function () {
    Render.start()
  }
  this.update = function () {

  }
};
