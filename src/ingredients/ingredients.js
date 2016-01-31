function Ingredients(options) {
  this.options = options || {};
  this.animations = {};
}
Ingredients.prototype.preload = function () {
  // this.loadingSprite = game.load.atlasJSONHash(this.options.name, this.options.path + '.png', this.options.path + '.json');
  this.loadingSprite = game.load.image(this.options.name, this.options.path + '.png');

  // this.animations.kill = game.load.sprite(this.options.name + 'kill', 'assets/enemies/boom.png', 'assets/enemies/boom.json');
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
Ingredients.prototype.create = function (group, spawnTimer) {
  var that = this;
  that.timeout = setTimeout(function () {
    y = getRandomArbitrary(32, game.height - 32);

    that.sprite = game.add.sprite(that.options.position.x, y, that.options.name);
    game.physics.enable(that.sprite, Phaser.Physics.ARCADE);
    that.sprite.pattern = that.pattern;
    that.sprite.pattern(delayX, delayY);
  }, 3000 * spawnTimer);
}
Ingredients.prototype.update = function () {
  // for (var i = 0; i < this.bp.length; i++) {
  //   game.physics.arcade.collide(this.bp[i].group, game.player.sprite, function (player, bullet) {
  //     if (game.player.life > 1) {
  //       game.player.life -= 1;
  //       game.player.hit();
  //     } else {
  //       game.player.kill();
  //     }
  //     bullet.kill();
  //   });
  // }
}
Ingredients.prototype.killAnimation = function (enemie) {
  // kill = game.add.sprite(enemie.position.x, enemie.position.y, this.options.name + 'kill');
  // kill.anchor.setTo(0.5, 0.5);
  // angelArray = [0, 90, 180, 270]
  // kill.angle = angelArray[Math.floor(Math.random() * angelArray.length)];;
  // kill.angle = Math.floor(Math.random() * 359) - 1

  // kill.animations.add('boom');
  // kill.animations.play('boom', 10);
}
Ingredients.prototype.pattern = function () {
  var that = this;
  var time = 4000;
  this.t1 = game.add.tween(this.position).to({
    x: -50
  }, time, Phaser.Easing.Linear.None, true, 0);
  this.t2 = game.add.tween(this.position).to({
    y: this.position.y-10
  }, time, Phaser.Easing.Linear.None, true, 0);
  setTimeout(function () {
    that.destroy();
  }, time+500);
}
