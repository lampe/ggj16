function Player(options) {
  var that = this;
  that.options = options;
  that.cursors = game.input.keyboard.createCursorKeys();
  that.life = 3;
  that.bp = [];
  that.preload = function () {
    that.loadingSprite = game.load.atlasJSONHash(that.options.name, that.options.path + '.png', that.options.path + '.json');
    game.load.image("health", that.options.healthPaths.full);
    // game.load.audio("playerHit", that.options.hitSound);
    // for (var i = 0; i < that.bp.length; i++) {
    //   that.bp[i].preload();
    // }
  }
  that.add = function () {
    that.sprite = game.add.sprite(that.options.position.x, that.options.position.y, that.options.name);
    healthX = 0;
    that.health = [];
    for (var i = 0; i < that.life + 1; i++) {
      that.health[i] = game.add.sprite(healthX, 0, "health");
      healthX += 10;
    }
    that.sprite.update = that.update;
    that.alive = true;
    that.sprite.anchor.setTo(0.5, 0.5);
    game.physics.enable(that.sprite, Phaser.Physics.ARCADE);
    that.sprite.body.collideWorldBounds = true;
  }
  that.basicAnimations = function () {
    game.player.sprite.fireAnimation = that.sprite.animations.add('fire', ['h_fire_0.png', 'h_fire_1.png', 'h_fire_2.png']);
    that.sprite.animations.add("idle", ['h_idle_0.png', 'h_idle_1.png']);
    that.sprite.animations.add('down', ["h_down_0.png"]);
    that.sprite.animations.add('up', ["h_up_0.png"]);
    that.sprite.animations.add('left', ["h_left_0.png"]);
    that.sprite.animations.add('right', ["h_right_0.png"]);

    that.sprite.events.onAnimationComplete.add(function () {
      that.sprite.animations.play('idle', 3, true);
    });
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
        for (var i = 0; i < game.player.bp.length; i++) {
          if (game.player.bp[i].options.isActiv) {
            game.player.bp[i].fire();
          }
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
  return that;
}
