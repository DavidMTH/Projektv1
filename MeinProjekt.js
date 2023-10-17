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

    const questions = [
        {
            question: "Was ist die Hauptstadt von Spanien?",
            options: ["Barcelona","Madrid","Lissabon","Malaga"],
            correctAnswer: "Madrid"
        },
        { 
            question: "Was ist die Hauptstadt von Polen?",
            options: ["Gdańsk","Kraków","Warszawa","Szczecin"],
            correctAnswer: "Warszawa"
        },
        {
            question: "Was ist die Hauptstadt von Portugal?",
            options: ["Porto","Lissabon","Lagos","València"],
            correctAnswer: "Lissabon"        
        },
        {
            question: "Wer hat das Gemälde 'Die Mona Lisa' gemalt?",
            options: ["Vincent van Gogh","Leanoardo da Vinci","Pablo Picasso","Michelangelo"],
            correctAnswer: "Leonardo da Vinci"
        },
        {
            question:"Welches ist der längste Fluss der Welt?",
            options:["Nil","Amazonas","Mississipi","Jangtsekiang"],
            correctAnswer: "Nil"
        },
        {
            question:"Welches ist das höchste Gebirge der Welt?",
            options:["Himalaya","Anden","Rocky Mountains","Alpen"],
            correctAnswer: "Himalaya"
        },
        {
            question:"Welches Land ist das größte Land der Welt nach Fläche?",
            options:["Russland","Kanada","China","USA"],
            correctAnswer:"Russland"
        },
    ];

    var currentQuestionIndex = 0;
    var score = 0;

    function showNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            options.forEach(function(option) {
                option.classList.remove('correct', 'incorrect');
            });
            nextButton.style.display = 'none';
            currentQuestionIndex++;
            showQuestion();
        } else {
            congratulate();
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
        showNextQuestion();
    }

    function congratulate() {
        const totalScoreElement = document.createElement('div');
        totalScoreElement.textContent = `Herzlichen Glückwunsch! Du hast ${score} Punkte erreicht.`;
        quizContainer.appendChild(totalScoreElement);

        restartButton.style.display = 'block';
    }

    showQuestion();
});