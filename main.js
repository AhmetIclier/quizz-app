"use strict";

let questions = [
    {
        "question" : "Wer hat HTML erfunden?",
        "answer1" : "Robbie Williams",
        "answer2" : "Lady Gaga",
        "answer3" : "Tim Berners-Lee",
        "answer4" : "Justin Bieber",
        "right_answer" : 3
    },
    {
        "question" : "Wie deklariere ich eine Variable am besten seit ES6?",
        "answer1" : "var meineVariable = 'Wert'",
        "answer2" : "let meineVariable = 'Wert'",
        "answer3" : "const meineVariable = 'Wert'",
        "answer4" : "int meine Variable = 'Wert'",
        "right_answer" : 2
    },
    {
        "question" : "Wie definiere ich eine Hintergrund-Farbe (gelb) in CSS?",
        "answer1" : "color : yellow;",
        "answer2" : "color-for-background : yellow;",
        "answer3" : "bg-color : yellow;",
        "answer4" : "background-color : yellow",
        "right_answer" : 4
    },
    {
        "question" : "Von welchem Tech-Giganten ist Bootstrap?",
        "answer1" : "Google",
        "answer2" : "Netflix",
        "answer3" : "Twitter",
        "answer4" : "Apple",
        "right_answer" : 3
    },
    {
        "question" : "Was ist aktuell die beliebteste Programmiersprache? (Stand 2022)",
        "answer1" : "Javascript",
        "answer2" : "Python",
        "answer3" : "Typescript",
        "answer4" : "Java",
        "right_answer" : 1
    }
]

let currentQuestion = 0;
let rightAnswers = 0;

function init() {
    document.getElementById('question-amount').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    if (currentQuestion == questions.length) {
        endScreen();
    } else {
        document.getElementById('question-text').innerHTML = question['question'];
        for (let i = 1; i<=4; i++) {
        document.getElementById(`answer_${i}`).innerHTML = question[`answer${i}`];
        }
    }    
    progressBar();
}
function endScreen() {
    document.getElementById('quiz-content').innerHTML = `
    <h2 class="d-flex justify-content-center">Geschafft!</h2>
    <div class="result">
        <p>Du hast <b>${rightAnswers} von ${questions.length}</b> Fragen richtig beantwortet.</p>
    </div>
    `;
    document.getElementById('header-img').src = "./img/success.jpg";
}

function progressBar(){
    let percent = Math.round(currentQuestion/questions.length*100);
    console.log(percent);
    document.getElementById('proBar').style = `width: ${percent}%`;
    document.getElementById('proBar').innerHTML = `${percent}%`;
}

function logAnswer(answer) {
    let question = questions[currentQuestion];
    let selectedQuestionID = answer.slice(-1);
    let idOfRightAnswer = question['right_answer']
    if(selectedQuestionID == question['right_answer']) {
        document.getElementById(answer).parentNode.classList.add('bg-success');
        rightAnswers++;
    }else {
        document.getElementById(answer).parentNode.classList.add('bg-danger');
        document.getElementById(`answer_${idOfRightAnswer}`).parentNode.classList.add('bg-success');
    }
    enableButton()
}

function enableButton() {
    document.getElementById('next-btn').removeAttribute('disabled');
}

function nextQuestion(){
    currentQuestion++;
    resetQuestions();
    showQuestion();
}

function resetQuestions() {
    document.getElementById('next-btn').disabled = true;
    for (let i = 1; i<=4; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
    }
    document.getElementById('current-question').innerHTML = currentQuestion+1;
}