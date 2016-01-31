moveBackground = function (background, speed, width) {
  if (background.x < -width) {
    background.x = width;
    background.x -= speed;
  } else {}
  background.x -= speed;
}


function lvl1() {
  this.name = "lvl1";
  this.ingredients = [];
  this.ingredientsStack = new IngredientsStack({
    winningStacks: [
      ['burgerBottomStack', 'saladStack', 'pattyStack', 'burgerTopStack'],
      ['burgerBottomStack', 'cheeseStack', 'burgerTopStack']
    ],
    winningPoints: [100, 200]
  });
  this.init = function () {
    var maxHealth = 10;
    this.enemies1 = new Enemies();
    this.enemies1.types.push(new SimpleEnemie({
      amount: 5,
      speed: 70,
      name: 'gegna',
      path: 'assets/enemies/enemy_fly',
      maxHealth: maxHealth,
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: 170,
        y: 10
      },
      frameRate: 10,
    }));
    this.enemies2 = new Enemies();
    this.enemies2.types.push(new SimpleEnemie({
      amount: 10,
      speed: 70,
      name: 'gegna',
      path: 'assets/enemies/enemy_fly',
      maxHealth: maxHealth,
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: 170,
        y: game.height - 10
      },
      frameRate: 10,
      pattern: function (delayX, delayY, that) {
        that.t1 = game.add.tween(that.position).to({
          x: game.width / 2
        }, 2500, Phaser.Easing.Linear.None, true, delayX)
        that.t1.onComplete.addOnce(function () {

          that.checkWorldBounds = true;
          that.outOfBoundsKill = true;
          game.add.tween(that.position).to({
            x: game.width + 10
          }, 2500, Phaser.Easing.Linear.None, true)
        }, that)
        that.t2 = game.add.tween(that.position).to({
          y: game.height / 2
        }, 2500, Phaser.Easing.Cubic.In, true, delayY)
        that.t2.onComplete.addOnce(function () {
          game.add.tween(that.position).to({
            y: game.height - 10
          }, 2500, Phaser.Easing.Cubic.Out, true)
        }, that)
      }
    }));
    this.enemies3 = new Enemies();
    this.enemies3.types.push(new SimpleEnemie({
      amount: 10,
      speed: 70,
      name: 'gegna',
      path: 'assets/enemies/enemy_fly',
      maxHealth: maxHealth,
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: 170,
        y: 10
      },
      frameRate: 10,
      pattern: function (delayX, delayY, that) {
        that.t1 = game.add.tween(that.position).to({
          x: game.width / 2
        }, 2500, Phaser.Easing.Linear.None, true, delayX)
        that.t1.onComplete.addOnce(function () {
          that.checkWorldBounds = true;
          that.outOfBoundsKill = true;
          game.add.tween(that.position).to({
            x: game.width + 10
          }, 2500, Phaser.Easing.Linear.None, true)
        }, that)
        that.t2 = game.add.tween(that.position).to({
          y: game.height / 2
        }, 2500, Phaser.Easing.Cubic.In, true, delayY)
        that.t2.onComplete.addOnce(function () {
          game.add.tween(that.position).to({
            y: 10
          }, 2500, Phaser.Easing.Cubic.Out, true)
        }, that)
      }
    }));
    this.enemies4 = new Enemies();
    this.enemies4.types.push(new SimpleEnemie({
      amount: 10,
      speed: 70,
      name: 'gegna',
      path: 'assets/enemies/enemy_fly',
      maxHealth: maxHealth,
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: 170,
        y: 10
      },
      frameRate: 10,
      pattern: function (delayX, delayY, that) {
        that.t1 = game.add.tween(that.position).to({
          x: game.width / 2
        }, 2500, Phaser.Easing.Linear.None, true, delayX)
        that.t1.onComplete.addOnce(function () {
          that.checkWorldBounds = true;
          that.outOfBoundsKill = true;
          game.add.tween(that.position).to({
            x: game.width + 10
          }, 2500, Phaser.Easing.Linear.None, true)
        }, that)
        that.t2 = game.add.tween(that.position).to({
          y: game.height
        }, 2500, Phaser.Easing.Cubic.In, true, delayY)
        that.t2.onComplete.addOnce(function () {
          game.add.tween(that.position).to({
            y: game.height - 50
          }, 2500, Phaser.Easing.Cubic.Out, true)
        }, that)
      }
    }));
    this.enemies5 = new Enemies();
    this.enemies5.types.push(new SimpleEnemie({
      amount: 10,
      speed: 70,
      name: 'gegna',
      path: 'assets/enemies/enemy_fly',
      maxHealth: maxHealth,
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: 170,
        y: game.height - 20
      },
      frameRate: 10,
      pattern: function (delayX, delayY, that) {
        that.t1 = game.add.tween(that.position).to({
          x: game.width / 2
        }, 2500, Phaser.Easing.Linear.None, true, delayX)
        that.t1.onComplete.addOnce(function () {
          that.checkWorldBounds = true;
          that.outOfBoundsKill = true;
          game.add.tween(that.position).to({
            x: game.width + 10
          }, 2500, Phaser.Easing.Linear.None, true)
        }, that)
        that.t2 = game.add.tween(that.position).to({
          y: game.height / 2
        }, 2500, Phaser.Easing.Cubic.In, true, delayY)
        that.t2.onComplete.addOnce(function () {
          game.add.tween(that.position).to({
            y: 10
          }, 2500, Phaser.Easing.Cubic.Out, true)
        }, that)
      }
    }));
    this.enemies6 = new Enemies();
    this.enemies6.types.push(new SimpleEnemie({
      amount: 10,
      speed: 70,
      name: 'gegna',
      path: 'assets/enemies/enemy_fly',
      maxHealth: maxHealth,
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: 170,
        y: game.height / 2
      },
      frameRate: 10,
      pattern: function (delayX, delayY, that) {
        that.t1 = game.add.tween(that.position).to({
          x: game.width / 2
        }, 2500, Phaser.Easing.Linear.None, true, delayX)
        that.t1.onComplete.addOnce(function () {
          that.checkWorldBounds = true;
          that.outOfBoundsKill = true;
          game.add.tween(that.position).to({
            x: game.width + 10
          }, 2500, Phaser.Easing.Linear.None, true)
        }, that)
        that.t2 = game.add.tween(that.position).to({
          y: game.height / 2
        }, 2500, Phaser.Easing.Cubic.In, true, delayY)
        that.t2.onComplete.addOnce(function () {
          game.add.tween(that.position).to({
            y: 10
          }, 2500, Phaser.Easing.Cubic.Out, true)
        }, that)
      }
    }));
    this.ingredients.push(new Ingredients({
      name: 'burgerBottom',
      path: 'assets/stack/stack_unterbrot',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'salad',
      path: 'assets/ingredients/ing_salad',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'patty',
      path: 'assets/ingredients/ing_pattie',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'burgerTop',
      path: 'assets/stack/stack_deckel',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'burgerBottom',
      path: 'assets/stack/stack_unterbrot',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'salad',
      path: 'assets/ingredients/ing_salad',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'patty',
      path: 'assets/ingredients/ing_pattie',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'burgerTop',
      path: 'assets/stack/stack_deckel',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'burgerBottom',
      path: 'assets/stack/stack_unterbrot',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'salad',
      path: 'assets/ingredients/ing_salad',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'patty',
      path: 'assets/ingredients/ing_pattie',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'burgerTop',
      path: 'assets/stack/stack_deckel',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'burgerBottom',
      path: 'assets/stack/stack_unterbrot',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'salad',
      path: 'assets/ingredients/ing_salad',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'patty',
      path: 'assets/ingredients/ing_pattie',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
    this.ingredients.push(new Ingredients({
      name: 'burgerTop',
      path: 'assets/stack/stack_deckel',
      hitSound: 'assets/audio/playerhit.wav',
      position: {
        x: game.width + 10,
        y: game.height / 2
      },
      frameRate: 10,
    }));
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
    this.scrollBackground = false;
    game.load.image('background1', 'assets/bg/bg1.png');
    game.load.image('background2', 'assets/bg/bg2.png');
    game.load.image('background3', 'assets/bg/fg.png');
    game.load.audio('music', 'assets/music/lvl1.mp3');
    game.load.audio('grabSound', 'assets/audio/0.wav');

    game.player.preload();
    this.ingredientsStack.preload();
    for (var i = 0; i < this.enemies1.types.length; i++) {
      this.enemies1.types[i].bulletPool();
      this.enemies1.types[i].preload();
    }

    for (var i = 0; i < this.enemies2.types.length; i++) {
      this.enemies2.types[i].bulletPool();
      this.enemies2.types[i].preload();
    }
    for (var i = 0; i < this.enemies3.types.length; i++) {
      this.enemies3.types[i].bulletPool();
      this.enemies3.types[i].preload();
    }
    for (var i = 0; i < this.enemies4.types.length; i++) {
      this.enemies4.types[i].bulletPool();
      this.enemies4.types[i].preload();
    }
    for (var i = 0; i < this.enemies5.types.length; i++) {
      this.enemies5.types[i].bulletPool();
      this.enemies5.types[i].preload();
    }
    for (var i = 0; i < this.enemies6.types.length; i++) {
      this.enemies6.types[i].bulletPool();
      this.enemies6.types[i].preload();
    }
    for (var i = 0; i < this.ingredients.length; i++) {
      this.ingredients[i].preload();
    }
  }
  this.destroy = function () {
    Lvl1.music.stop();
    Lvl1.ingredientsStack.stack = [];
    clearTimeout(this.timeout2);
    clearTimeout(this.timeout3);
    clearTimeout(this.timeout4);
    clearTimeout(this.timeout5);
    clearTimeout(this.timeout6);
    clearTimeout(this.endTimeout);
    for (var i = 0; i < Lvl1.ingredients.length; i++) {
      Lvl1.ingredients[i].killAnimation();
      clearTimeout(Lvl1.ingredients[i].timeout);
      if (Lvl1.ingredients[i].sprite) {

        Lvl1.ingredients[i].sprite.kill();
      }
    }
    Lvl1.goodOutro = false;
    Lvl1.ingredients = [];
    Lvl1.enemies1.destroy();
    Lvl1.enemies2.destroy();
    Lvl1.enemies3.destroy();
    Lvl1.enemies4.destroy();
    Lvl1.enemies5.destroy();
    Lvl1.enemies6.destroy();
    Lvl1.enemies1 = undefined;
    Lvl1.enemies2 = undefined;
    Lvl1.enemies3 = undefined;
    Lvl1.enemies4 = undefined;
    Lvl1.enemies5 = undefined;
    Lvl1.enemies6 = undefined;
    Lvl1.background1a.destroy();
    Lvl1.background1b.destroy();
    Lvl1.background2a.destroy();
    Lvl1.background2b.destroy();
    Lvl1.background3a.destroy();
    Lvl1.background3b.destroy();
    Lvl1.background1a = undefined;
    Lvl1.background1b = undefined;
    Lvl1.background2a = undefined;
    Lvl1.background2b = undefined;
    Lvl1.background3a = undefined;
    Lvl1.background3b = undefined;
    game.player.sprite.destroy();
    // game.world.destroy();
  }
  this.create = function () {

    var style = {
      font: "8px gameboy",
      fill: 'rgb(19, 58, 25)'
    };
    fadoutTime = 4000;
    Lvl1.text = game.add.text(0, 0, "Create this:", style);

    Lvl1.text.position.x = game.width / 2 - Lvl1.text.width / 2;
    Lvl1.text.position.y = 10;
    Lvl1.text.tweendown = game.add.tween(Lvl1.text).to({
      alpha: 0
    }, fadoutTime, Phaser.Easing.Quadratic.InOut).start();

    Lvl1.sprite = game.add.sprite(0, 0, 'burgerTopStack');
    Lvl1.sprite.position.x = game.width / 2 - Lvl1.sprite.width / 2;
    Lvl1.sprite.position.y = 24;
    Lvl1.sprite.tweendown = game.add.tween(Lvl1.sprite).to({
      alpha: 0
    }, fadoutTime, Phaser.Easing.Quadratic.InOut).start();
    Lvl1.sprite = game.add.sprite(0, 0, 'saladStack');
    Lvl1.sprite.position.x = game.width / 2 - Lvl1.sprite.width / 2;
    Lvl1.sprite.position.y = 48;
    Lvl1.sprite.tweendown = game.add.tween(Lvl1.sprite).to({
      alpha: 0
    }, fadoutTime, Phaser.Easing.Quadratic.InOut).start();
    Lvl1.sprite = game.add.sprite(0, 0, 'pattyStack');
    Lvl1.sprite.position.x = game.width / 2 - Lvl1.sprite.width / 2;
    Lvl1.sprite.position.y = 62;
    Lvl1.sprite.tweendown = game.add.tween(Lvl1.sprite).to({
      alpha: 0
    }, fadoutTime, Phaser.Easing.Quadratic.InOut).start();
    Lvl1.sprite = game.add.sprite(0, 0, 'burgerBottomStack');
    Lvl1.sprite.position.x = game.width / 2 - Lvl1.sprite.width / 2;
    Lvl1.sprite.position.y = 80;
    Lvl1.sprite.tweendown = game.add.tween(Lvl1.sprite).to({
      alpha: 0
    }, fadoutTime, Phaser.Easing.Quadratic.InOut).start();
    // ['burgerBottomStack', 'saladStack', 'pattyStack', 'burgerTopStack'],

    Lvl1.text = game.add.text(0, 0, "CONTROL:", style);
    Lvl1.text.position.x = game.width / 2 - Lvl1.text.width / 2;
    Lvl1.text.position.y = game.height - 30;
    Lvl1.text.tweendown = game.add.tween(Lvl1.text).to({
      alpha: 0
    }, fadoutTime, Phaser.Easing.Quadratic.InOut).start();
    Lvl1.text = game.add.text(0, 0, "s = shoot enemy / d = grab ingredient", style);
    Lvl1.text.position.x = game.width / 2 - Lvl1.text.width / 2;
    Lvl1.text.position.y = game.height - 20;
    Lvl1.text.tweendown = game.add.tween(Lvl1.text).to({
      alpha: 0
    }, fadoutTime, Phaser.Easing.Quadratic.InOut).start();


    Lvl1.text.tweendown.onComplete.add(function () {
      Lvl1.background1a = game.add.sprite(0, 0, 'background1');
      Lvl1.background1b = game.add.sprite(320, 0, 'background1');
      Lvl1.background2a = game.add.sprite(0, 0, 'background2');
      Lvl1.background2b = game.add.sprite(640, 0, 'background2');
      Lvl1.background2a.sendToBack();
      Lvl1.background2b.sendToBack();
      Lvl1.background1a.sendToBack();
      Lvl1.background1b.sendToBack();
      Lvl1.background3a = game.add.sprite(0, 0, 'background3');
      Lvl1.background3b = game.add.sprite(1280, 0, 'background3');
      Lvl1.background3a.bringToTop();
      Lvl1.background3b.bringToTop();
      b1Speed = 0.2;
      b2Speed = 0.5;
      b3Speed = 1;
      this.scrollBackground = true;
      game.player.create();
      Lvl1.music = game.add.audio('music');
      Lvl1.music.volume = 0.2;
      Lvl1.music.play();
      for (var i = 0; i < this.enemies1.types.length; i++) {
        this.enemies1.types[i].create(this.enemies1);
      }
      this.enemies1.setAll('anchor.x', 0.5);
      this.enemies1.setAll('anchor.y', 0.5);
      delayX = 0;
      delayY = 300;
      this.enemies1.forEach(function (item) {
        item.pattern(delayX, delayY);
        delayX += 800;
        delayY += 600;
      });

      g = this.enemies2;
      this.timeout2 = setTimeout(function () {
        for (var i = 0; i < g.types.length; i++) {
          g.types[i].create(g);
        }
        g.setAll('anchor.x', 0.5);
        g.setAll('anchor.y', 0.5);
        delayX = 0;
        delayY = 300;
        g.forEach(function (item) {
          item.pattern(delayX, delayY);
          delayX += 800;
          delayY += 600;
        });
      }, 6000)

      g3 = this.enemies3;
      this.timeout3 = setTimeout(function () {
        for (var i = 0; i < g3.types.length; i++) {
          g3.types[i].create(g3);
        }
        g3.setAll('anchor.x', 0.5);
        g3.setAll('anchor.y', 0.5);
        delayX = 0;
        delayY = 300;
        g3.forEach(function (item) {
          item.pattern(delayX, delayY);
          delayX += 800;
          delayY += 600;
        });
      }, 16000)
      g4 = this.enemies4;
      this.timeout4 = setTimeout(function () {
        for (var i = 0; i < g4.types.length; i++) {
          g4.types[i].create(g4);
        }
        g4.setAll('anchor.x', 0.5);
        g4.setAll('anchor.y', 0.5);
        delayX = 0;
        delayY = 300;
        g4.forEach(function (item) {
          item.pattern(delayX, delayY);
          delayX += 800;
          delayY += 600;
        });
      }, 25000)
      g5 = this.enemies5;
      this.timeout5 = setTimeout(function () {
        for (var i = 0; i < g5.types.length; i++) {
          g5.types[i].create(g5);
        }
        g5.setAll('anchor.x', 0.5);
        g5.setAll('anchor.y', 0.5);
        delayX = 0;
        delayY = 300;
        g5.forEach(function (item) {
          item.pattern(delayX, delayY);
          delayX += 800;
          delayY += 600;
        });
      }, 33000)
      g6 = this.enemies6;
      this.timeout6 = setTimeout(function () {
        for (var i = 0; i < g6.types.length; i++) {
          g6.types[i].create(g6);
        }
        g6.setAll('anchor.x', 0.5);
        g6.setAll('anchor.y', 0.5);
        delayX = 0;
        delayY = 300;
        g6.forEach(function (item) {
          item.pattern(delayX, delayY);
          delayX += 800;
          delayY += 600;
        });
      }, 44000)
      this.endTimeout = setTimeout(function () {
        Lvl1.destroy()
        if (Lvl1.goodOutro) {
          game.state.start('goodOutro');
        } else {
          game.state.start('badOutro');
        }
      }, 60000);
      var spawnTimer = 1;
      for (var i = 0; i < this.ingredients.length; i++) {
        this.ingredients[i].create(this.ingredients, spawnTimer);
        spawnTimer += 1;
      }
    });
  }
  this.render = function () {
    Render.start()
  }
  this.update = function () {
    if (this.scrollBackground) {
      moveBackground(Lvl1.background1a, b1Speed, 320);
      moveBackground(Lvl1.background1b, b1Speed, 320);
      moveBackground(Lvl1.background2a, b2Speed, 640);
      moveBackground(Lvl1.background2b, b2Speed, 640);
      moveBackground(Lvl1.background3a, b3Speed, 1280);
      moveBackground(Lvl1.background3b, b3Speed, 1280);
    }
    for (var i = 0; i < game.player.bp.length; i++) {
      game.physics.arcade.collide(game.player.bp[i].group, Lvl1.enemies1, function (bullet, enemie) {
        if (enemie.health > bullet.parent.power) {
          enemie.health -= bullet.parent.power
        } else {
          enemie.parent.parentClass.killAnimation(enemie);
          enemie.kill();
        }
        bullet.kill();
      });
    }
    for (var i = 0; i < game.player.bp.length; i++) {
      game.physics.arcade.collide(game.player.bp[i].group, Lvl1.enemies2, function (bullet, enemie) {
        if (enemie.health > bullet.parent.power) {
          enemie.health -= bullet.parent.power
        } else {
          enemie.parent.parentClass.killAnimation(enemie);
          enemie.kill();
        }
        bullet.kill();
      });
    }
    for (var i = 0; i < game.player.bp.length; i++) {
      game.physics.arcade.collide(game.player.bp[i].group, Lvl1.enemies3, function (bullet, enemie) {
        if (enemie.health > bullet.parent.power) {
          enemie.health -= bullet.parent.power
        } else {
          enemie.parent.parentClass.killAnimation(enemie);
          enemie.kill();
        }
        bullet.kill();
      });
    }
    for (var i = 0; i < game.player.bp.length; i++) {
      game.physics.arcade.collide(game.player.bp[i].group, Lvl1.enemies4, function (bullet, enemie) {
        if (enemie.health > bullet.parent.power) {
          enemie.health -= bullet.parent.power
        } else {
          enemie.parent.parentClass.killAnimation(enemie);
          enemie.kill();
        }
        bullet.kill();
      });
    }
    for (var i = 0; i < game.player.bp.length; i++) {
      game.physics.arcade.collide(game.player.bp[i].group, Lvl1.enemies5, function (bullet, enemie) {
        if (enemie.health > bullet.parent.power) {
          enemie.health -= bullet.parent.power
        } else {
          enemie.parent.parentClass.killAnimation(enemie);
          enemie.kill();
        }
        bullet.kill();
      });
    }
    for (var i = 0; i < game.player.bp.length; i++) {
      game.physics.arcade.collide(game.player.bp[i].group, Lvl1.enemies6, function (bullet, enemie) {
        if (enemie.health > bullet.parent.power) {
          enemie.health -= bullet.parent.power
        } else {
          enemie.parent.parentClass.killAnimation(enemie);
          enemie.kill();
        }
        bullet.kill();
      });
    }
    for (var i = 0; i < Lvl1.ingredients.length; i++) {
      game.physics.arcade.collide(Lvl1.ingredients[i].sprite, game.player.grabber.group, function (ingredient, grabber) {
        Lvl1.ingredientsStack.add(ingredient);
        grabSound = game.add.audio('grabSound');
        grabSound.volume = 1;
        grabSound.play();
        grabber.kill();
        ingredient.kill();
      });
    }
  }
  return this;
};
Lvl1 = lvl1();
