Intro = function () {
  this.create = function () {
    Intro.sound = game.add.audio('startup');
    var style = {
      font: "8px gameboy",
      fill: 'rgb(19, 58, 25)'
    };
    Intro.text = game.add.text(0, -32, "Super 2Bit Bros", style);
    Intro.text.position.x = game.width / 2 - Intro.text.width / 2;
    Intro.text.tweendown = game.add.tween(Intro.text).to({
      y: game.height / 2 - 10
    }, 2500, Phaser.Easing.Linear.None).start();
    Intro.text.tweendown.onComplete.add(function () {
      Intro.sound.play();
      Intro.sound.onStop.add(function () {
        game.state.start("mainMenu");
      });
    });
  }
  this.render = function () {
    Render.start()
  }
};
