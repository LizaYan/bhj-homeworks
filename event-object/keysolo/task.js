class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.timer();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener("keydown", symbolCheck);
    const x = this; 
    function symbolCheck(event) {
      let currentLetter = x.currentSymbol.textContent.toLowerCase();
      let eventLetter = event.key.toLowerCase();
      if (currentLetter == eventLetter) {
        x.success();
      } else {
        x.fail();
      }
    }
  }

  timer() {
    const x = this;
    let seconds = document.getElementById("seconds"); 
    seconds.textContent = Array.from(document.getElementsByClassName("symbol")).length;
    function countdown() { 
      seconds.textContent--;
      if (seconds.textContent == 0) {
      x.fail();
      clearInterval(intervalId);
      } 
      clearInterval(intervalId);
    }
    let intervalId = setInterval(countdown, 1000);
  }
   


  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
    this.timer();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
    this.timer();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }
   

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

