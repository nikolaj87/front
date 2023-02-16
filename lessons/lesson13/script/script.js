// //DOM doc obj model
// let pValue = document.querySelector("p")
// pValue.innerText = "hello warldec"
// console.log(pValue.innerText)

// const paragraphs = document.querySelectorAll("p")
// console.log(paragraphs)

// for(let i = 0; i<paragraphs.length; i++){
//     console.log(paragraphs[i].innerText);
// }

// let p = document.querySelector(".main .info_1")
// p.innerText = "halo"
// console.log(p.innerText)

// const img = document.querySelector("img")
// console.log(img.src)
// console.log(img.alt)
// 
// img.setAttribute("alt", "new_atribute")

// const img = document.querySelectorAll(".main img")
// for(let i=0; i<5; i++){
//     img[i].setAttribute("src", "./media/123.jpg")
//     img[i].setAttribute("alt", "#")
// }


// const p = document.createElement("p")
// p.innerText = "hello world"
// div.append(p)
const div = document.querySelector(".main")
const paragraphs = ["Day1", "Day2", "Day3", "Day4"]


for( let i=0; i<paragraphs.length; i++){
        div.append(my(paragraphs[i]));
}

function my (str){
    let p = document.createElement("p");
    p.innerText = str;
    return p;
}
