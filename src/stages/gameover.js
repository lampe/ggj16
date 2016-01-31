GameOver = function () {
  this.init = function () {

  }
  this.preload = function () {

  }
  this.create = function () {
    var style = {
      font: "8px gameboy",
      fill: 'rgb(19, 58, 25)'
    };
    this.text = game.add.text(0, 0, "Game Over", style);
    this.text.position.x = game.width / 2 - this.text.width / 2;
    this.text.position.y = game.height / 2 - this.text.width / 2;

    this.text = game.add.text(0, 0, "press S to Restart", style);
    this.text.position.x = game.width / 2 - this.text.width / 2;
    this.text.position.y = (game.height / 2 - this.text.width / 2) + 40;
  }
  this.update = function () {
    if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
      game.state.start("lvl1");
    }
  }
  this.render = function () {
    Render.start()
  }
};
