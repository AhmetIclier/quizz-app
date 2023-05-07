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

function init() {
    document.getElementById('question-amount').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question['question'];
    
    for (let i = 1; i<=4; i++) {
        document.getElementById(`answer-${i}`).innerHTML = question[`answer${i}`];
    }
}