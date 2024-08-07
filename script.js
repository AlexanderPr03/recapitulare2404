// // let, var, const

// // String, Number, Boolean, Null, Undefined

// // string.length

// console.log(console);

// // Aritmetici

// // Comparatie

// // ==, ===
// // !=, !==
// // <, <=, >, >=


// // Logici

// // True - 1, False - 0
// // AND (și), && - inmultirea -  True, true, false, 1*1*0 = 0

// // OR (sau), || - adunarea- True, true, false, 1+1+0 = 2

// // if (/* conditie */) {

// // } else if () {

// // } else {

// // } 

// // switch


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// // JSON - liste de obiecte, arrays of objects
// let car = {

// }

// let names = []

// for (let element of names) {

// }

// for (let property in car) {
//     car.property
//     car[property]
// }
// // 1, 2, 3 - > 2, 4, 6
// array.forEach(element => {
    
// });


// // while (/*conditie*/) {

// // }

// // do {

// // } while ()

// // function name(params) {
// //     return 
// // }

// // let name2 = (params) =>

// // let element = document.querySelector('');

// element.textContent;
// element.innerHTML;

// element.getAttribute();
// element.setAttribute('');
// element.removeAttribute();

// // element.style./*proprietate*/

// element.classList.add();
// element.classList.remove();
// element.classList.toggle();

// element.insertAdjacentElement('beforeend', elementInserat);

// element.addEventListener('submit', (event) => {
//     // raspunsul la evenimentul nostru
//     event.preventDefault();
// })

fetch('https://jsonplaceholder.typicode.com/albums')
        .then(raspuns => raspuns.json())
        .then(data => alert(data))
        .catch()


async function dateRequest(url) {
    try {
        let raspuns = await fetch(url);
        let data = await raspuns.json();
    
        return data;

    } catch(error) {
        return error;
    }
    
}

dateRequest('https://jsonplaceholder.typicode.com/albums')
        .then(data => alert(data));



class User {
    constructor(parametri) {
        this.parametri = parametri;
    }
}