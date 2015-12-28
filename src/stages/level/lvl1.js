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
    var style = {
      font: "8px gameboy",
      fill: 'rgb(19, 58, 25)'
    };
    Lvl1.text = game.add.text(0, 0, "Level 1: Hell", style);
    Lvl1.text.position.x = game.width / 2 - Lvl1.text.width / 2;
    Lvl1.text.position.y = game.height / 2 - Lvl1.text.height / 2;
    Lvl1.text.tweendown = game.add.tween(Lvl1.text).to({
      alpha: 0
    }, 1000, Phaser.Easing.Quadratic.InOut).start();
    Lvl1.text.tweendown.onComplete.add(function () {
      game.player.create();
    });
  }
  this.render = function () {
    Render.start()
  }
  this.update = function () {

  }
};
