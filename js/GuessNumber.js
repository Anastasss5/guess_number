export default class GuessNumber{
  constructor(app){
    this.app = app;
    this.sendBtn = this.app.querySelector("#button-send");
    this.scteen = this.app.querySelector("#screen");
    this.inputGuess = this.app.querySelector("#input-guess");
    this.counter = 0;
    this.isOpen = true;

    this.sendBtn.addEventListener("click", () => {
      this.#sendGuess(this.inputGuess.value + "?", "guess");
      this.#sendAnswer(this.inputGuess.value);
    });
  }   
 
  #sendAnswer(userNum){
    if(userNum > this.randomNumber){
      this.#sendGuess("LESS");
    }
    else if( userNum < this.randomNumber){
      this.#sendGuess("MORE");
    }
    else{
      this.#sendGuess("WIN!!! Shall we play more?");
      this.isOpen = false;
    }
    if(userNum == "yes" && this.isOpen == false){
        this.scteen.innerHTML = "";
        this.init();
      }
  }
  init(){
   this.#sendGuess("I guessed a number from 1 to 10");
   this.randomNumber = 1 + Math.floor(Math.random() * 10);
  }

  #sendGuess(text, sender = "answer"){
    const block = document.createElement("div");
    block.classList.add("bubble", sender);
    this.counter += 1;
    block.dataset.bubbleId = this.counter;
    block.innerHTML = text;
    this.scteen.append(block);
  }
}