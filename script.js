let min=1;
let max=20;
let answer=Math.floor(Math.random()*(max-min+1))+min;

let outputMessage=document.getElementById("output");
let resultDisplay=document.getElementById("result");
let input=document.getElementById("input");
let playAgainButton = document.getElementById("play-again");
let submitButton = document.getElementById("submit");
let historyDisplay = document.getElementById("history");




let attempts=0;
let running=true;
let guesses=[];

submitButton.addEventListener("click", function() {
if(!running) return
  let guess=parseInt(input.value);


    

    if (isNaN(guess) || guess<min||guess>max){
      outputMessage.textContent=("please enter a valid number!");
    }
    else
    {
        attempts ++;
        guesses.push(guess);
        displayGuesses();

        if(guess<answer){
            resultDisplay.textContent=('Too low, try a higher number!');
        }else if(guess>answer){
            resultDisplay.textContent=('Too high, try a lower number');
        }else{
            resultDisplay.textContent=(`Correct !!!!. The answer was ${answer} and it took you ${attempts} attempts`);
            running=false;
            playAgainButton.style.display = "block";
        }
    }
});
function displayGuesses() {
    historyDisplay.textContent = `Numbers entered: ${guesses.join(", ")}`;
}

playAgainButton.addEventListener("click", function() {
    // Reset game state
    answer = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = 0;
    guesses = [];
    running = true;

    outputMessage.textContent = "";
    resultDisplay.textContent = "";
    historyDisplay.textContent = "";
    input.value = "";

    // Hide Play Again button
    playAgainButton.style.display = "none";
});
