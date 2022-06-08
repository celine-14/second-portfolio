/* Questions and Answers Data */

const questions = {
    medieval: [{
        text: "A type of musical instrument that is between a harp and a lyre.",
        answer: "a",
        a: "Psaltery",
        b: "Adufe",
        c: "Rebec",
        d: "Flageolet"
    }],
    renaissance: [{
        text: "A type of liturgical music of the Roman Catholic Church used to accompany the text of the mass and the canonical hours, or divine office.",
        answer: "d",
        a: "Sea Shanties",
        b: "Oratorio",
        c: "Freestyle",
        d: "Gregorian Chant"
    }],
    baroque: [{
        text: "Which Baroque musician was the first conductor to die from a baton?",
        answer: "c",
        a: "George Frideric Handel",
        b: "Johann Sebastian Bach",
        c: "Jean-Baptiste Lully",
        d: "Walter White"
    }],
    classical: [{
        text: "A musical term for when all the voices or instruments perform together.",
        answer: "a",
        a: "tutti",
        b: "alle",
        c: "everybody",
        d: "frutti"
    }, ],
    romantic: [{
        text: 'Which 19th-century composer and violinist was known as "The Devil\'s Violinist"?',
        answer: "b",
        a: "Vivaldi",
        b: "Paganini",
        c: "Fettuccine",
        d: "Salieri"
    }],
    twentieth: [{
        text: "Known for his orchestral compositions and his musicals, which composer died of a brain tumor at the age of 38?",
        answer: "a",
        a: "George Gershwin",
        b: "Ludwig van Beethoven",
        c: "Arnold Schwazernegger",
        d: "Dmitri Shostakovich"
    }]

};


// Wait for the DOM to finish downloading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "submit") {
                checkAnswer(this.getAttribute("id"));

            } else if (this.getAttribute("data-type") === "restart-button") {
                restartGame();
            }
            else {
                let gameType = this.getAttribute("data-type");
                showQuestion(gameType);

                delete questions[gameType]; // remove question from object data
                this.style.background = "grey"; // change button color
                this.style.display = "none"; // remove category
            }

        });
    }
});

let question;

function showQuestion(gameType) {

    question = questions[gameType][0];

    // Show button options and category display
    document.getElementById("category-display").style.display = "unset";
    document.getElementById("a").style.display = "unset";
    document.getElementById("b").style.display = "unset";
    document.getElementById("c").style.display = "unset";
    document.getElementById("d").style.display = "unset";

    document.getElementById("category-display").textContent = gameType;
    document.getElementById("question-area").textContent = question.text;
    document.getElementById("a").textContent = question.a;
    document.getElementById("b").textContent = question.b;
    document.getElementById("c").textContent = question.c;
    document.getElementById("d").textContent = question.d;

    disableButtons();
}

function newQuestion() {

    // Show original text and hide button options and category display
    document.getElementById("category-display").style.display = "none";
    document.getElementById("question-area").textContent = "Choose a time period to start";
    document.getElementById("a").style.display = "none";
    document.getElementById("b").style.display = "none";
    document.getElementById("c").style.display = "none";
    document.getElementById("d").style.display = "none";

}

/**
 * Disables category buttons after a category has been chosen.
 * User has to pick an option before continuing the game
 */
function disableButtons() {

    let disableAreas = document.getElementById("period-area").getElementsByTagName("button");
    for (let disableArea of disableAreas) {
        disableArea.disabled = true;
    }
}

/**
 * Enables category buttons after user has answered the question of a chosen category
 */
function enableButtons() {
    let disableAreas = document.getElementById("period-area").getElementsByTagName("button");
    for (let disableArea of disableAreas) {
        disableArea.disabled = false;
    }
}

function checkAnswer(option) {

    if (option === question.answer) {
        alert("You got it right!");
        incrementScore();
        newQuestion();
        enableButtons();
        gameOver();

    } else {
        alert(`Awww... you answered ${question[option]}. The correct answer was ${question[question.answer]}.`);
        incrementWrongAnswer();
        newQuestion();
        enableButtons();
        gameOver();
    }
}

function incrementScore() {
    let score = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++score;
}

function incrementWrongAnswer() {
    let incorrect = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++incorrect;
}

function gameOver() {
    let correctAnswers = parseInt(document.getElementById("score").innerText);
    let incorrectAnswers = parseInt(document.getElementById("incorrect").innerText);

    if (correctAnswers + incorrectAnswers === 6) {
        document.getElementById("question-area").textContent = `You got ${correctAnswers} out of 6 answers correct!`;
        document.getElementById("restart").style.display = "unset";
    }
}

function restartGame() {
    window.location.reload();
}

