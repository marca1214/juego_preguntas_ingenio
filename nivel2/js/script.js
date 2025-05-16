const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const feedbackDisplay = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;
let level = 2;

// Array de preguntas (¡Necesitarás más de 100!)
const questions = [
  {
    "question": "¿Qué le dice un techo a otro?",
    "answers": [
      { "text": "Te echo de menos", "correct": true },
      { "text": "Qué altura la tuya", "correct": false },
      { "text": "Techo veo, techo quiero", "correct": false },
      { "text": "Cuidado con la gotera", "correct": false }
    ]
  },
  {
    "question": "¿Qué hace una abeja en el gimnasio?",
    "answers": [
      { "text": "Zumba", "correct": false },
      { "text": "Le zumba al ejercicio", "correct": true },
      { "text": "Se pone en forma", "correct": false },
      { "text": "Saca miel", "correct": false }
    ]
  },
  {
    "question": "¿Cuál es el colmo de un jardinero?",
    "answers": [
      { "text": "Perder la compostura", "correct": false },
      { "text": "Que lo planten", "correct": false },
      { "text": "Que siempre lo dejen plantado", "correct": true },
      { "text": "Regar sin ganas", "correct": false }
    ]
  },
  {
    "question": "¿Qué hace una escoba en la escuela?",
    "answers": [
      { "text": "Aprende a barrer", "correct": false },
      { "text": "Toma apuntes", "correct": false },
      { "text": "Barre las dudas", "correct": false },
      { "text": "Va a clases de repaso", "correct": true }
    ]
  },
  {
    "question": "¿Qué hace una computadora en la playa?",
    "answers": [
      { "text": "Toma el sol digital", "correct": false },
      { "text": "Navega por la red", "correct": true },
      { "text": "Se desconecta", "correct": false },
      { "text": "Se enfría en la nube", "correct": false }
    ]
  },
  {
    "question": "¿Cómo se llama el campeón de buceo japonés?",
    "answers": [
      { "text": "Tokofondo", "correct": true },
      { "text": "Agua-Taka", "correct": false },
      { "text": "Sumergido-san", "correct": false },
      { "text": "Profundito", "correct": false }
    ]
  },
  {
    "question": "¿Y el subcampeón?",
    "answers": [
      { "text": "Menostoko", "correct": false },
      { "text": "No-Tanto", "correct": false },
      { "text": "Kasitoko", "correct": true },
      { "text": "Casi-sumo", "correct": false }
    ]
  },
  {
    "question": "¿Qué le dice una impresora a otra?",
    "answers": [
      { "text": "¿Esa hoja es tuya o es una impresión mía?", "correct": true },
      { "text": "¿Tienes tinta?", "correct": false },
      { "text": "Te copio todo", "correct": false },
      { "text": "Estamos conectadas", "correct": false }
    ]
  },
  {
    "question": "¿Por qué los esqueletos no pelean entre ellos?",
    "answers": [
      { "text": "Porque no tienen nervios", "correct": false },
      { "text": "Porque no tienen agallas", "correct": true },
      { "text": "Porque son frágiles", "correct": false },
      { "text": "Porque les da miedo", "correct": false }
    ]
  },
  {
    "question": "¿Qué hace un pez?",
    "answers": [
      { "text": "Nada", "correct": true },
      { "text": "Salta", "correct": false },
      { "text": "Bucea", "correct": false },
      { "text": "Se moja", "correct": false }
    ]
  },
  {
    "question": "¿Qué pasa si plantas una cebolla?",
    "answers": [
      { "text": "Nace otra", "correct": false },
      { "text": "Llueve", "correct": false },
      { "text": "Llora la tierra", "correct": true },
      { "text": "Nacen lágrimas", "correct": false }
    ]
  },
  {
    "question": "¿Cuál es el animal más antiguo?",
    "answers": [
      { "text": "El dinosaurio", "correct": false },
      { "text": "El pez", "correct": false },
      { "text": "La cebra, porque es en blanco y negro", "correct": true },
      { "text": "La tortuga", "correct": false }
    ]
  },
  {
    "question": "¿Qué hace una caja fuerte en una fiesta?",
    "answers": [
      { "text": "Protege los secretos", "correct": false },
      { "text": "Se encierra", "correct": false },
      { "text": "No se abre con cualquiera", "correct": false },
      { "text": "Guarda la sorpresa", "correct": true }
    ]
  },
  {
    "question": "¿Por qué los pájaros no usan WhatsApp?",
    "answers": [
      { "text": "Porque no tienen dedos", "correct": false },
      { "text": "Porque ya usan Twitter", "correct": true },
      { "text": "Porque vuelan mucho", "correct": false },
      { "text": "Porque no tienen batería", "correct": false }
    ]
  },
  {
    "question": "¿Qué le dice un semáforo a otro?",
    "answers": [
      { "text": "No me mires que me estoy cambiando", "correct": true },
      { "text": "Verde que te quiero verde", "correct": false },
      { "text": "Ámbar por favor", "correct": false },
      { "text": "Rojo de la ira", "correct": false }
    ]
  },
  {
    "question": "¿Qué le dice una taza a otra?",
    "answers": [
      { "text": "Taza luego", "correct": false },
      { "text": "¡Qué café más fuerte tienes!", "correct": true },
      { "text": "Nos vemos en la cocina", "correct": false },
      { "text": "Eres mi media loza", "correct": false }
    ]
  },
  {
    "question": "¿Qué le dijo una piedra a otra piedra?",
    "answers": [
      { "text": "Nos vemos en el camino", "correct": false },
      { "text": "No te pongas dura", "correct": false },
      { "text": "Rodemos juntas", "correct": true },
      { "text": "Qué mineral tan fino", "correct": false }
    ]
  },
  {
    "question": "¿Qué le dice el mar al sol?",
    "answers": [
      { "text": "No me seques tanto", "correct": false },
      { "text": "Gracias por brillar", "correct": true },
      { "text": "Déjame en paz", "correct": false },
      { "text": "Te reflejo", "correct": false }
    ]
  },
  {
    "question": "¿Qué hace una silla en el cine?",
    "answers": [
      { "text": "Se recuesta", "correct": false },
      { "text": "Ve la película sentado", "correct": false },
      { "text": "Silla tranquila", "correct": false },
      { "text": "Hace respaldo a la historia", "correct": true }
    ]
  },
  {
    "question": "¿Qué le dice un lápiz a otro lápiz?",
    "answers": [
      { "text": "Tú sí que tienes punta", "correct": true },
      { "text": "Eres muy grafito", "correct": false },
      { "text": "Vamos a rayar juntos", "correct": false },
      { "text": "Afílate que nos vamos", "correct": false }
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