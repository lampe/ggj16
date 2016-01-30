var gb = {
  run: new ReactiveVar(false),
  firstRun: true,
  scale: 5,
  canvas: null,
  context: null,
  width: 0,
  height: 0,
  canvasAdded: false,
  c1: 'rgb(224, 248, 208)',
  c2: 'rgb(138, 169, 47)',
  c3: 'rgb(49, 98, 54)',
  c4: 'rgb(19, 58, 25)',
  old: {
    scaleModes: {}
  }
}

Tracker.autorun(function () {
  var run = gb.run.get()
  if (gb.firstRun === true) {
    gb.firstRun = false;
    return;
  }
  if (run === true) {
    gb.init()
    return;
  }
  gb.unload()
  return;
})

gb.init = function () {
  // save old scalemode
  gb.old.scaleModes.DEFAULT = PIXI.scaleModes.DEFAULT;
  PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST;
  //  Hide the un-scaled game canvas
  game.canvas.style['display'] = 'none';
  // if (gb.canvasAdded === false) {
    //  Create our scaled canvas. It will be the size of the game * whatever scale value you've set
    gb.canvas = Phaser.Canvas.create(this, game.width * gb.scale, game.height * gb.scale);
    //  Store a reference to the Canvas Context
    gb.context = gb.canvas.getContext('2d');
    //  Add the scaled canvas to the DOM
    Phaser.Canvas.addToDOM(gb.canvas, game.parent);
    gb.canvasAdded = true;
  // }
  //  Disable smoothing on the scaled canvas
  Phaser.Canvas.setSmoothingEnabled(game.context, false);
  //  Cache the width/height to avoid looking it up every render
  gb.width = gb.canvas.width;
  gb.height = gb.canvas.height;
}

gb.unload = function () {
  PIXI.scaleModes.DEFAULT = gb.old.scaleModes.DEFAULT;
  Phaser.Canvas.setSmoothingEnabled(game.context, true);
}

gb.render = function () {
  if (gb.run.get() === false) {
    return;
  }
  gb.context.drawImage(game.canvas, 0, 0, game.width, game.height, 0, 0, gb.width, gb.height);
  return;
}
