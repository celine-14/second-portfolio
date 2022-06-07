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
        a: "Sea Shanties",
        b: "Oratorio",
        c: "Freestyle",
        d: "Gregorian Chant",
        answer: "d"
    }],
    baroque: [{
        text: "Which Baroque musician was the first conductor to die from a baton?",
        a: "George Frideric Handel",
        b: "Johann Sebastian Bach",
        c: "Jean-Baptiste Lully",
        d: "Walter White",
        answer: "c",
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
        a: "Vivaldi",
        b: "Paganini",
        c: "Fettuccine",
        d: "Salieri",
        answer: "b"
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
            } else {
                let gameType = this.getAttribute("data-type");
                showQuestion(gameType);
                delete questions[gameType]; //delete attempted questions

                // selected category colours
                if (gameType = button.getAttribute("id")) {
                    this.style.background = "grey"
                }
            }
        })
    }
});


let question;

function showQuestion(gameType) {

    question = questions[gameType][0]

    document.getElementById("question-area").textContent = question.text;
    document.getElementById("a").textContent = question.a;
    document.getElementById("b").textContent = question.b;
    document.getElementById("c").textContent = question.c;
    document.getElementById("d").textContent = question.d;

}

function newQuestion() {
    
    document.getElementById("question-area").textContent = "Choose a time period to start";
    document.getElementById("a").style.display = "none";
    document.getElementById("b").style.display = "none";
    document.getElementById("c").style.display = "none";
    document.getElementById("d").style.display = "none";

}

function checkAnswer(option) {
    if (option === question.answer) {
        alert("You got it right! Select a new category to continue playing.");
        incrementScore();
        newQuestion();
    } else {
        alert(`Awww... you answered ${question[option]}. The correct answer was ${question[question.answer]}. Select a new category to continue playing!`);
        incrementWrongAnswer();
        newQuestion();
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

