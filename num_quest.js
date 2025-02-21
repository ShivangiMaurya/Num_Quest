document.addEventListener("DOMContentLoaded", () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const inputField = document.getElementById("guessInput");
    const submitButton = document.getElementById("submitGuess");
    const message = document.getElementById("message");
    let attempts = 0;

    submitButton.addEventListener("click", () => {
        const userGuess = parseInt(inputField.value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = "Please enter a number between 1 and 100.";
            message.style.color = "orange";
            return;
        }

        if (userGuess === randomNumber) {
            message.textContent = `🎉 Congratulations! You guessed the number in ${attempts} attempts.`;
            message.style.color = "green";
            submitButton.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = "📉 Too low! Try again.";
            message.style.color = "red";
        } else {
            message.textContent = "📈 Too high! Try again.";
            message.style.color = "red";
        }
    });
});
