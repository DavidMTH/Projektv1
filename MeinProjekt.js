document.addEventListener('DOMContentLoaded', function() {
const body = document.body;
const quizContainer = document.querySelector(".quiz-container");
const questionElement = document.getElementById('question');
const options = document.querySelectorAll(".option");
const scoresElement = document.querySelector(".score");
const nextButton = document.querySelector(".next-button");
const restartButton = document.querySelector(".restart-button");

nextButton.addEventListener("click", showNextQuestion);
restartButton.addEventListener("click", restartQuiz);
options.forEach(function(option) {
    option.addEventListener('click', function() {
        checkAnswer(option);
    });
});

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        options.forEach(function(option) {
            option.classList.remove('correct', 'incorrect');
        });
        nextButton.style.display = 'none';
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        }
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoresElement.textContent = score;
    restartButton.style.display = 'none';
    options.forEach(function(option) {
        option.style.display = 'block';
    });
    showQuestion();
}

function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    options.forEach(function(option, index) {
        option.textContent = currentQuestion.options[index];
    });
}

function checkAnswer(selectedOption) {
    var currentQuestion = questions[currentQuestionIndex];
    if (selectedOption.textContent === currentQuestion.correctAnswer) {
        selectedOption.classList.add('correct');
        score += 10;
    } else {
        selectedOption.classList.add('incorrect');
    }
    scoresElement.textContent = score;
    options.forEach(function(option) {
        if (option.textContent !== currentQuestion.correctAnswer) {
            option.classList.add('incorrect');
        }
    });
    nextButton.style.display = 'block';
}

const questions = [
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        options: ["Berlin", "Paris", "London", "Rom"],
        correctAnswer: "Berlin"
    },
    {
        question: "Was ist die Hauptstadt von Frankreich?",
        options: ["London", "Rom", "Paris", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "Was ist die Hauptstadt von England?",
        options: ["Rom", "Paris", "London", "Berlin"],
        correctAnswer: "London"
    },
    {
        question: "Was ist die Hauptstadt von Spanien?",
        options: ["Barcelona", "Madrid", "Lissabon","Malaga"],
        correctAnswer: "Madrid"
    },
];

var currentQuestionIndex = 0;
var score = 0;
});

showQuestion();