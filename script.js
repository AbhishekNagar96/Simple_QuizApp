const quizData = [
    {
        question: "What is the full form of DBMS?",
        a: "Database Management System",
        b: "Database Modifying System",
        c: "Data Modifying System",
        d: "Data Modelling System",
        correct: "a",
    },
    {
        question: "What is an example of a hierarchial data structure?",
        a: "Arrays",
        b: "Linked Lists",
        c: "Binary Trees",
        d: "Stacks",
        correct: "c",
    },
    {
        question: "Who developed c++?",
        a: "Guido van Rossum",
        b: "Bjarne Stroustrup",
        c: "James Gosling",
        d: "Dennis Ritchie",
        correct: "b",
    },
    {
         question: "Which is generally used for performing tasks like creating, deleting relation?",
         a:	"DML(Data Manipulation Language)",
         b:	"Query",
         c: "Relational Schema",
         d:	"DDL(Data Definition Language)",
         answer: "d"

        
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
