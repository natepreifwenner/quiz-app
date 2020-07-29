////////* Elements binded to a variable */
const timer = document.getElementById("timer-count");
const startBtn = document.getElementById("start-quiz");
const startContainer = document.getElementById("start-container");
const quizConatiner = document.getElementById("quiz-container");
///////

/* Counter variable to handle the timer */
let countdown = 60;

//////////* JSON object to store questions and their answers */
let questions = {
        "id": 1,
        "question": "Whats the only way to create a variable in plain JavaScript?",
        "answers": [
            { "id": 1, "text": "const", "flag": false },
            { "id": 2, "text": "let", "flag": false },
            { "id": 3, "text": "var", "flag": false },
            { "id": 4, "text": "All of the above", "flag": true },
        ]
    }
    //////////

//////////* Printing questions to the console */
function printQuestionsToConsole() {
    console.log(questions.id);
    console.log(questions.question);
    for (let y = 0; y < questions.answers.length; y++) {
        console.log(JSON.stringify(questions.answers[y]));
    }
}
///////////

//////////* Printing questions to the DOM */
function printQuestionsToDOM() {
    quizConatiner.setAttribute("data-state", "show");
    quizConatiner.setAttribute("style", "display:block;")
    document.getElementById("questions").innerHTML = `<h1>Question # ${questions.id}</h1><p>${questions.question}</p>`;
    for (let y = 0; y < questions.answers.length; y++) {
        let z = document.createElement("li");
        z.innerHTML = `<button id="${questions.answers[y].id}" class="btn-answers" data-flag="${questions.answers[y].flag}">${questions.answers[y].text}</button>`;
        document.getElementById("answers").append(z);
    }
}
///////////




///////// Start the countdown timer.
function startTimer() {
    let interval = setInterval(() => {
        countdown--;
        timer.textContent = `Your time left: ${countdown}`;
        if (countdown === 0) {
            clearInterval(interval);
            //finishTest()
            return;
        }
    }, 1000);
}
//////////

//////////hide the starting container
function hideStartingContainer() {
    startContainer.setAttribute("data-state", "hide");
    if (startContainer.getAttribute("data-state") === "hide") {
        startContainer.setAttribute("style", "display:none;");
    }
}
////////

///////// Start test by the button click
startBtn.addEventListener("click", (e) => {
    //call out start timer function
    startTimer();
    //hide the start container
    hideStartingContainer();
    //Present/show the questions
    printQuestionsToDOM();
});
/////////