const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const feedbackDisplay = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;
let level = 4;

// Array de preguntas (¡Necesitarás más de 100!)
const questions = [
  {
    "question": "Si un tren eléctrico va hacia el norte y el viento sopla hacia el oeste, ¿hacia dónde va el humo?",
    "answers": [
      { "text": "Norte", "correct": false },
      { "text": "Oeste", "correct": false },
      { "text": "No hay humo, es eléctrico", "correct": true },
      { "text": "Sur", "correct": false }
    ]
  },
  {
    "question": "Si cinco máquinas hacen cinco productos en cinco minutos, ¿cuánto tardan 100 máquinas en hacer 100 productos?",
    "answers": [
      { "text": "100 minutos", "correct": false },
      { "text": "5 minutos", "correct": true },
      { "text": "1 minuto", "correct": false },
      { "text": "10 minutos", "correct": false }
    ]
  },
  {
    "question": "¿Cuánto es la mitad de dos más dos?",
    "answers": [
      { "text": "3", "correct": true },
      { "text": "2", "correct": false },
      { "text": "2.5", "correct": false },
      { "text": "4", "correct": false }
    ]
  },
  {
    "question": "Un granjero tiene 10 ovejas, se le mueren 3. ¿Cuántas ovejas le quedan?",
    "answers": [
      { "text": "7", "correct": false },
      { "text": "10", "correct": true },
      { "text": "3", "correct": false },
      { "text": "0", "correct": false }
    ]
  },
  {
    "question": "¿Cuántos meses tienen 28 días?",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2", "correct": false },
      { "text": "Todos", "correct": true },
      { "text": "12 solo en años bisiestos", "correct": false }
    ]
  },
  {
    "question": "Si tienes un pastel y haces tres cortes, ¿cuál es el máximo de pedazos que puedes obtener?",
    "answers": [
      { "text": "4", "correct": false },
      { "text": "6", "correct": false },
      { "text": "7", "correct": true },
      { "text": "5", "correct": false }
    ]
  },
  {
    "question": "Una madre tiene 30 años y su hija 10. ¿Cuántos años deben pasar para que la madre tenga el doble de edad que la hija?",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "20", "correct": false },
      { "text": "Nunca", "correct": false },
      { "text": "10 años", "correct": true }
    ]
  },
  {
    "question": "¿Cuántas veces puedes restar 5 de 25?",
    "answers": [
      { "text": "5 veces", "correct": false },
      { "text": "1 vez", "correct": true },
      { "text": "Infinito", "correct": false },
      { "text": "Ninguna", "correct": false }
    ]
  },
  {
    "question": "Si un gallo pone un huevo en la cima de un tejado, ¿de qué lado cae?",
    "answers": [
      { "text": "Derecha", "correct": false },
      { "text": "Izquierda", "correct": false },
      { "text": "No cae, lo recoge", "correct": false },
      { "text": "Ninguno, los gallos no ponen huevos", "correct": true }
    ]
  },
  {
    "question": "¿Qué número sigue en esta serie? 1, 4, 5, 6, 7, 9, 11...",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "8", "correct": false },
      { "text": "3", "correct": false },
      { "text": "100 (números sin la letra 'o')", "correct": true }
    ]
  },
  {
    "question": "Si 2 = 6, 3 = 12, 4 = 20, entonces 5 = ?",
    "answers": [
      { "text": "25", "correct": false },
      { "text": "30", "correct": true },
      { "text": "28", "correct": false },
      { "text": "35", "correct": false }
    ]
  },
  {
    "question": "Tengo 2 manzanas y me quitan 1. ¿Cuántas tengo?",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2, porque me las quitaron pero siguen siendo mías", "correct": true },
      { "text": "0", "correct": false },
      { "text": "Depende", "correct": false }
    ]
  },
  {
    "question": "Un hombre tiene 53 calcetines en el cajón: 21 negros, 15 azules y 17 rojos. ¿Cuántos debe sacar como mínimo para tener un par del mismo color?",
    "answers": [
      { "text": "2", "correct": false },
      { "text": "4", "correct": true },
      { "text": "3", "correct": false },
      { "text": "1", "correct": false }
    ]
  },
  {
    "question": "Si 1=3, 2=3, 3=5, 4=4, 5=4, ¿entonces 6=?",
    "answers": [
      { "text": "3", "correct": false },
      { "text": "5", "correct": false },
      { "text": "6", "correct": false },
      { "text": "3 (número de letras en la palabra 'seis')", "correct": true }
    ]
  },
  {
    "question": "Un pato adelante, dos patos atrás. ¿Cuántos patos hay en total?",
    "answers": [
      { "text": "3", "correct": true },
      { "text": "4", "correct": false },
      { "text": "5", "correct": false },
      { "text": "6", "correct": false }
    ]
  },
  {
    "question": "Un campesino tiene 17 ovejas y se le escapan todas menos 9. ¿Cuántas quedan?",
    "answers": [
      { "text": "8", "correct": false },
      { "text": "0", "correct": false },
      { "text": "9", "correct": true },
      { "text": "17", "correct": false }
    ]
  },
  {
    "question": "¿Cuánto es 0 dividido por 0?",
    "answers": [
      { "text": "Indeterminado", "correct": true },
      { "text": "0", "correct": false },
      { "text": "1", "correct": false },
      { "text": "No existe", "correct": false }
    ]
  },
  {
    "question": "Un caracol sube 3 metros de día y baja 2 de noche. ¿Cuántos días tarda en salir de un pozo de 10 metros?",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "8", "correct": false },
      { "text": "7", "correct": true },
      { "text": "6", "correct": false }
    ]
  },
  {
    "question": "Tengo 10 dedos en las manos. ¿Cuántos tengo en 10 manos?",
    "answers": [
      { "text": "100", "correct": true },
      { "text": "10", "correct": false },
      { "text": "50", "correct": false },
      { "text": "Depende", "correct": false }
    ]
  },
  {
    "question": "¿Qué pesa más: un kilo de hierro o un kilo de algodón?",
    "answers": [
      { "text": "Hierro", "correct": false },
      { "text": "Algodón", "correct": false },
      { "text": "Pesan igual", "correct": true },
      { "text": "Depende del volumen", "correct": false }
    ]
  }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    level = 1;
    updateScoreDisplay();
    updateLevelDisplay();
    nextButton.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    resetAnswerButtons();
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetAnswerButtons() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    feedbackDisplay.classList.add('hidden');
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        if (button === selectedButton && !isCorrect) {
            button.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        score += 5; // O la puntuación que desees por respuesta correcta
        feedbackDisplay.textContent = "¡Correcto!";
        feedbackDisplay.classList.remove('hidden');
    } else {
        feedbackDisplay.textContent = "Incorrecto.";
        feedbackDisplay.classList.remove('hidden');
    }

    updateScoreDisplay();
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hidden');
    } else {
        questionText.textContent = `¡Juego Terminado! Puntuación final: ${score}`;
        answerButtons.innerHTML = '';
        nextButton.classList.add('hidden');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Aquí podrías implementar la lógica para cambiar de nivel
        level++;
        updateLevelDisplay();
        currentQuestionIndex = 0; // Volver a las primeras preguntas del siguiente nivel
        showQuestion();
    }
    nextButton.classList.add('hidden');
}

function updateScoreDisplay() {
    scoreDisplay.textContent = score;
}

function updateLevelDisplay() {
    levelDisplay.textContent = level;
}

nextButton.addEventListener('click', nextQuestion);

// Iniciar el juego al cargar la página
startQuiz();