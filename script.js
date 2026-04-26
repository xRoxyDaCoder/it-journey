// ===========================
// LEVEL 1 QUESTIONS
// ===========================
const level1Questions = [{
        question: "What is the alpha version of a wolf?",
        answers: ["Alpha WereWolf", "WereWolf", "Wolf(2)"],
        correct: "Alpha WereWolf"
    },
    {
        question: "What is the most important ORGAN IN THE HUMAN BODY?",
        answers: ["Pancreas", "Heart", "Liver"],
        correct: "Heart"
    },
    {
        question: "What is 6 + 7?",
        answers: ["13", "42", "67"],
        correct: "13"
    },
    {
        question: "Whats the most useful planet in the solar system for humans according to temperature?",
        answers: ["Earth", "works by how it functions together", "Neptune", "Venus"],
        correct: "works by how it functions together"
    },
    {
        question: "What is 6 + 7 in brainrot?",
        answers: ["six seven", "13", "42"],
        correct: "six seven"
    },
    {
        question: "Which of the following isnt a brainrot?",
        answers: ["🤚67🖐️", "Expentanous Expidicious🔍", "🦈Tralalero Tralala👟", "🕊️RIP my granny🌹", "🏏Tung Tung Tung Sahur🏏"],
        correct: "Expentanous Expidicious🔍"
    },
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the red planet?",
        answers: ["Venus", "Earth", "Mars", "Jupiter"],
        correct: "Mars" // ✅ FIXED
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Indian Ocean", "Antartic Ocean", "Pacific Ocean"],
        correct: "Pacific Ocean"
    },
    {
        question: "What is H2O commonly known as?",
        answers: ["Carbon Dioxide", "Water", "Oxygen", "Hydrogen", "Salt"],
        correct: "Water"
    }
];

// ===========================
// LEVEL 2 QUESTIONS
// ===========================
const level2Questions = [{
        question: "Who wrote Romeo and Juliet?",
        answers: ["Charles Dickens", "Mark Twain", "Jane Austen", "William Shakespeare", "Leo Tolstoy"],
        correct: "William Shakespeare"
    },
    {
        question: ""
    }
];

// ===========================
// LEVEL 3 QUESTIONS (NEW)
// ===========================
const level3Questions = [{

}];

// ===========================
// GLOBAL VARIABLES
// ===========================
let currentQuestions = [];
let index = 0;

// ===========================
// DOM ELEMENTS
// ===========================
const levelSelection = document.getElementById("level-selection");
const quizContainer = document.getElementById("quiz-container");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const next = document.getElementById("next-btn");
const prev = document.getElementById("prev-btn");
const levelLabel = document.getElementById("level");
const questionNumber = document.getElementById("question-number");
const confettiContainer = document.getElementById("confetti-container");

// ===========================
// LEVEL BUTTONS (UPDATED)
// ===========================
document.querySelectorAll(".level-btn").forEach(btn => {
    btn.onclick = () => {
        const levelNum = btn.dataset.level;
        startLevel(levelNum);
    };
});

// ===========================
// START LEVEL (UPDATED)
// ===========================
function startLevel(levelNum) {

    if (levelNum == "1") {
        currentQuestions = level1Questions;
    } else if (levelNum == "2") {
        currentQuestions = level2Questions;
    } else if (levelNum == "3") {
        currentQuestions = level_Questions;
    }

    index = 0;

    levelSelection.style.display = "none";
    quizContainer.style.display = "block";

    showQuestion(levelNum);
}

// ===========================
// SHOW QUESTION
// ===========================
function showQuestion(levelNum) {
    const q = currentQuestions[index];

    levelLabel.innerText = "Level " + levelNum;
    questionNumber.innerText = "Question " + (index + 1);

    question.innerText = q.question;

    answers.innerHTML = "";

    q.answers.forEach(a => {
        let btn = document.createElement("button");
        btn.innerText = a;

        btn.onclick = () => {
            if (a === q.correct) {
                btn.classList.add("correct");
                showCheer();
            } else {
                btn.classList.add("wrong");
                shakeButton(btn);
            }

            setTimeout(() => {
                btn.classList.remove("correct", "wrong");
            }, 800);
        };

        answers.appendChild(btn);
    });

    updateButtons();
}

// ===========================
// NEXT BUTTON (UPDATED)
// ===========================
next.onclick = () => {
    if (index < currentQuestions.length - 1) {
        index++;
        showQuestion(levelLabel.innerText.replace("Level ", ""));
    } else {
        alert("You finished " + levelLabel.innerText + "!");
    }
};

// ===========================
// PREVIOUS BUTTON
// ===========================
prev.onclick = () => {
    if (index > 0) {
        index--;
        showQuestion(levelLabel.innerText.replace("Level ", ""));
    }
};

// ===========================
// ENABLE / DISABLE NEXT & PREV
// ===========================
function updateButtons() {
    prev.disabled = index === 0;
    next.disabled = index === currentQuestions.length - 1;
}

// ===========================
// CHEER ANIMATION FOR CORRECT ANSWER
// ===========================
function showCheer() {
    const cheer = document.createElement("div");
    cheer.className = "cheer";
    cheer.innerText = "!CORRECT! ✅🎉",
        "!EXCELLENT! ✅🎉",
        "!AMAZING!✅🎉",
        "!INCREDIBLE!✅🎉",
        "!STUNNING!✅🎉";

    confettiContainer.appendChild(cheer);

    setTimeout(() => {
        cheer.remove();
    }, 1500);
}

// ===========================
// SHAKE ANIMATION FOR WRONG ANSWER
// ===========================
function shakeButton(btn) {
    btn.classList.add("shake");
    setTimeout(() => {
        btn.classList.remove("shake");
    }, 10000);
}