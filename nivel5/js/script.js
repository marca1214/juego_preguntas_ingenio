const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const feedbackDisplay = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;
let level = 5;

// Array de preguntas (¡Necesitarás más de 100!)
const questions = [
  {
    "question": "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.",
    "description": "Es verdura y refrescante, en ensaladas es constante.",
    "answers": [
      { "text": "Pepino", "correct": true },
      { "text": "Manzana", "correct": false },
      { "text": "Pera", "correct": false },
      { "text": "Melón", "correct": false }
    ]
  },
  {
    "question": "Oro parece, plata no es. Quien no lo adivine, bien tonto es.",
    "description": "Pequeño, redondo y dulce, lo comes con los dedos.",
    "answers": [
      { "text": "Plátano", "correct": true },
      { "text": "Moneda", "correct": false },
      { "text": "Huevo", "correct": false },
      { "text": "Limón", "correct": false }
    ]
  },
  {
    "question": "Agua pasa por mi casa, cate de mi corazón.",
    "description": "Fruta tropical con semilla central y pulpa dulce.",
    "answers": [
      { "text": "Aguacate", "correct": true },
      { "text": "Tomate", "correct": false },
      { "text": "Sandía", "correct": false },
      { "text": "Papaya", "correct": false }
    ]
  },
  {
    "question": "Cuatro patas tiene, cama no es. Ladra y no es león.",
    "description": "Es el mejor amigo del ser humano.",
    "answers": [
      { "text": "Perro", "correct": true },
      { "text": "Gato", "correct": false },
      { "text": "Lobo", "correct": false },
      { "text": "Zorro", "correct": false }
    ]
  },
  {
    "question": "Blanca es, la gallina la pone, con aceite se fríe y con pan se come.",
    "description": "Uno de los desayunos más comunes.",
    "answers": [
      { "text": "Huevo", "correct": true },
      { "text": "Arepa", "correct": false },
      { "text": "Pan", "correct": false },
      { "text": "Queso", "correct": false }
    ]
  },
  {
    "question": "Alta como un pino, pesa menos que un comino.",
    "description": "Va por los cielos, pero no tiene alas.",
    "answers": [
      { "text": "Humo", "correct": true },
      { "text": "Nube", "correct": false },
      { "text": "Ave", "correct": false },
      { "text": "Árbol", "correct": false }
    ]
  },
  {
    "question": "Tiene agujas pero no pincha, y da la hora sin chistar.",
    "description": "Lo ves en la muñeca, la cocina o la pared.",
    "answers": [
      { "text": "Reloj", "correct": true },
      { "text": "Erizo", "correct": false },
      { "text": "Pino", "correct": false },
      { "text": "Cactus", "correct": false }
    ]
  },
  {
    "question": "Tiene dientes y no come, tiene cabeza y no es persona.",
    "description": "Lo usas todas las mañanas para arreglar tu cabello.",
    "answers": [
      { "text": "Peine", "correct": true },
      { "text": "Cepillo de dientes", "correct": false },
      { "text": "Cuchillo", "correct": false },
      { "text": "Tenedor", "correct": false }
    ]
  },
  {
    "question": "Cae al suelo y no se rompe, vuela por el cielo sin tener alas.",
    "description": "Es parte del ciclo del agua, suave como un beso de nube.",
    "answers": [
      { "text": "Lluvia", "correct": true },
      { "text": "Papel", "correct": false },
      { "text": "Hielo", "correct": false },
      { "text": "Rocío", "correct": false }
    ]
  },
  {
    "question": "Lleno de agujeros y aún así puede contener agua.",
    "description": "Lo usas para limpiar, y absorbe como magia.",
    "answers": [
      { "text": "Esponja", "correct": true },
      { "text": "Colador", "correct": false },
      { "text": "Taza", "correct": false },
      { "text": "Jarra", "correct": false }
    ]
  },
  {
    "question": "Sube blanca, baja mojada, si no te apuras, te deja calada.",
    "description": "Te protege cuando cae del cielo.",
    "answers": [
      { "text": "Paraguas", "correct": true },
      { "text": "Sombrero", "correct": false },
      { "text": "Capucha", "correct": false },
      { "text": "Impermeable", "correct": false }
    ]
  },
  {
    "question": "Tiene hojas, pero no es árbol; guarda letras, pero no habla.",
    "description": "Lo abres y aprendes. Te acompaña en clases.",
    "answers": [
      { "text": "Libro", "correct": true },
      { "text": "Cuaderno", "correct": false },
      { "text": "Agenda", "correct": false },
      { "text": "Revista", "correct": false }
    ]
  },
  {
    "question": "Soy redondo como el mundo, salto sin parar, y en el recreo me vas a buscar.",
    "description": "El mejor amigo del recreo y los goles.",
    "answers": [
      { "text": "Pelota", "correct": true },
      { "text": "Rueda", "correct": false },
      { "text": "Aro", "correct": false },
      { "text": "Globo", "correct": false }
    ]
  },
  {
    "question": "Mientras más grande, menos ves.",
    "description": "Puede cubrir el cielo y esconder el sol.",
    "answers": [
      { "text": "Oscuridad", "correct": true },
      { "text": "Niebla", "correct": false },
      { "text": "Nube", "correct": false },
      { "text": "Sombras", "correct": false }
    ]
  },
  {
    "question": "Aunque no tengo boca, hablo sin parar; me enchufas y listo, te puedo cantar.",
    "description": "Te pone música, noticias o la novela del día.",
    "answers": [
      { "text": "Radio", "correct": true },
      { "text": "TV", "correct": false },
      { "text": "Reproductor", "correct": false },
      { "text": "Teléfono", "correct": false }
    ]
  },
  {
    "question": "Soy dulce y redonda, roja como el amor; me cuelgo del árbol con mucho sabor.",
    "description": "Me comes en verano, y dicen que una al día es buena para el corazón.",
    "answers": [
      { "text": "Manzana", "correct": true },
      { "text": "Tomate", "correct": false },
      { "text": "Fresa", "correct": false },
      { "text": "Cereza", "correct": false }
    ]
  },
  {
    "question": "Vuelo sin alas, lloro sin ojos.",
    "description": "A veces suave, a veces huracanado.",
    "answers": [
      { "text": "Viento", "correct": true },
      { "text": "Ave", "correct": false },
      { "text": "Fantasma", "correct": false },
      { "text": "Nube", "correct": false }
    ]
  },
  {
    "question": "Tiene cola y no es ratón, dice miau y duerme un montón.",
    "description": "Un animal casero, juguetón y dormilón.",
    "answers": [
      { "text": "Gato", "correct": true },
      { "text": "Ratón", "correct": false },
      { "text": "Conejo", "correct": false },
      { "text": "Zorro", "correct": false }
    ]
  },
  {
    "question": "Aunque no soy estrella, brillo en la noche y vigilo sin parar.",
    "description": "Me ves en el cielo y cambio de forma cada mes.",
    "answers": [
      { "text": "Luna", "correct": true },
      { "text": "Sol", "correct": false },
      { "text": "Cometa", "correct": false },
      { "text": "Planeta", "correct": false }
    ]
  },
  {
    "question": "Todos lo llevan, todos lo tienen, porque sin él no se entretienen.",
    "description": "Lo usamos a diario, ¡hasta para hablar contigo!",
    "answers": [
      { "text": "Teléfono", "correct": true },
      { "text": "Computadora", "correct": false },
      { "text": "Libro", "correct": false },
      { "text": "Reloj", "correct": false }
    ]
  }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    level = 5;
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