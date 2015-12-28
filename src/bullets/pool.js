function BulletPool(options) {
  this.group = game.add.group();
  this.options = options;

  this.preload = function () {
    if (this.options.type === "JSON") {
      game.load.atlasJSONHash(this.options.name, this.options.spritesheet + '.png', this.options.spritesheet + '.json');
      return;
    }
    game.load.spritesheet(this.options.name, this.options.spritesheet, this.options.spritesheetSize.x, this.options.spritesheetSize.y);
  };
  this.load = function () {
    this.group.enableBody = true;
    this.group.physicsBodyType = Phaser.Physics.ARCADE;
    this.group.createMultiple(this.options.size, this.options.name, this.options.startSprite);
    this.group.setAll('anchor.x', 0.5);
    this.group.setAll('anchor.y', 0.5);
    this.group.setAll('outOfBoundsKill', true);
    this.group.setAll('checkWorldBounds', true);
    this.group.nextShotAt = 0;
  }
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
    this.group.bullet.reset(this.options.parent.position.x + this.options.offset.x, this.options.parent.position.y + this.options.offset.y);
    this.group.bullet.body.velocity.x = this.options.velocity.x;
    this.group.bullet.body.velocity.y = this.options.velocity.y;

    for (var i = 1; i < this.options.fireRate; i++) {
      setTimeout(function () {
        this.group.bullet = this.group.getFirstExists(false);
        this.group.bullet.body.setSize(10, 8, 3, 0);
        this.group.bullet.reset(this.options.parent.position.x + this.options.offset.x, this.options.parent.position.y + this.options.offset.y);
        this.group.bullet.body.velocity.x = this.options.velocity.x;
        this.group.bullet.body.velocity.y = this.options.velocity.y;
      }, 0 * i);
    }
  }
  return this;
}
