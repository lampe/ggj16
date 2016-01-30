function Grabber() {
  this.group = game.add.group();
  this.options = {};
  this.options.velocity = {
    x: 100,
    y: 0
  }
  this.options.offset = {
    x: 0,
    y: 0
  }
  this.options.isActiv = true;
  this.name = 'grabber';
  this.preload = function () {
    game.load.atlasJSONHash('grabber', 'assets/grabber/shot_hand.png', 'assets/grabber/shot_hand.json');
  };
  this.load = function () {
    this.group.enableBody = true;
    this.group.physicsBodyType = Phaser.Physics.ARCADE;
    this.group.createMultiple(1, 'grabber', 0);
    this.group.setAll('anchor.x', 0.5);
    this.group.setAll('anchor.y', 0.5);
    this.group.setAll('outOfBoundsKill', true);
    this.group.setAll('checkWorldBounds', true);
    this.group.nextShotAt = 0;
  };
  this.fire = function () {
    if (this.group.nextShotAt > game.time.now) {
      return;
    }

    if (this.group.countDead() === 0) {
      return;
    }
    // shot.play();
    this.group.nextShotAt = game.time.now + this.options.nextShot;
    this.group.bullet = this.group.getFirstExists(false);
    this.group.bullet.body.setSize(10, 8, 3, 0);
    this.group.bullet.reset(game.player.sprite.position.x + this.options.offset.x, game.player.sprite.position.y + this.options.offset.y);
    this.group.bullet.body.velocity.x = this.options.velocity.x;
    this.group.bullet.body.velocity.y = this.options.velocity.y;

    for (var i = 1; i < this.options.fireRate; i++) {
      setTimeout(function () {
        this.group.bullet = this.group.getFirstExists(false);
        this.group.bullet.body.setSize(10, 8, 3, 0);
        this.group.bullet.reset(game.player.sprite.position.x + this.options.offset.x, game.player.sprite.position.y + this.options.offset.y);
        this.group.bullet.body.velocity.x = this.options.velocity.x;
        this.group.bullet.body.velocity.y = this.options.velocity.y;
      }, 0 * i);
    }
  }
  return this;
}
