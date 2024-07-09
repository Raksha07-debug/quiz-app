const questions = [{
    question: "which one is the language for frontend ",
    answer: [
        { text: "html", correct: true },
        { text: "css", correct: false },
        { text: "java", correct: false },
        { text: "ruby", correct: false }
    ]
}, {
    question: "which one is the language for frontend ",
    answer: [
        { text: "html", correct: true },
        { text: "css", correct: false },
        { text: "java", correct: false },
        { text: "ruby", correct: false }
    ]
}, {
    question: "which one is the language for frontend ",
    answer: [
        { text: "html", correct: true },
        { text: "css", correct: false },
        { text: "java", correct: false },
        { text: "ruby", correct: false }
    ]
}, {
    question: "which one is the language for frontend ",
    answer: [
        { text: "html", correct: true },
        { text: "css", correct: false },
        { text: "java", correct: false },
        { text: "ruby", correct: false }
    ]
}]

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex;
let score;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    console.log("hiiii");
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button)

        if(answer.correct)
            {
                button.dataset.correct=answer.correct
            }

        button.addEventListener("click",selectAnswer)

    })

}
function resetState() {
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }

}
function selectAnswer()
{
    console.log(event);
    const selectedBtn=event.target;
    const isCorrect=selectedBtn.dataset.correct==="true"
    if(isCorrect)
        {
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }


Array.from(answerButton.children).forEach((button)=>{
    if(button.dataset.correct="true"){
        selectedBtn.classList.add("correct")
    }
    button.disabled=true;
})
nextButton.style.display="block"
nextButton.innerHTML="Next"
}


function showScore(){
    resetState()
    questionElement.innerHTML=`Your score is ${score}`
    nextButton.style.display="Play again"
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<question.length)
        {
            handleNextButton();

        }
        else{
            startQuiz();
        }
}
startQuiz()
