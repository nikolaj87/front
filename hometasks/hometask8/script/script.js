// 1 Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
const divNumbers = document.querySelector("div")
for(i=100; i>=50; i-=10){
    const parag = document.createElement("p")
    parag.innerText = i
    divNumbers.append(parag)
}


// 2 Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом stringscontainer. Строки взять произвольные.
const divStrCont = document.querySelector(".stringscontainer")
const arr = ["понедельник", "вторник", "среда", "четверг", "пятница"]
for(i=0; i<arr.length; i++){
    const paragraph = document.createElement("p")
    paragraph.innerText = arr[i] 
    divStrCont.append(paragraph)
}

// 3 Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом userscontainer.

const divUserCont = document.querySelector(".userscontainer")
const objarr = [
    {
        firstname: "dadyBear",
        lastname: "bear",
        age: 35
    },
    {
        firstname: "mammyBear",
        lastname: "bear",
        age: 34
    },
    {
        firstname: "Masha",
        lastname: "girl",
        age: 10
    },
]
for(i = 0; i<objarr.length; i++){
    if(objarr[i].age >= 18){
        const paragraphName = document.createElement("p")
        paragraphName.innerText = objarr[i].firstname
        const paragraphLastName = document.createElement("p")
        paragraphLastName.innerText = objarr[i].lastname
        const paragraphAge = document.createElement("p")
        paragraphAge.innerText = objarr[i].age
        
        const myDiv = document.createElement("div")
        myDiv.style.height = "100px"
        myDiv.style.width = "100px"
        myDiv.style.backgroundColor = "aqua"

        myDiv.append(paragraphName, paragraphLastName, paragraphAge)
        divUserCont.append(myDiv)
    }
}