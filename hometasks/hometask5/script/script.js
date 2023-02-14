//1 Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
let value = +prompt("type a number");
console.log(`10% is ${value * 0.1}`);

//2 Написать программу, которая получает два числа и выводит наименьшее
let valueTask = +prompt("type a number");
let valueTask2 = +prompt("type a number");
if(valueTask < valueTask2)
    console.log(`большее число: ${valueTask}`);
else 
    console.log(`большее число: ${valueTask2}`);

//3 Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
let valueTask3 = +prompt("type a number");
if(valueTask3 > 100)
    console.log(`число ${valueTask3} больше 100`);
else if(valueTask3 === 100)
    console.log(`число ${valueTask3} равно 100`);
else 
    console.log(`число ${valueTask3} меньше 100`);

//4 Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний.
let valueTask4 = +prompt("type your age");
let valueTask4Name = prompt("type your name");
if(valueTask4 >= 18)
    console.log(`Hello, ${valueTask4Name}`);
else
    console.log(`Hi, ${valueTask4Name}`);    

//5 Создайте массив из строк, чисел, NaN и объектов. Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]
//Задача 1
//Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof).
const arr = ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]
for(let i = 0; i < arr.length; i++){
    console.log(`элемент массива ${i} это ${typeof(arr[i])}`);
}
//Просуммируйте все числа в массиве и выведите результат в консоли. Игнорируйте нечисловые элементы.
let sum = 0;
for(let i = 0; i < arr.length; i++){
    if(!isNaN(arr[i])){
        sum = sum + arr[i];    
    }
}
console.log(`сумма чисел в массиве: ${sum}`);
    