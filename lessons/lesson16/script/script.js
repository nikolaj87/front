// const div = document.querySelector("div")
// console.log(div.classList) 
// div.classList.add("root")
// div.classList.add("box")
// div.classList.remove("box")
// div.classList.toggle("main")

//  const div = document.querySelector("div")
//  const button = document.querySelector("#addColor")
//  const button2 = document.querySelector("#removeColor")

//  button.addEventListener("click", function(){
//     div.classList.add("green");
//  })
//  button2.addEventListener("click", function(){
//     div.classList.remove("green");
//  })
// const cards = document.querySelectorAll(".card")
// for (let index = 0; index < cards.length; index++) {
//     cards[index].addEventListener("click", function(){
//         cards[index].classList.toggle("active")
//     })
// }
let words = [
    {en: "cat", ru: "кошка"},
    {en: "dog", ru: "собака"},
    {en: "bird", ru: "птица"},
    {en: "tree", ru: "дерево"},
    {en: "flower", ru: "цветок"}
]

const but1 = document.querySelector(".ru")
const but2 = document.querySelector(".eng")

let cards = document.querySelector("#cards")
for (let index = 0; index < words.length; index++){
    const{en, ru} = words[index];
    const parag = document.createElement("p")
    parag.innerText = ru;

    const card = document.createElement("div")
    card.classList.add("card")
    card.append(parag)
    but1.addEventListener("click", function(){
        parag.innerText = words[index].ru;  })
    but2.addEventListener("click", function(){
        parag.innerText = words[index].en
         
    })
    // card.addEventListener("click", function(){
    //     russian.classList.toggle("hidden");
    //     english.classList.toggle("hidden")
    // })
    cards.append(card)
}