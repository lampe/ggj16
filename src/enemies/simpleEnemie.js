function SimpleEnemie(options) {
  this.options = options || {};
  this.bp = [];
  this.animations = {};
  this.nextSprite = 0;
  this.nextShotAt = 0;
}
SimpleEnemie.prototype.preload = function () {
  Enemies.loadingSprite = game.load.atlasJSONHash(this.options.name, this.options.path + '.png', this.options.path + '.json');
  this.animations.kill = game.load.atlasJSONHash(this.options.name + 'kill', 'assets/enemies/boom.png', 'assets/enemies/boom.json');
  for (var i = 0; i < this.bp.length; i++) {
    this.bp[i].preload();
  }
}
SimpleEnemie.prototype.create = function (group) {
  this.group = group;
  this.group.parentClass = this;
  var that = this;
  for (var i = 0; i < this.options.amount; i++) {
    var e = game.add.sprite(that.options.position.x, that.options.position.y, that.options.name);
    game.physics.enable(e, Phaser.Physics.ARCADE);
    // e.outOfBoundsKill = true;
    // e.checkWorldBounds = true;
    e.animations.add("animation");
    e.animations.play('animation', 10, true);

    e.superParent = that;
    e.pattern = that.pattern;
    e.update = this.update;
    e.health = that.options.maxHealth || 1;
    group.add(e);
  }
  for (var i = 0; i < this.bp.length; i++) {
    this.bp[i].load();
    this.bp[i].options.parent = this.sprite;
  }
}
SimpleEnemie.prototype.bulletPool = function () {
  this.fireRate = 1000;
  this.bp.push(new BulletPool({
    type: "JSON",
    name: "wolf",
    fireRate: 1,
    power: 1,
    isActiv: true,
    size: 40,
    sprite: 'wolf',
    spritesheet: 'assets/bullets/shot_wolf',
    spritesheetSize: {
      x: 32,
      y: 32
    },
    offset: {
      x: -5,
      y: 0
    },
    nextShot: 100,
    velocity: {
      x: -30,
      y: 0
    },
    startSprite: 0
  }));
  // this.bp.push(new BulletPool({
  //   type: "JSON",
  //   name: "a",
  //   fireRate: 1,
  //   power: 1,
  //   isActiv: true,
  //   size: 40,
  //   sprite: 'a',
  //   spritesheet: 'assets/bullets/shot_wolf',
  //   spritesheetSize: {
  //     x: 32,
  //     y: 32
  //   },
  //   offset: {
  //     x: -5,
  //     y: 0
  //   },
  //   nextShot: 100,
  //   velocity: {
  //     x: -60,
  //     y: 10
  //   },
  //   startSprite: 0
  // }));
}
SimpleEnemie.prototype.update = function () {
  for (var i = 0; i < this.superParent.bp.length; i++) {
    game.physics.arcade.collide(this.superParent.bp[i].group, game.player.sprite, function (player, bullet) {
      if (game.player.life > 1) {
        game.player.hit();
      } else {
        game.player.kill();
      }
      bullet.kill();
    });
  }
  if (this.superParent.nextShotAt > game.time.now) {
    return;
  }
  this.superParent.nextShotAt = game.time.now + this.superParent.fireRate;

  if (this.superParent.nextSprite >= this.superParent.group.children.length - 1) {
    this.superParent.nextSprite = 0
  } else {
    this.superParent.nextSprite += 1;
  }
  aliveList = this.superParent.group.filter(function (e) {
    // if (e.checkWorldBounds !== true) {
    //   return false;
    // }
    if (e.inCamera !== true) {
      return false;
    }
    if (e.alive !== true) {
      return false;
    }
    return true;
  });
  sprite = Phaser.ArrayUtils.getRandomItem(aliveList.list);
  if (sprite === null) {
    return;
  }
  for (var i = 0; i < this.superParent.bp.length; i++) {
    if (this.superParent.bp[i].options.isActiv) {
      this.superParent.bp[i].fire(sprite);
    }
  }
}
SimpleEnemie.prototype.killAnimation = function (enemie) {
  kill = game.add.sprite(enemie.position.x, enemie.position.y, this.options.name + 'kill');
  kill.anchor.setTo(0.5, 0.5);
  // angelArray = [0, 90, 180, 270]
  // kill.angle = angelArray[Math.floor(Math.random() * angelArray.length)];;
  kill.angle = Math.floor(Math.random() * 359) - 1

  kill.animations.add('boom');
  kill.animations.play('boom', 10, false, true);
}
SimpleEnemie.prototype.pattern = function (delayX, delayY) {
  if (this.superParent.options.pattern) {
    this.superParent.options.pattern(delayX, delayY, this);
    return;
  }
  this.t1 = game.add.tween(this.position).to({
    x: game.width / 2
  }, 2500, Phaser.Easing.Linear.None, true, delayX)
  this.t1.onComplete.addOnce(function () {
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    game.add.tween(this.position).to({
      x: game.width + 10
    }, 2500, Phaser.Easing.Linear.None, true)
  }, this)
  this.t2 = game.add.tween(this.position).to({
    y: game.height / 2
  }, 2500, Phaser.Easing.Cubic.In, true, delayY)
  this.t2.onComplete.addOnce(function () {
    game.add.tween(this.position).to({
      y: game.height - 10
    }, 2500, Phaser.Easing.Cubic.Out, true)
  }, this)
}
