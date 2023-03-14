const form = document.querySelector("form")
const cardsSection = document.querySelector(".cars-section")
const button = document.querySelector("button")
const questionInput = document.querySelector("#question")
const answerInput = document.querySelector("#answer")
flashCards = [];


form.addEventListener("submit", function(event){
    event.preventDefault();
})

button.addEventListener("click", function(){
    const questionText = questionInput.value;
    const answerText = answerInput.value;
    form.reset();
    const fleshcard = {
        question: questionText,
        answer: answerText
    };
    flashCards.push(fleshcard);
    console.log(flashCards)
});
function updateFleshCards(){
    
}