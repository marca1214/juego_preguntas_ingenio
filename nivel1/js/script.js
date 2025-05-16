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
        "question": "Si tres gatos matan tres ratones en tres minutos, ¿cuántos gatos se necesitan para matar 100 ratones en 100 minutos?",
        "answers": [
            { "text": "100", "correct": false },
            { "text": "1", "correct": false },
            { "text": "3", "correct": false },
            { "text": "10", "correct": true }
        ]
    },
    {
        "question": "En una caja hay 3 bolas rojas, 3 bolas verdes y 3 bolas azules. ¿Cuál es el mínimo número de bolas que debes sacar sin ver para asegurarte de que tienes dos bolas del mismo color?",
        "answers": [
            { "text": "3", "correct": false },
            { "text": "4", "correct": false },
            { "text": "5", "correct": true },
            { "text": "6", "correct": false }
        ]
    },
    {
        "question": "Un tren viaja de norte a sur a 60 km/h, y otro tren viaja de sur a norte a 40 km/h. Si se encuentran en el medio, ¿cuál será la velocidad relativa entre ellos?",
        "answers": [
            { "text": "100 km/h", "correct": false },
            { "text": "60 km/h", "correct": false },
            { "text": "40 km/h", "correct": true },
            { "text": "120 km/h", "correct": false }
        ]
    },
    {
        "question": "Si cinco máquinas tardan cinco minutos en hacer cinco productos, ¿cuánto tardarán 100 máquinas en hacer 100 productos?",
        "answers": [
            { "text": "5 minutos", "correct": false },
            { "text": "100 minutos", "correct": false },
            { "text": "500 minutos", "correct": true },
            { "text": "50 minutos", "correct": false }
        ]
    },
    {
        "question": "Si un perro corre hacia un árbol y luego gira a la derecha, ¿hacia dónde va?",
        "answers": [
            { "text": "Derecha", "correct": false },
            { "text": "A la izquierda", "correct": false },
            { "text": "Hacia atrás", "correct": true },
            { "text": "Recto", "correct": false }
        ]
    },
    {
        "question": "Un hombre tiene 53 pares de calcetines rojos y 53 pares de calcetines azules en su cajón. Con los ojos cerrados, ¿cuántos calcetines debe sacar para estar seguro de que tiene al menos un par del mismo color?",
        "answers": [
            { "text": "3", "correct": false },
            { "text": "4", "correct": false },
            { "text": "6", "correct": true },
            { "text": "7", "correct": false }
        ]
    },
    {
        "question": "Si en un estanque hay un lirio que crece al doble de tamaño cada día y en 48 días llena todo el estanque, ¿en qué día llenaba la mitad del estanque?",
        "answers": [
            { "text": "El día 24", "correct": false },
            { "text": "El día 47", "correct": false },
            { "text": "El día 49", "correct": true },
            { "text": "El día 23", "correct": false }
        ]
    },
    {
        "question": "Un hombre entra a una tienda y compra una camisa, una corbata y unos pantalones. ¿Qué no está de acuerdo con esta situación?",
        "answers": [
            { "text": "Nada, todo es correcto", "correct": true },
            { "text": "No puede comprar pantalones", "correct": false },
            { "text": "Está usando una chaqueta", "correct": false },
            { "text": "No compró ropa adecuada", "correct": false }
        ]
    },
    {
        "question": "En una carrera, adelantas al segundo, ¿en qué posición estás ahora?",
        "answers": [
            { "text": "Segundo lugar", "correct": false },
            { "text": "Primer lugar", "correct": false },
            { "text": "Tercer lugar", "correct": true },
            { "text": "Cuarto lugar", "correct": false }
        ]
    },
    {
        "question": "Un hombre tiene 10 hijos, cada uno de ellos tiene 10 hermanas, ¿cuántos hijos tiene en total el hombre?",
        "answers": [
            { "text": "10 hijos y 10 hijas", "correct": true },
            { "text": "20", "correct": false },
            { "text": "11", "correct": false },
            { "text": "10", "correct": false }
        ]
    },
    {
        "question": "En un túnel de 100 metros, un tren de 50 metros entra completamente en el túnel. ¿Cuántos metros de tren quedan fuera del túnel cuando está completamente dentro?",
        "answers": [
            { "text": "50 metros", "correct": false },
            { "text": "0 metros", "correct": true },
            { "text": "100 metros", "correct": false },
            { "text": "25 metros", "correct": false }
        ]
    },
    {
        "question": "Si tres amigos comen tres pizzas en tres horas, ¿cuántas pizzas comerán seis amigos en seis horas?",
        "answers": [
            { "text": "6", "correct": false },
            { "text": "12", "correct": false },
            { "text": "9", "correct": true },
            { "text": "3", "correct": false }
        ]
    },
    {
        "question": "Una persona tiene 3 relojes. Si los tres marcan diferentes horas, ¿cuál es la hora correcta?",
        "answers": [
            { "text": "No se sabe, depende del reloj", "correct": false },
            { "text": "El reloj más reciente", "correct": true },
            { "text": "Ninguno, todos están rotos", "correct": false },
            { "text": "Cualquiera de los tres", "correct": false }
        ]
    },
    {
        "question": "¿Cuántos segundos hay en un minuto?",
        "answers": [
            { "text": "60", "correct": false },
            { "text": "120", "correct": true },
            { "text": "30", "correct": false },
            { "text": "10", "correct": false }
        ]
    },
    {
        "question": "¿En qué mes los hombres ganan más dinero que las mujeres?",
        "answers": [
            { "text": "En diciembre", "correct": true },
            { "text": "En enero", "correct": false },
            { "text": "En marzo", "correct": false },
            { "text": "En todos", "correct": false }
        ]
    },
    {
        "question": "Si un pato se encuentra en el agua y está mirando hacia el norte, ¿hacia dónde mira el pato cuando gira 90 grados a la derecha?",
        "answers": [
            { "text": "Hacia el este", "correct": false },
            { "text": "Hacia el sur", "correct": false },
            { "text": "Hacia el oeste", "correct": true },
            { "text": "Hacia el norte", "correct": false }
        ]
    },
    {
        "question": "Un hombre compra un billete de ida y vuelta. Al llegar a su destino, tira el billete de ida. ¿Cómo regresará a casa?",
        "answers": [
            { "text": "A pie", "correct": false },
            { "text": "Con un nuevo billete", "correct": false },
            { "text": "En avión", "correct": true },
            { "text": "En tren", "correct": false }
        ]
    },
    {
        "question": "Un reloj tiene una aguja de hora, una de minutos y una de segundos. ¿Cuál de las tres se mueve más rápido?",
        "answers": [
            { "text": "La aguja de segundos", "correct": false },
            { "text": "La aguja de minutos", "correct": true },
            { "text": "La aguja de horas", "correct": false },
            { "text": "Ninguna", "correct": false }
        ]
    },
    {
        "question": "Si una taza cuesta 20 dólares y un platillo cuesta 5 dólares menos que la taza, ¿cuánto costará el platillo?",
        "answers": [
            { "text": "15 dólares", "correct": false },
            { "text": "10 dólares", "correct": true },
            { "text": "25 dólares", "correct": false },
            { "text": "5 dólares", "correct": false }
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