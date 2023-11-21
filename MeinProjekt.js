document.addEventListener('DOMContentLoaded', function() {
  const questionElement = document.getElementById('question');
  const options = document.querySelectorAll(".option");
  const scoresElement = document.getElementById('score');
  const nextButton = document.getElementById('next');
  const restartButton = document.getElementById('restart');
  const quizContainer = document.querySelector(".quiz-container");

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
        options: ["Vincent van Gogh","Leonardo da Vinci","Pablo Picasso","Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question:"Welches ist der längste Fluss der Welt?",
        options:["Nil","Amazonas","Mississipi","Jangtsekiang"],
        correctAnswer: "Nil"
    },
    {
        question:"Welches ist das höchste Gebirge der Welt?",
        options:["Alpen","Anden","Rocky Mountains","Himalaya"],
        correctAnswer: "Himalaya"
    },
    {
        question:"Welches Land ist das größte Land der Welt nach Fläche?",
        options:["Kanada","China","Russland","USA"],
        correctAnswer:"Russland"
    },
    {
        question:"In Welchem Jahr begann der Erste Weltkrieg?",
        options:["1905","1914","1921","1939"],
        correctAnswer:"1914"          
    },
    {
      question:"Was ist die größte Wüste der Welt?",
      options:["Gobi-Wüste","Sahara-Wüste","Atacama-Wüste","Kalahari-Wüste"],
      correctAnswer:"Sahara-Wüste"
    },
    {
      question:"Wer schrieb das Drama 'Romeo und Julia'?",
      options:["William Shakespeare","Johann Wolfgang von Goethe","Charles Dickens","Friedrich Schiller","Kalahari-Wüste"],
      correctAnswer:"William Shakespeare"
    },
    { 
      question: "Welcher Planet ist der dritte in unserem Sonnensystem?",
      options: ["Venus","Jupiter","Mars","Uranus"],
      correctAnswer: "Mars"
  },
  { 
    question: "Was ist die chemische Formel für Wasser?",
    options: ["CO2","H2O","CH4","O2"],
    correctAnswer: "H2O"
},
{ 
  question: "Welches Land hat die meisten Einwohner auf der Welt?",
  options: ["Indien","China","Russland","USA"],
  correctAnswer: "China"
},
{ 
  question: "Wer malte das berühmte Gemälde 'Die Sternennacht'?",
  options: ["Vincent van Gogh","Pablo Picasso","Leonardo da Vinci","Edvard Munch"],
  correctAnswer: "Vincent van Gogh"
},
{ 
  question: "Welches Land liegt südlich von Ägypten?",
  options: ["Saudi-Arabien","Italien","Kenia","Griechenland"],
  correctAnswer: "Kenia"
}
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let timePerQuestion = 15; // Zeit in Sekunden pro Frage
  let timer; // Timer für den Countdown

  function startTimer() {
    let timeRemaining = timePerQuestion;
    timer = setInterval(function() {
      timeRemaining--;
      if (timeRemaining >= 0) {
        document.getElementById('timer').innerText = `Verbleibende Zeit: ${timeRemaining}s`;
      }
      if (timeRemaining === 0) {
        clearInterval(timer);
        handleTimeout();
      }
    }, 1000);
  }

  function handleTimeout() {
    options.forEach(function(option) {
      if (option.textContent === questions[currentQuestionIndex].correctAnswer) {
        option.classList.add('correct');
      } else {
        option.classList.add('incorrect');
      }
    });
    nextButton.style.display = 'block';
  }

  function showQuestion() {
    clearInterval(timer);
    document.getElementById('timer').innerText = `Verbleibende Zeit: ${timePerQuestion}s`;

    startTimer();

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = "Frage: " + currentQuestion.question;
    options.forEach(function(option, index) {
      option.textContent = currentQuestion.options[index];
      option.classList.remove('correct', 'incorrect');
    });
  }

  function checkAnswer(selectedOption) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption.textContent === currentQuestion.correctAnswer) {
      selectedOption.classList.add('correct');
      score += 10;
    } else {
      selectedOption.classList.add('incorrect');
    }
    options.forEach(function(option) {
      if (option.textContent !== currentQuestion.correctAnswer) {
        option.classList.add('incorrect');
      }
    });
    nextButton.style.display = 'block';
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      questionElement.textContent = "Herzlichen Glückwunsch! Du hast: " + score + " Punkte / 150 Punkte erreicht.";
      options.forEach(function(option) {
        option.style.display = 'none';
      });
      restartButton.style.display = 'block';
    }
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoresElement.textContent = score;
    nextButton.style.display = 'none';
    restartButton.style.display = 'none';
    options.forEach(function(option) {
      option.style.display = 'block';
    });
    showQuestion();
  }

  options.forEach(function(option) {
    option.addEventListener('click', function() {
      checkAnswer(option);
    });
  });

  nextButton.addEventListener('click', function() {
    nextQuestion();
  });

  restartButton.addEventListener('click', function() {
    restartQuiz();
  });

  function congratulate() {
    const totalScoreElement = document.createElement('div');
    totalScoreElement.textContent = `Herzlichen Glückwunsch! Du hast: ${score} Punkte / 150 Punkte erreicht.`;
    quizContainer.appendChild(totalScoreElement);

    restartButton.style.display = 'block';
  }

  function quizCompleted() {
    congratulate();
  }
  
  function exitGame() {
    clearInterval(timer);
    const totalScoreElement = document.createElement('div');
    totalScoreElement.textContent = `Spiel beendet! Du hast: ${score} Punkte / 100 Punkte erreicht.`;
    quizContainer.appendChild(totalScoreElement);

    options.forEach(function(option) {
      option.style.display = 'none';
    });

    nextButton.style.display = 'none';
    restartButton.style.display = 'block';
  }

  const exitButton = document.getElementById('exit');
  exitButton.addEventListener('click', function() {
    exitGame();
  });
});

  restartButton.addEventListener('click', function() {
    restartQuiz();
  });

  showQuestion();


