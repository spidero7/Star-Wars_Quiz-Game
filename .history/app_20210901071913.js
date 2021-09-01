const startButton = document.querySelector('#start-btn')
const nextButton = document.querySelector('#next-btn')
const questionContainer = document.querySelector('#question-container')
const questionElement = document.querySelector('#question')
const answerButtons = document.querySelector('#answer-buttons')

let shuffledQuestions, currentIndexNumber

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentIndexNumber++
    setQuestion()
})

//Starting the Quiz
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random - .5)
    currentIndexNumber = 0
    questionContainer.classList.remove('hide')
    setQuestion()
}

//Setting new question
function setQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentIndexNumber])
}

//Creating button with text from answers
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

//Removing unnecessary buttons
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

//Selecting a button (answer) and checking how many questions left
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentIndexNumber + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

//Adding classes wrong or correct to element (body and button)
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

//Removing classes correcr and wrong from elements
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//Array of questions and answers used in Quiz
const questions = [
    {
        question: 'In The Force Awakens, which character has Darth Vader’s damaged mask?',
        answer: [
            { text: 'Finn', correct: false},
            { text: 'Rey', correct: false},
            { text: 'Kylo Ren', correct: true},
            { text: 'Luke Skywalker', correct: false}
        ]
    },
    {
        question: 'How did Princess Leia get her title of royalty?',
        answer: [
            { text: 'She is the adopted daughter of Bail Organa and Queen Breha', correct: true },
            { text: 'Her sharp aim with a blaster', correct: false },
            { text: 'A mocking nickname from Han Solo', correct: false },
            { text: 'She is the daughter of Queen Katrina of the Geonosians', correct: false }
        ]
    },
    {
        question: 'While the Jedi use a number of crystal colors for their lightsabers, what color is preferred by the Sith?',
        answer: [
            { text: 'Purple', correct: false},
            { text: 'Blue', correct: false},
            { text: 'Red', correct: true},
            { text: 'Green', correct: false}
        ]
    },
    {
        question: 'Who destroyed the Droid Control Ship when they accidentally activated a Naboo Fighter’s Autopilot?',
        answer: [
            { text: 'Biggs Darklighter', correct: false},
            { text: 'Anakin Skywalker', correct: true},
            { text: 'Obi Wan Kenobi', correct: false},
            { text: 'Jar Jar Binks', correct: false}
        ]
    },
    {
        question: 'Where does Yoda live when he first trains Luke Skywalker?',
        answer: [
            { text: 'Purple', correct: false},
            { text: 'Blue', correct: false},
            { text: 'Red', correct: true},
            { text: 'Green', correct: false}
        ]
    },
    {
        question: 'While the Jedi use a number of crystal colors for their lightsabers, what color is preferred by the Sith?',
        answer: [
            { text: 'Purple', correct: false},
            { text: 'Blue', correct: false},
            { text: 'Red', correct: true},
            { text: 'Green', correct: false}
        ]
    },
    {
        question: 'While the Jedi use a number of crystal colors for their lightsabers, what color is preferred by the Sith?',
        answer: [
            { text: 'Purple', correct: false},
            { text: 'Blue', correct: false},
            { text: 'Red', correct: true},
            { text: 'Green', correct: false}
        ]
    },
    {
        question: 'While the Jedi use a number of crystal colors for their lightsabers, what color is preferred by the Sith?',
        answer: [
            { text: 'Purple', correct: false},
            { text: 'Blue', correct: false},
            { text: 'Red', correct: true},
            { text: 'Green', correct: false}
        ]
    },
    {
        question: 'While the Jedi use a number of crystal colors for their lightsabers, what color is preferred by the Sith?',
        answer: [
            { text: 'Purple', correct: false},
            { text: 'Blue', correct: false},
            { text: 'Red', correct: true},
            { text: 'Green', correct: false}
        ]
    },
    {
        question: 'While the Jedi use a number of crystal colors for their lightsabers, what color is preferred by the Sith?',
        answer: [
            { text: 'Purple', correct: false},
            { text: 'Blue', correct: false},
            { text: 'Red', correct: true},
            { text: 'Green', correct: false}
        ]
    }

]

