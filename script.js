
const questions = [
    {
        question: "CSS stannds for",
        answers: [
            { text: "Correct data sheet", correct: false},
            { text: "Conditional Style sheet", correct: false},
            { text: "Cascading Style Sheet", correct: true},
            { text: "Capturing Style sheet", correct: false}
        ]
    },
    {
        question: "What technology used for creating structure of webpage",
        answers: [
            { text: "Java", correct: false},
            { text: "Python", correct: false},
            { text: "JS", correct: false},
            { text: "HTML", correct: true}
        ]
    },
    {
        question: "Web Technology for style your web page",
        answers: [
            { text: "CSS", correct: true},
            { text: "HTML", correct: false},
            { text: "XML", correct: false},
            { text: "JSON", correct: false}
        ]
    },
    {
        question: "What is React Js",
        answers: [
            { text: "Webpage", correct: false},
            { text: "Programming Language", correct: false},
            { text: "Framework", correct: false},
            { text: "Javascript Library", correct: true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn")


console.log(questionElement, answerButtons, nextButton);

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    //to RESET the previousQuestion and answer------------>
    resetState();
    //To Display the QUESTION----------------------------->
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". " +currentQuestion.question

    // To Display the ANSWERS in BUTTONS------------------>
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}
function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}! `;
    nextButton.innerHTML = "Play again"
    nextButton.style.display = "block"
    
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }
    else{
        startQuiz();
    }
})

startQuiz();


