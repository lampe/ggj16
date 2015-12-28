var game = new Phaser.Game(160, 144, Phaser.CANVAS, 'canvas', {
  init: Init.start,
  preload: Preload.start,
  create: Create.start,
  update: Update.start,
  render: Render.start
});
game.state.add('intro', Intro);
game.state.add('mainMenu', MainMenu);
game.state.add('lvl1', Lvl1);
game.state.add('gameOver', GameOver);
