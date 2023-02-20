// const products = [
//     {   count: 12,
//         price: 1200,
        
//         name: "Notebook", 
//         img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWBrzy?ver=85d4&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
//     },
//     {   count: 15,
//         price: 1000,
//         name: "laptop", 
//         img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWBrzy?ver=85d4&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
//     }
// ]

// const myDiv = document.querySelector("div.main")
// let amount = 0;
// let quantity = 0;

// for(let i=0; i<products.length; i++){

//     const p = document.createElement("p");
//     p.innerText = products[i].name;

//     const img = document.createElement("img");
//     img.setAttribute("src", products[i].img)
    
//     const p2 = document.createElement("p");
//     p2.innerText = (`${products[i].price}$ - ${products[i].count}`)
    
//     const newDiv = document.createElement("div");

//     newDiv.append(p, p2, img)
//     myDiv.append(newDiv)

//     amount += products[i].price * products[i].count
//     quantity += products[i].count
// }

// const p3 = document.createElement("p");
//     p3.innerText = (`цена ${amount} количество${quantity}`)
//     myDiv.append(p3)
// function pintec(result){
//     console.log(result);
// }

// function sum(a,b, print){
//     const c = a + b;
//     print(c)
// }

// sum(1,4,pintec);

function div(c){
    return c/2;
}

function sum(a,b, div){
    const c = a + b;
    return div(c);
}

console.log(sum(3,4,div));