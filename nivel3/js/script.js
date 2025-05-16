const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const feedbackDisplay = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;
let level = 3;

// Array de preguntas (¡Necesitarás más de 100!)
const questions = [
  {
    "question": "¿Qué es algo que entre más grande es, menos se ve?",
    "answers": [
      { "text": "La oscuridad", "correct": true },
      { "text": "El universo", "correct": false },
      { "text": "La mentira", "correct": false },
      { "text": "El silencio", "correct": false }
    ]
  },
  {
    "question": "¿Qué entra duro y seco y sale blando y mojado?",
    "answers": [
      { "text": "El pan en la sopa", "correct": false },
      { "text": "El espagueti", "correct": false },
      { "text": "El cepillo de dientes", "correct": false },
      { "text": "El chicle", "correct": true }
    ]
  },
  {
    "question": "¿Qué se moja mientras seca?",
    "answers": [
      { "text": "La toalla", "correct": true },
      { "text": "El sol", "correct": false },
      { "text": "La nube", "correct": false },
      { "text": "La camiseta", "correct": false }
    ]
  },
  {
    "question": "¿Qué cuelga, es largo y lo usan los hombres desde que nacen?",
    "answers": [
      { "text": "El nombre", "correct": true },
      { "text": "El cordón umbilical", "correct": false },
      { "text": "La corbata", "correct": false },
      { "text": "El apellido", "correct": false }
    ]
  },
  {
    "question": "¿Qué se abre con las piernas y se cierra con las manos?",
    "answers": [
      { "text": "Un compás", "correct": false },
      { "text": "Un libro", "correct": true },
      { "text": "Una tijera", "correct": false },
      { "text": "Un paraguas", "correct": false }
    ]
  },
  {
    "question": "¿Qué es algo que cuando está en la cama, no se mueve?",
    "answers": [
      { "text": "Un río", "correct": true },
      { "text": "Un colchón", "correct": false },
      { "text": "Un pez", "correct": false },
      { "text": "Una piedra", "correct": false }
    ]
  },
  {
    "question": "¿Qué tiene cabeza pero no piensa, y tiene cama pero no duerme?",
    "answers": [
      { "text": "Un río", "correct": false },
      { "text": "Un clavo", "correct": false },
      { "text": "Un martillo", "correct": true },
      { "text": "Un alfiler", "correct": false }
    ]
  },
  {
    "question": "¿Qué se abre con una mano y se cierra con dos?",
    "answers": [
      { "text": "Un paraguas con viento", "correct": false },
      { "text": "Un frasco difícil", "correct": false },
      { "text": "Un beso", "correct": false },
      { "text": "Un sujetador", "correct": true }
    ]
  },
  {
    "question": "¿Qué corre sin piernas y silba sin boca?",
    "answers": [
      { "text": "El viento", "correct": true },
      { "text": "El tren", "correct": false },
      { "text": "El río", "correct": false },
      { "text": "Una serpiente", "correct": false }
    ]
  },
  {
    "question": "¿Qué entra en el cuerpo sin pedir permiso y a veces duele?",
    "answers": [
      { "text": "Una espina", "correct": false },
      { "text": "La verdad", "correct": true },
      { "text": "Una inyección", "correct": false },
      { "text": "Un pensamiento", "correct": false }
    ]
  },
  {
    "question": "¿Qué empieza con “p”, termina con “a” y te encanta después de comer?",
    "answers": [
      { "text": "Pasta", "correct": false },
      { "text": "Piña colada", "correct": false },
      { "text": "Postre", "correct": true },
      { "text": "Papa", "correct": false }
    ]
  },
  {
    "question": "¿Qué tiene pelos por fuera y carne por dentro, y entra en la boca?",
    "answers": [
      { "text": "El coco", "correct": true },
      { "text": "La piña", "correct": false },
      { "text": "El kiwi", "correct": false },
      { "text": "El mango", "correct": false }
    ]
  },
  {
    "question": "¿Qué es largo, redondo y se mete en la boca todos los días?",
    "answers": [
      { "text": "El dedo", "correct": false },
      { "text": "El cepillo de dientes", "correct": true },
      { "text": "La cuchara", "correct": false },
      { "text": "Un dulce", "correct": false }
    ]
  },
  {
    "question": "¿Qué cosa entra y sale, pero si se rompe, ya no sirve?",
    "answers": [
      { "text": "Un secreto", "correct": true },
      { "text": "Un globo", "correct": false },
      { "text": "Un condón", "correct": false },
      { "text": "Un huevo", "correct": false }
    ]
  },
  {
    "question": "¿Qué tiene lengua pero no puede hablar?",
    "answers": [
      { "text": "El zapato", "correct": true },
      { "text": "El gato", "correct": false },
      { "text": "La campana", "correct": false },
      { "text": "Un muñeco", "correct": false }
    ]
  },
  {
    "question": "¿Qué puedes sostener sin tocar?",
    "answers": [
      { "text": "Un pensamiento", "correct": false },
      { "text": "La respiración", "correct": true },
      { "text": "Una promesa", "correct": false },
      { "text": "Un suspiro", "correct": false }
    ]
  },
  {
    "question": "¿Qué sube mojado y baja seco?",
    "answers": [
      { "text": "La toalla", "correct": false },
      { "text": "Una esponja", "correct": false },
      { "text": "Un cubo", "correct": false },
      { "text": "Un balde en el pozo", "correct": true }
    ]
  },
  {
    "question": "¿Qué tiene forma de serpiente, pero no muerde y se estira?",
    "answers": [
      { "text": "Una cuerda", "correct": false },
      { "text": "Una manguera", "correct": true },
      { "text": "Una serpiente de juguete", "correct": false },
      { "text": "Una cinta", "correct": false }
    ]
  },
  {
    "question": "¿Qué cosa entra con fuerza, sale sin ganas y deja todo mojado?",
    "answers": [
      { "text": "La lluvia", "correct": false },
      { "text": "El chapuzón", "correct": false },
      { "text": "Un tsunami", "correct": false },
      { "text": "El corcho de una botella", "correct": true }
    ]
  },
  {
    "question": "¿Qué está siempre detrás de ti, pero no lo puedes ver?",
    "answers": [
      { "text": "La sombra", "correct": false },
      { "text": "El recuerdo", "correct": false },
      { "text": "El pasado", "correct": true },
      { "text": "Tu nuca", "correct": false }
    ]
  }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    level = 3;
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