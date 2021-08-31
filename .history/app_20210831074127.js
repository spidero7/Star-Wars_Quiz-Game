const startButton = document.querySelector('#start-btn')
const nextButton = document.querySelector
const questionContainer = document.querySelector('#question-container')
const questionElement = document.querySelector('#question')
const answerButtons = document.querySelector('#answer-buttons')

let shuffledQuestions, currentIndexNumber

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random - .5)
    currentIndexNumber = 0
    questionContainer.classList.remove('hide')
    setQuestion()
}

function setQuestion() {
    showQuestion(shuffledQuestions[currentIndexNumber])
}

function showQuestion(question) {
    questionElement.innerHTML = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}

function resetState() {

}

function selectAnswer() {

}


const questions = [
    {
        question: 'In The Force Awakens, which character has Darth Vader’s damaged mask?',
        answer: [
            { text: 'Finn', correct: false},
            { text: 'Rey', correct: false},
            { text: 'Kylo Ren', correct: true},
            { text: 'Luke Skywalker', correct: false}
        ]
    }
]