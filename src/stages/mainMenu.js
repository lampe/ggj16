MainMenu = function () {
  this.create = function () {
    MainMenu.menuList = ['start', 'options'];
    MainMenu.selectedItem = MainMenu.menuList[0];
    MainMenu.MenuListITems = [];
    MainMenu.cursorInput = game.input.keyboard.createCursorKeys();
    MainMenu.enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
    MainMenu.cursor = undefined;
    var style = {
      font: "16px gameboy",
      fill: 'rgb(19, 58, 25)'
    };
    var yPos = 60;
    for (var i = 0; i < MainMenu.menuList.length; i++) {
      yPos += 24;
      MainMenu.MenuListITems[i] = game.add.text(0, yPos, MainMenu.menuList[i], style);
      MainMenu.MenuListITems[i].position.x = game.width / 2 - MainMenu.MenuListITems[i].width / 2;
    }
    MainMenu.cursor = game.add.text(MainMenu.MenuListITems[0].position.x - 16, MainMenu.MenuListITems[0].position.y, "𐰷", style);
    MainMenu.cursor.currentPosition = 0;
  }
  this.render = function () {
    Render.start()
  }
  this.update = function () {
    if (MainMenu.enterKey.isDown && MainMenu.enterKey.repeats === 0) {
      if (MainMenu.menuList[MainMenu.cursor.currentPosition] === 'start') {
        game.state.start('lvl1');
        return;
      }
      game.state.start(MainMenu.menuList[MainMenu.cursor.currentPosition]);
    }
    if (MainMenu.cursorInput.down.isDown && MainMenu.cursorInput.down.repeats === 0) {
      if (MainMenu.menuList.length - 1 > MainMenu.cursor.currentPosition) {
        MainMenu.cursor.currentPosition += 1;
        MainMenu.cursor.position.x = MainMenu.MenuListITems[MainMenu.cursor.currentPosition].position.x - 16;
        MainMenu.cursor.position.y = MainMenu.MenuListITems[MainMenu.cursor.currentPosition].position.y;
      }
    }
    if (MainMenu.cursorInput.up.isDown && MainMenu.cursorInput.up.repeats === 0) {
      if (0 < MainMenu.cursor.currentPosition) {
        MainMenu.cursor.currentPosition -= 1;
        MainMenu.cursor.position.x = MainMenu.MenuListITems[MainMenu.cursor.currentPosition].position.x - 16;
        MainMenu.cursor.position.y = MainMenu.MenuListITems[MainMenu.cursor.currentPosition].position.y;
      }
    }
  }
}
