function Player(options) {
  var that = this;
  that.options = options;
  that.cursors = game.input.keyboard.createCursorKeys();
  that.grabber = undefined;
  that.maxHealth = 4;
  that.coolDown = false;
  that.life = 4;
  that.bp = [];
  that.preload = function () {
    that.loadingSprite = game.load.atlasJSONHash(that.options.name, that.options.path + '.png', that.options.path + '.json');
    game.load.image("health", that.options.healthPaths.full);
    game.load.audio("playerHit", that.options.hitSound);
    for (var i = 0; i < that.bp.length; i++) {
      that.bp[i].preload();
    }
    that.grabber.preload();
  }
  that.add = function () {
    that.sprite = game.add.sprite(that.options.position.x, that.options.position.y, that.options.name);
    that.hitSound = game.add.audio('playerHit')
      // that.sprite.parent = that;
    that.sprite.update = that.update;
    that.alive = true;
    that.fullHealth();
    that.sprite.anchor.setTo(0.5, 0.5);
    game.physics.enable(that.sprite, Phaser.Physics.ARCADE);
    that.sprite.body.collideWorldBounds = true;
    var multiplierW = 0.4;
    var multiplierH = 0.3;
    that.sprite.body.width = that.sprite.body.width * multiplierW
    that.sprite.body.height = that.sprite.body.height * multiplierH
    for (var i = 0; i < that.bp.length; i++) {
      that.bp[i].load();
      that.bp[i].options.parent = that.sprite;
    }
    that.grabber.load();
  }
  that.basicAnimations = function () {
    game.player.sprite.fireAnimation = that.sprite.animations.add('fire', ['h_fire_0.png', 'h_fire_1.png', 'h_fire_2.png']);
    that.sprite.animations.add("idle", ['h_idle_0.png', 'h_idle_0.png', 'h_idle_1.png']);
    that.sprite.animations.add('down', ["h_down_0.png"]);
    that.sprite.animations.add('up', ["h_up_0.png"]);
    that.sprite.animations.add('left', ["h_left_0.png"]);
    that.sprite.animations.add('right', ["h_right_0.png"]);
    that.sprite.events.onAnimationComplete.add(function () {
      that.sprite.animations.play('idle', 3, true);
    });
  }
  that.fullHealth = function () {
    healthX = 0;
    that.health = [];
    for (var i = 0; i < that.maxHealth; i++) {
      that.health[i] = game.add.sprite(healthX, 0, "health");
      healthX += 10;
    }
  }
  that.hit = function () {
    if (that.coolDown !== true) {
      that.coolDown = true;
      game.player.sprite.alpha = 0;
      game.player.hitSound.play();
      var tween = game.add.tween(game.player.sprite).to({
        alpha: 1
      }, 125, Phaser.Easing.Linear.None, true)
      tween.repeat(4, 0);
      game.player.life -= 1;
      that.health[that.health.length - 1].kill();
      that.health.pop();
    }
    setTimeout(function () {
      that.coolDown = false;
    }, 1000);
  }
  that.kill = function () {
    that.health[that.health.length - 1].kill();
    that.health.pop();
    that.sprite.kill();
    for (var i = 0; i < that.health.length; i++) {
      that.health[i].kill();
    }
    setTimeout(function () {
      Lvl1.destroy();
      game.state.start("gameOver");
    }, 1000);
  }
  that.bulletPool = function () {
    that.grabber = new Grabber();
    that.bp.push(new BulletPool({
      type: "JSON",
      name: "a",
      fireRate: 1,
      power: 1,
      isActiv: true,
      size: 30,
      sprite: 'a',
      spritesheet: 'assets/bullets/shot',
      spritesheetSize: {
        x: 32,
        y: 32
      },
      offset: {
        x: 0,
        y: 5
      },
      nextShot: 100,
      velocity: {
        x: 180,
        y: -16
      },
      startSprite: 0
    }));
    that.bp.push(new BulletPool({
      type: "JSON",
      name: "b",
      fireRate: 1,
      power: 1,
      isActiv: true,
      size: 30,
      sprite: 'a',
      spritesheet: 'assets/bullets/shot',
      spritesheetSize: {
        x: 32,
        y: 32
      },
      offset: {
        x: 3,
        y: 5
      },
      nextShot: 100,
      velocity: {
        x: 180,
        y: 16
      },
      startSprite: 0
    }));
  }
  that.create = function () {
    that.add();
    that.basicAnimations();
  }
  that.update = function () {
    if (game.player.sprite.alive) {
      game.player.sprite.body.velocity.x = 0;
      game.player.sprite.body.velocity.y = 0;

      if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        that.sprite.animations.play('fire', 10, false);
        for (var i = 0; i < that.bp.length; i++) {
          if (that.bp[i].options.isActiv) {
            that.bp[i].fire(game.player.sprite);
          }
        }
      }
      if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
        that.sprite.animations.play('fire', 10, false);
        if (that.grabber.options.isActiv) {
          that.grabber.fire();
        }
      }
      if (!game.player.sprite.fireAnimation.isPlaying) {
        that.sprite.animations.play('idle', 3, true);
      }
      if (game.player.cursors.left.isDown) {
        if (!game.player.sprite.fireAnimation.isPlaying) {
          that.sprite.animations.play('left', 3, true);
        }
        game.player.sprite.body.velocity.x = -game.player.options.speed;
      } else if (game.player.cursors.right.isDown) {
        if (!game.player.sprite.fireAnimation.isPlaying) {
          that.sprite.animations.play('right', 3, true);
        }
        game.player.sprite.body.velocity.x = game.player.options.speed;
      }
      if (game.player.cursors.up.isDown) {
        if (!game.player.sprite.fireAnimation.isPlaying) {
          that.sprite.animations.play('up', 3, true);
        }
        game.player.sprite.body.velocity.y = -game.player.options.speed;
      } else if (game.player.cursors.down.isDown) {
        if (!game.player.sprite.fireAnimation.isPlaying) {
          that.sprite.animations.play('down', 3, true);
        }
        game.player.sprite.body.velocity.y = game.player.options.speed;
      }
    }
  }
  that.render = function () {

  }
  that.bulletPool();
  return that;
}
