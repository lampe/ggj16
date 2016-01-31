function isSuper(a, b) {
  var l = b.length;
  var i = 0;
  var c;
  if (b.length !== a.length) {
    return false
  } else {
    for (i; i < l; i++) {
      c = a.indexOf(b[i]);
      if (c > -1) {
        a.splice(c, 1);
      } else {
        return false
      }
    }
    return true;
  }
}

function IngredientsStack(options) {
  this.options = options || []
  this.winningStacks = this.options.winningStacks || [];
  this.winningPoints = this.options.winningPoints || [];
  this.stack = [];
}

IngredientsStack.prototype.preload = function () {
  game.load.spritesheet('burgerBottomStack', 'assets/stack/stack_unterbrot.png');
  game.load.spritesheet('cheeseStack', 'assets/stack/stack_cheese.png');
  game.load.spritesheet('burgerTopStack', 'assets/stack/stack_deckel.png');
  game.load.spritesheet('onionStack', 'assets/stack/stack_onion.png');
  game.load.spritesheet('pattyStack', 'assets/stack/stack_patty.png');
  game.load.spritesheet('saladStack', 'assets/stack/stack_salad.png');
  game.load.spritesheet('tomatoStack', 'assets/stack/stack_tomato.png');
  game.load.audio('no','assets/audio/no.wav');
  game.load.audio('yeah','assets/audio/yeah.wav');
}

IngredientsStack.prototype.add = function (ingredient) {
  this.stack.push(ingredient);
  y = (game.height - (this.stack.length * 16));
  this.stack[this.stack.length - 1].stackSprite = game.add.sprite(2, y, ingredient.key + 'Stack');
  if (ingredient.key === 'burgerTop') {
    this.checkStack();
    return;
  }
  if (this.stack.length >= 5) {
    this.resetStack();
    return;
  }
}

IngredientsStack.prototype.remove = function (ingredient) {}
IngredientsStack.prototype.checkStack = function () {
  items = []
  for (var i = 0; i < this.stack.length; i++) {
    items.push(this.stack[i].stackSprite.key);
  }
  var isTrue = false;
  for (var i = 0; i < this.winningStacks.length; i++) {
    var b = isSuper(items, this.winningStacks[i]);
    if (b === true) {
      isTrue = true;
    }
  }
  if (isTrue) {
    var style = {
      font: "16px gameboy",
      fill: 'rgb(19, 58, 25)'
    };
    Lvl1.goodOutro = true;
    Lvl1.yeahSound = game.add.audio('yeah');
    Lvl1.yeahSound.play();
    Lvl1.text = game.add.text(0, 0, "OH YEAH!", style);
    Lvl1.text.position.x = game.width / 2 - Lvl1.text.width / 2;
    Lvl1.text.position.y = game.height / 2 - Lvl1.text.height / 2;
    Lvl1.text.tweendown = game.add.tween(Lvl1.text).to({
      alpha: 0
    }, 1000, Phaser.Easing.Quadratic.InOut).start();
  }else{
    var style = {
      font: "16px gameboy",
      fill: 'rgb(19, 58, 25)'
    };
    Lvl1.noSound = game.add.audio('no');
    Lvl1.noSound.play();
    Lvl1.text = game.add.text(0, 0, "NOOOOO!!!!", style);
    Lvl1.text.position.x = game.width / 2 - Lvl1.text.width / 2;
    Lvl1.text.position.y = game.height / 2 - Lvl1.text.height / 2;
    Lvl1.text.tweendown = game.add.tween(Lvl1.text).to({
      alpha: 0
    }, 1000, Phaser.Easing.Quadratic.InOut).start();
  }
  this.resetStack();
  return;
}
IngredientsStack.prototype.resetStack = function () {
  var that = this
  setTimeout(function () {
    for (var i = 0; i < that.stack.length; i++) {
      that.stack[i].stackSprite.destroy()
    }
    that.stack = [];
  }, 500);
}
