// const value_1 = +prompt("type 1 number")
// const value_2 = +prompt("type 2 number")
// if(value_1 > value_2){
//     console.log("Value 1 is bigger")
// } else if (value_1 < value_2){
//     console.log("Value 2 is bigger")
// } else {
//     console.log("is equal")
// }
//---------------------------------------------
// const value_1 = +prompt("type 1 number")

// if(value_1 > 0){
//     console.log("Value 1 is bigger than zero")
// } else if (value_1 < 0){
//     console.log("less than 0")
// } else {
//     console.log("0")
// }
//==================================================
// while(true){
//     const value_1 = +prompt("type number only!");
//     if(!isNaN(value_1)){
//         console.log("можжно перевести");
//         break;
//     }
// }

// const value = +prompt("введите год")

// if(value % 4 == 0 || value % 100 == 0 || value % 400 == 0){
//     console.log("год высокостный")
// } else {
//     console.log("год не высокостный")
// }
//=================================================================
// const arr = [1,-2, 3, -4, 5, -6]
// // arr.push(5);
// // arr.pop

// // arr.unshift(0)
// // console.log(arr)

// for(i=arr.length-1; i >= 0; i--){
//         console.log(arr[i])
// }


// let value_1 = 0;
// while(true){
//     value_1 = +prompt("type number only!");
//     if(!isNaN(value_1)){
//         console.log("проверка пройдена");
//         break;
//     }
// }
// // let num = +prompt("введите число")
// const arr = [1,2,3,5,5,6,7,1];
// let sumOfEl1 = 0;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] === i){
//         sumOfEl1+=arr[i];
//     }  
// }
//     console.log(sumOfEl1);
//     console.log(value_1);  


// let a = [1,2,3,4];
// let b = a;
// function check() {
//     const num = prompt("write your namber")
//     if(num % 2 == 0)
//     console.log("Да")
//     else 
//     console.log("Нет")
// }
// check()

// function print(str){
//     console.log(str);
// }
// print("напиши имя")

// function triangle(a,b){
//    return Math.sqrt(a**2+b**2)
// }
// console.log(triangle(3,3));
//============================== 


const myArr = function newArray(a, b){
    let arr = [];
    for(let i=a; i<=b; i++ ){
        arr.push(i);
    }
    return arr;
 }

 console.log(myArr(3,8))

// const obj = {
//     name: "koli",
//     age: setName(33)
// }

// function setName(a){
//     return a+1;
// }
// console.log(obj)
