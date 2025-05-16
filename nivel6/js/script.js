const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const feedbackDisplay = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;
let level = 6;

// Array de preguntas (¡Necesitarás más de 100!)
const questions = [
    {
        "question": "Cuanto más lo tienes, menos ves. ¿Qué es?",
        "answers": [
            { "text": "Viento", "correct": false },
            { "text": "Agua", "correct": false },
            { "text": "Oscuridad", "correct": true },
            { "text": "Tiempo", "correct": false }
        ]
    },
    {
        "question": "No tiene vida, pero crece. No tiene pulmones, pero necesita aire. ¿Qué es?",
        "answers": [
            { "text": "Fuego", "correct": true },
            { "text": "Planta", "correct": false },
            { "text": "Roca", "correct": false },
            { "text": "Luz", "correct": false }
        ]
    },
    {
        "question": "Mientras más tienes de ello, menos pesas. ¿Qué es?",
        "answers": [
            { "text": "Vacío", "correct": true },
            { "text": "Hoy", "correct": false },
            { "text": "Oro", "correct": false },
            { "text": "Piedras", "correct": false }
        ]
    },
    {
        "question": "Tiene ciudades, pero no casas. Tiene bosques, pero no árboles. Tiene ríos, pero no agua. ¿Qué es?",
        "answers": [
            { "text": "Mundo", "correct": false },
            { "text": "Isla", "correct": false },
            { "text": "Mapa", "correct": true },
            { "text": "Cielo", "correct": false }
        ]
    },
    {
        "question": "Lo ves una vez en un minuto, dos veces en un momento, pero nunca en mil años. ¿Qué es?",
        "answers": [
            { "text": "El sol", "correct": false },
            { "text": "La luna", "correct": false },
            { "text": "La letra M", "correct": true },
            { "text": "El tiempo", "correct": false }
        ]
    },
    {
        "question": "Cuanto más seco lo usas, más mojado se vuelve. ¿Qué es?",
        "answers": [
            { "text": "Silla", "correct": false },
            { "text": "Toalla", "correct": true },
            { "text": "Ropa", "correct": false },
            { "text": "Espejo", "correct": false }
        ]
    },
    {
        "question": "Siempre está en frente de ti, pero nunca lo puedes ver. ¿Qué es?",
        "answers": [
            { "text": "El viento", "correct": false },
            { "text": "El futuro", "correct": true },
            { "text": "El sol", "correct": false },
            { "text": "La luna", "correct": false }
        ]
    },
    {
        "question": "Puede ser largo o corto; puede ser negro o blanco; puede ser dado, pero no tomado. ¿Qué es?",
        "answers": [
            { "text": "El cabello", "correct": false },
            { "text": "El camino", "correct": false },
            { "text": "El tiempo", "correct": true },
            { "text": "La luz", "correct": false }
        ]
    },
    {
        "question": "Cuanto más avanza, más grande se vuelve, pero nunca se mueve. ¿Qué es?",
        "answers": [
            { "text": "La sombra", "correct": false },
            { "text": "La carretera", "correct": false },
            { "text": "La edad", "correct": true },
            { "text": "La luz", "correct": false }
        ]
    },
    {
        "question": "Cuanto más de esto tienes, menos ves. ¿Qué es?",
        "answers": [
            { "text": "Sombras", "correct": false },
            { "text": "Niebla", "correct": true },
            { "text": "Luz", "correct": false },
            { "text": "Oscuridad", "correct": false }
        ]
    },
    {
        "question": "Soy más grande que un elefante, pero mi cuerpo es invisible. ¿Qué soy?",
        "answers": [
            { "text": "La sombra", "correct": false },
            { "text": "El sol", "correct": false },
            { "text": "La atmósfera", "correct": true },
            { "text": "El cielo", "correct": false }
        ]
    },
    {
        "question": "Se rompe sin que se toque. ¿Qué es?",
        "answers": [
            { "text": "El aire", "correct": false },
            { "text": "El corazón", "correct": true },
            { "text": "Un vidrio", "correct": false },
            { "text": "El hielo", "correct": false }
        ]
    },
    {
        "question": "Tiene agujas, pero no pincha. ¿Qué es?",
        "answers": [
            { "text": "Aguijón", "correct": false },
            { "text": "Reloj", "correct": true },
            { "text": "Cactus", "correct": false },
            { "text": "Silla", "correct": false }
        ]
    },
    {
        "question": "Lo encuentras en un lugar oscuro, pero nunca lo ves. ¿Qué es?",
        "answers": [
            { "text": "La sombra", "correct": false },
            { "text": "El aire", "correct": false },
            { "text": "El sonido", "correct": true },
            { "text": "La luz", "correct": false }
        ]
    },
    {
        "question": "Cuanto más se quita, más grande se vuelve. ¿Qué es?",
        "answers": [
            { "text": "La nube", "correct": false },
            { "text": "La luz", "correct": false },
            { "text": "Un hoyo", "correct": true },
            { "text": "La arena", "correct": false }
        ]
    },
    {
        "question": "Aunque no se mueve, da vuelta a todo lo que tocas. ¿Qué es?",
        "answers": [
            { "text": "El tiempo", "correct": false },
            { "text": "La tierra", "correct": true },
            { "text": "El viento", "correct": false },
            { "text": "El reloj", "correct": false }
        ]
    },
    {
        "question": "Todo el mundo lo puede escuchar, pero no todos lo pueden oír. ¿Qué es?",
        "answers": [
            { "text": "La música", "correct": false },
            { "text": "El silencio", "correct": true },
            { "text": "La risa", "correct": false },
            { "text": "El viento", "correct": false }
        ]
    },
    {
        "question": "A medida que me llenas, más pequeño me hago. ¿Qué soy?",
        "answers": [
            { "text": "Un globo", "correct": false },
            { "text": "Una caja", "correct": false },
            { "text": "Un agujero", "correct": true },
            { "text": "Un vaso", "correct": false }
        ]
    },
    {
        "question": "Se puede romper, pero no se puede tocar. ¿Qué es?",
        "answers": [
            { "text": "El aire", "correct": false },
            { "text": "El cristal", "correct": false },
            { "text": "El corazón", "correct": true },
            { "text": "El hielo", "correct": false }
        ]
    }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    level = 6;
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