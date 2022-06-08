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

            } else {
                let gameType = this.getAttribute("data-type");
                showQuestion(gameType);

                delete questions[gameType]; // remove question from object data
                this.style.background = "grey" // change button color
                this.style.display = "none" // remove category
                //document.getElementById("period-area").removeAttribute("disabled")

            }
        })
    }
});

let question;

function showQuestion(gameType) {

    question = questions[gameType][0]

    // Show button options
    document.getElementById("a").style.display = "unset";
    document.getElementById("b").style.display = "unset";
    document.getElementById("c").style.display = "unset";
    document.getElementById("d").style.display = "unset";

    document.getElementById("question-area").textContent = question.text;
    document.getElementById("a").textContent = question.a;
    document.getElementById("b").textContent = question.b;
    document.getElementById("c").textContent = question.c;
    document.getElementById("d").textContent = question.d;

}

function newQuestion() {

    // Show original text and hide button options 
    document.getElementById("question-area").textContent = "Choose a time period to start";
    document.getElementById("a").style.display = "none";
    document.getElementById("b").style.display = "none";
    document.getElementById("c").style.display = "none";
    document.getElementById("d").style.display = "none";

}

function checkAnswer(option) {

    // let myCategories = document.getElementsByClassName("btn-q");
    // let selectedCategory = myCategories.getAttribute("data-type"); //medieval

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