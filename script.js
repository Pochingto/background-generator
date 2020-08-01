var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var button = document.querySelector(".revert");

console.log(body);

console.log(css);
console.log(color1);
console.log(color2);
console.log(button);

var right = true;
console.log(right);
// input: every time input changes, we detect that

function changeColor() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    // the string can not end with ';'

    // textContent: add a text content
    css.textContent = body.style.background ;
}

function RevertDirection() {
    if (right) {
        body.style.background = `linear-gradient(to left, ${color1.value}, ${color2.value})`;
        right = false;
    }else {
        body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
        right = true;
    }
}

// input mean any action
// function must not have ()
// else it will run first, 
// i.e. changeColor() mean run changeColor once and return undefined

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

button.addEventListener("click", RevertDirection)

// html onclick / oninput attribute also work