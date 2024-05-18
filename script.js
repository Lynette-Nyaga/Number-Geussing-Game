let min = 1;
        let max = 20;
        let answer = Math.floor(Math.random() * (max - min + 1)) + min;

        // Get DOM elements
        let outputMessage = document.getElementById("output");
        let input = document.getElementById("input");
        let submitButton = document.getElementById("submit");
        let historyDisplay = document.getElementById("history");
        let resultDisplay = document.getElementById("result");
        let playAgainButton = document.getElementById("play-again");

        let attempts = 0;
        let running = true;
        let guesses = [];

        // Event listener for the Submit button
        submitButton.addEventListener("click", function() {
            if (!running) return; // Exit function if the game is not running
            let guess = parseInt(input.value);

            if (isNaN(guess) || guess < min || guess > max) {
                outputMessage.textContent = "Please enter a valid number between 1 and 20!";
            } else {
                outputMessage.textContent = ""; // Clear output message
                attempts++;
                guesses.push(guess);
                displayGuesses();

                if (guess < answer) {
                    resultDisplay.textContent = 'Too low, try a higher number!';
                } else if (guess > answer) {
                    resultDisplay.textContent = 'Too high, try a lower number';
                } else {
                    resultDisplay.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts.`;
                    running = false; // End the game
                    playAgainButton.style.display = "block"; // Show Play Again button
                }

                input.value = ""; // Clear input field
            }

            if (attempts >= 5 && running) {
                resultDisplay.textContent = `Game over! You've reached the maximum number of attempts. The answer was ${answer}.`;
                running = false; // End the game
                playAgainButton.style.display = "block"; // Show Play Again button
            }
        });

        // Function to display the history of guesses
        function displayGuesses() {
            historyDisplay.textContent = `Numbers entered: ${guesses.join(", ")}`;
        }

        // Event listener for the Play Again button
        playAgainButton.addEventListener("click", function() {
            // Reset game state
            answer = Math.floor(Math.random() * (max - min + 1)) + min;
            attempts = 0;
            guesses = [];
            running = true;

            outputMessage.textContent = ""; // Clear output message
            historyDisplay.textContent = ""; // Clear history display
            resultDisplay.textContent = ""; // Clear result display
            input.value = ""; // Clear input field

            playAgainButton.style.display = "none"; // Hide Play Again button
        });