function sum(a, b) {
    return a + b
}

function isPositive(number) {
    return number >= 0
}

function randomNumber() {
    return Math.random
}

document.addEventListener("click", function() {
    console.log("click")
})
// The above codes are 4 examples of normal functions

////////////////////////////////////////////////

let sum2 = (a, b) => {
    return a + b
}

let isPositive2 = (number) => {
    return number >= 0
}

let randomNumber2 = () => {
    return Math.random
}

document.addEventListener("click", () => {
    console.log("click")
})
// The above codes are the same 4 examples from the first block, but instead of being normal functions, they are written
// as Arrow functions(), which work exactly the same way.

/////////////////////////////////////////////

let sum3 = (a, b) => a + b


let isPositive3 = (number) => number >= 0


let randomNumber3 = () => Math.random


document.addEventListener("click", () => console.log("click"))
// The above codes are the same 4 examples of Arrow Functions() from earlier, but this is their most reduced and efficient
// form. Although the 4 examples above take up less space and only use one line each, they function just like the Normal,
// and original Arrow Functions().

