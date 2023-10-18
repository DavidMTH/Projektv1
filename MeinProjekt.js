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

  ];

  let currentQuestionIndex = 0;
  let score = 0;

  function nextQuestion() {
      options.forEach(function(option) {
        option.classList.remove('correct', 'incorrect');
      });
      nextButton.style.display = 'none';
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        // Zeige Quiz-Ergebnis
        questionElement.textContent = "Herzlichen Glückwunsch! Du hast: " + score + " Punkte / 100 Punkte erreicht.";
        options.forEach(function(option) {
          option.style.display = 'none';
        });
        restartButton.style.display = 'block';
      }
    }

    options.forEach(function(option) {
      option.addEventListener('click', function() {
        checkAnswer(option);
      });
    });

    nextButton.addEventListener('click', function() {
      nextQuestion();
    });  

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
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = "Frage: " + currentQuestion.question;
      options.forEach(function(option, index) {
        option.textContent = currentQuestion.options[index];
      });
    }
    function checkAnswer(selectedOption) {
      const currentQuestion = questions[currentQuestionIndex];
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

  function congratulate() {
      const totalScoreElement = document.createElement('div');
      totalScoreElement.textContent = `Herzlichen Glückwunsch! Du hast: ${score} Punkte / 100 Punkte erreicht.`;
      quizContainer.appendChild(totalScoreElement);

      restartButton.style.display = 'block';
  }

  function quizCompleted() {
      congratulate();
  }

  restartButton.addEventListener('click', function() {
    restartQuiz(); // Aufruf der restartQuiz-Funktion beim Klicken des Neustart-Buttons
  });

  showQuestion();
});