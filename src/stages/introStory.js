line = [];
wordIndex = 0;
lineIndex = 0;
wordDelay = 150;
lineDelay = 1500;
IntroStory = function () {
  this.preload = function () {
    game.load.image('textbox', 'assets/intro/textbox.png');
    game.load.image('1a', 'assets/intro/intro_1a.png');
    game.load.image('1b', 'assets/intro/intro_1b.png');
    game.load.atlasJSONHash('intro2', 'assets/intro/intro_2.png', 'assets/intro/intro_2.json');
    game.load.atlasJSONHash('intro3', 'assets/intro/intro_3.png', 'assets/intro/intro_3.json');
    game.load.image('intro4', 'assets/intro/intro_4.png');
  }
  this.create = function () {
    this.currentImg = game.add.sprite(0, 0, '1a');
    this.textbox = game.add.sprite(0, 0, 'textbox');
    IntroStory.textbox = this.textbox;
    this.oldImg = this.currentImg;
    this.currentImg = game.add.sprite(0, 0, '1b');
    var d1 = {
      text: ["I'm back!"],
      cb: function () {
        content = d2.text;
        contentCb = d2.cb;
        this.oldImg = this.currentImg;
        this.currentImg = game.add.sprite(0, 0, 'intro2');
        nextLine();
      }
    }
    var d2 = {
      text: ["Hey Giorgio,", "you drunk again or what?"],
      cb: function () {
        content = d3.text;
        contentCb = d3.cb;
        this.oldImg = this.currentImg;
        this.currentImg = game.add.sprite(0, 0, 'intro3');
        nextLine();
      }
    }
    var d3 = {
      text: ["It's that lunatic! Maybe after", "this burger I can finally find peace?"],
      cb: function () {
        content = d4.text;
        contentCb = d4.cb;
        this.oldImg = this.currentImg;
        this.currentImg = game.add.sprite(0, 0, 'intro4');
        nextLine();
      }
    }
    var d4 = {
      text: ["Give me the usual, Giorgio…"],
      cb: function () {
        game.state.states.introStory.destroy();
        game.state.start('mainMenu');
      }
    }
    text = game.add.text(4, game.height * 0.85, '', {
      font: "8px gameboy",
      fill: "rgb(224, 248, 208)"
    });
    text.lineSpacing = -7;
    content = d1.text;
    contentCb = d1.cb;
    nextLine();
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


function nextLine() {

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
  game.time.events.repeat(wordDelay, line.length, nextWord, this);

  //  Advance to the next line
  lineIndex++;

}

function nextWord() {
  IntroStory.textbox.bringToTop();
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
    game.time.events.add(lineDelay, nextLine, this);
  }

}
