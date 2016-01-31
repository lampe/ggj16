GoodOutro = function () {
  this.preload = function () {
    line = [];
    wordIndex = 0;
    lineIndex = 0;
    wordDelay = 150;
    lineDelay = 2000;
    game.load.image('textbox', 'assets/intro/textbox.png');
    game.load.image('outro1a', 'assets/outro/outro_1a_oberkiefer.png');
    game.load.image('outro1b', 'assets/outro/outro_1a_unterkiefer.png');
    game.load.image('outro2', 'assets/outro/outro_2_win.png');
    game.load.image('outro3', 'assets/outro/outro_3.png');

  }
  this.create = function () {
    this.currentImg = game.add.sprite(0, 0, '1a');
    this.textbox = game.add.sprite(0, 0, 'textbox');
    GoodOutro.textbox = this.textbox;
    this.oldImg = this.currentImg;
    this.currentImg = game.add.sprite(0, 0, 'outro1a');
    GoodOutro.currentImg2 = game.add.sprite(0, 0, 'outro1b');
    var d1 = {
      text: [''],
      cb: function () {
        content = d2.text;
        contentCb = d2.cb;
        GoodOutro.currentImg2.destroy();
        this.oldImg = this.currentImg;
        this.currentImg = game.add.sprite(0, 0, 'outro2');
        nextLineGoodOutro();
      }
    }
    var d2 = {
      text: ["This is delicious! You still got it,", "Giorgio! I’ ll see you tomorrow!"],
      cb: function () {
        content = d3.text;
        contentCb = d3.cb;
        this.oldImg = this.currentImg;
        this.currentImg = game.add.sprite(0, 0, 'outro3');
        nextLineGoodOutro();
      }
    }
    var d3 = {
      text: ["Oh nooooooooooo!"],
      cb: function () {
        // content = d3.text;
        // contentCb = d3.cb;
        // this.currentImg2.destroy();
        // this.oldImg = this.currentImg;
        // this.currentImg = game.add.sprite(0, 0, 'outro3');
        // nextLine();
      }
    }
    text = game.add.text(4, game.height * 0.85, '', {
      font: "8px gameboy",
      fill: "rgb(224, 248, 208)"
    });
    text.lineSpacing = -7;
    content = d1.text;
    contentCb = d1.cb;
    nextLineGoodOutro();
    this.oldImg.destroy();
    this.textbox.bringToTop();
  }
  this.destroy = function () {
    this.currentImg.destroy();
    this.textbox.destroy();
  }
  this.onEnd = function () {

  }
  this.update = function () {
    if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
      this.destroy()
      game.state.start("mainMenu");
    }
  }
  this.render = function () {
    Render.start()
  }
};


function nextLineGoodOutro() {

  if (lineIndex === content.length) {
    wordIndex = 0;
    lineIndex = 0;
    text.text = '';
    contentCb()
    return;
  }

  //  Split the current line on spaces, so one word per array element
  line = content[lineIndex].split(' ');

  //  Reset the word index to zero (the first word in the line)
  wordIndex = 0;

  //  Call the 'nextWord' function once for each word in the line (line.length)
  game.time.events.repeat(wordDelay, line.length, nextWordGoodOutro, this);

  //  Advance to the next line
  lineIndex++;

}

function nextWordGoodOutro() {
  GoodOutro.textbox.bringToTop();
  text.bringToTop();
  //  Add the next word onto the text string, followed by a space
  text.text = text.text.concat(line[wordIndex] + " ");
  // textAudio.play();
  //  Advance the word index to the next word in the line
  wordIndex++;

  //  Last word?
  if (wordIndex === line.length) {
    //  Add a carriage return
    text.text = text.text.concat("\n");
    //  Get the next line after the lineDelay amount of ms has elapsed
    game.time.events.add(lineDelay, nextLineGoodOutro, this);
  }

}
