document.addEventListener("DOMContentLoaded", function () {
    const questionContainer = document.getElementById("question-container");
    const question = document.getElementById("question");
    const userInput = document.getElementById("userInput");
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");
    const nextButton = document.getElementById("nextButton");
    const backButton = document.getElementById("backButton"); // Add the "Back" button

    const questions = [
        {
            question: "Re write:<br>I am on the way",
            answer: "I am on the way",
        },
        {
            question: "Re write:<br>What time is it",
            answer: "What time is it",
        },
        {
            question: "Re write:<br>I need something",
            answer: "I need something",
        },
    ];

    let currentQuestionIndex = 0;

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        question.innerHTML = currentQuestion.question;
        userInput.value = "";
        result.textContent = "";
    }

    function checkAnswer() {
        const currentQuestion = questions[currentQuestionIndex];
        const userText = userInput.value;
        if (userText === currentQuestion.answer) {
            result.textContent = "Correct!";
            result.style.color = "green";
        } else {
            result.textContent = "Incorrect. Try again.";
            result.style.color = "red";
        }
    }

    displayQuestion();

    checkButton.addEventListener("click", checkAnswer);

    nextButton.addEventListener("click", function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else if (currentQuestionIndex === questions.length) {
            // Redirect to the next HTML page when the questions are completed
            window.location.href = "fourth.html";
        }
    });

    backButton.addEventListener("click", function () {
        currentQuestionIndex--;
        if (currentQuestionIndex < 0) {
            currentQuestionIndex = 0; // Prevent going to a negative index
        }
        displayQuestion();
    });
});
