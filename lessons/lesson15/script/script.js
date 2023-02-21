// function div(c){
//     return c/2;
// }

// function sum(a,b, div){
//     const c = a + b;
//     return div(c);
// }

// console.log(sum(3,4,div));

// const arr = [1,2,3,4,5];

// function printArray(arr, callback){
//     for(let i=0; i<arr.length; i++){
//     callback(arr[i]);
//     }
// }

// function endREsultPrint(x){
//     console.log(x**2);
// }

// printArray(arr, endREsultPrint)


// parph.addEventListener("click", clicked)
// function clicked(){
//     console.log("nakliknyli")
// }

// const parph = document.querySelector("p");

// const btn = document.querySelector("#one");
// btn.addEventListener("click", callback);

// const btn2 = document.querySelector("#two");
// btn2.addEventListener("click", callback2);

// let number = 0;

// function callback(){
//     parph.innerText = number++;
// }
// function callback2(){
//     parph.innerText = number--;
// }

// const parph = document.querySelector("p");


// function clicked(event){

//     console.log(event)
//     parph.innerText +=event.key
// }

// document.addEventListener("keydown", clicked)


const arr = ["первый","второй","третий","четвертый",]
const myDiv = document.querySelector("div.main")
let text = "*****";

for(let i=0; i<arr.length; i++){
    

    const p = document.createElement("p");
    p.innerText = arr[i];
    p.addEventListener("click", function(){
        p.innerText = text;
    })
    myDiv.append(p);
}


