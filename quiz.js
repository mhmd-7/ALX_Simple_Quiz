function checkAnswer() {
    // 1. Correct answer
    const correctAnswer = "4";

    // 2. User’s selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // 3. Comparison + feedback
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// 4. Event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
