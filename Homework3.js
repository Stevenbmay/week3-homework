let mod1;
let mod2;
let number = document.querySelectorAll("#number");
let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
screen1.innerText = "0";
document.getElementById("root").addEventListener("click", root);
document.getElementById("e").addEventListener("click", e);
document.getElementById("pi").addEventListener("click", pi);
document.getElementById("del").addEventListener("click", del);
document.getElementById("x").addEventListener("click", times);
document.getElementById("/").addEventListener("click", divide);
document.getElementById("-").addEventListener("click", minus);
document.getElementById("+").addEventListener("click", plus);
document.getElementById("power").addEventListener("click", power);
document.getElementById("C").addEventListener("click", clear);
document.getElementById("CE").addEventListener("click", clearE);
document.getElementById("=").addEventListener("click", equals);
document.getElementById(".").addEventListener("click", decimal);
document.getElementById("+/-").addEventListener("click", negativePositive);
document.getElementById("sin").addEventListener("click", sin);
document.getElementById("cos").addEventListener("click", cos);
document.getElementById("tan").addEventListener("click", tan);

let body = document.getElementById("body");
let num1;
let num2;
let isEqual = false;

number.forEach((e) => {
    e.addEventListener("click", numberSelect);
});


body.addEventListener("keypress", (e) => {
    if (e.key === "0" || e.key == "1" || e.key == "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9") {
        equalCheck();
        if (screen1.innerText == "0") {
            screen1.innerText = "";
        }
        if (screen1.innerText.length < 25) {
            screen1.innerText = screen1.innerText + e.key;
        }
    }
    if (e.key === "*") {
        times();
    }
    if (e.key === "/") {
        divide();
    }
    if (e.key === "-") {
        minus();
    }
    if (e.key === "+") {
        plus();
    }
    if (e.key === "Enter") {
        equals();
    }
});


function numberSelect(e) {
    equalCheck();
    if (screen1.innerText == "0") {
        screen1.innerText = "";
    }
    if (screen1.innerText.length < 25) {
        console.log(e.target.innerText);
        screen1.innerText = screen1.innerText + e.target.innerText;
    }
}

function save() {
    num1 = parseFloat(screen1.innerText);
    screen2.innerText = screen1.innerText + mod1;
    screen1.innerText = "0";
}


function partEqual() {
    num1 = parseFloat(screen2.innerText);
    num2 = parseFloat(screen1.innerText);
    if (mod2 == "x") {
        screen2.innerText = num1 * num2 + mod1;
    }
    if (mod2 == "/") {
        screen2.innerText = num1 / num2 + mod1;
    }
    if (mod2 == "-") {
        screen2.innerText = num1 - num2 + mod1;
    }
    if (mod2 == "+") {
        screen2.innerText = num1 + num2 + mod1;
    }
    if (mod2 == "power") {
        screen2.innerText = num1 ** num2 + mod1;
    }
    screen1.innerText = "0";
}

function equals() {
    num1 = parseFloat(screen2.innerText)
    num2 = parseFloat(screen1.innerText)
    if (mod2 == "x") {
        screen1.innerText = num1 * num2;
    }
    if (mod2 == "/") {
        screen1.innerText = num1 / num2;
    }
    if (mod2 == "-") {
        screen1.innerText = num1 - num2;
    }
    if (mod2 == "+") {
        screen1.innerText = num1 + num2;
    }
    if (mod2 == "power") {
        screen1.innerText = num1 ** num2;
    }
    if (mod2 == "root") {
        screen1.innerText = Math.pow(num1, 1 / num2);
    }
    screen2.innerText = "";
    isEqual = true;
    mod2 = "";
}

function equalCheck() {
    if (isEqual === true) {
        screen1.innerText = "";
        isEqual = false;
    }
}

function times() {
    mod1 = " x";
    if (screen2.innerText == "") {
        save();
    } else if (screen1.innerText == "") { }
    else {
        partEqual();
    }
    mod2 = "x";
}

function root() {
    mod1 = " √";
    if (screen2.innerText == "") {
        save();
    } else if (screen1.innerText == "") { }
    else {
        partEqual();
    }
    mod2 = "root";
}

function divide() {
    mod1 = " /";
    if (screen2.innerText == "") {
        save();
    } else if (screen1.innerText == "") { }
    else {
        partEqual();
    }
    mod2 = "/";
}

function minus() {
    mod1 = " -";
    if (screen2.innerText == "") {
        save();
    } else if (screen1.innerText == "") { }
    else {
        partEqual();
    }
    mod2 = "-";
}

function plus() {
    mod1 = " +";
    if (screen2.innerText == "") {
        save();
    } else if (screen1.innerText == "") { }
    else {
        partEqual();
    }
    mod2 = "+";
}

function power() {
    mod1 = " Power to";
    if (screen2.innerText == "") {
        save();
    } else if (screen1.innerText == "") { }
    else {
        partEqual();
    }
    mod2 = "power";
}

function negativePositive() {
    if (screen1.innerText == "0") {
    } else if (parseFloat(screen1.innerText) < 0) {
        screen1.innerText = Math.abs(parseFloat(screen1.innerText));
    } else {
        screen1.innerText = "-" + screen1.innerText;
    }
}

function decimal() {
    let check = screen1.innerText;
    let decCheck = false;
    for (let i = 0; i < check.length; i++) {
        if (check[i] == ".") {
            decCheck = true;
            break;
        }
    }
    if (decCheck == false) {
        if (isEqual == true) {
            screen1.innerText = "0"
            isEqual = false;
        }
        screen1.innerText = screen1.innerText + ".";
    }
}

function pi() {
    screen1.innerText = Math.PI;
    isEqual == true;
}

function e() {
    screen1.innerText = Math.E;
    isEqual = true;
}

function del() {
    if (isEqual == false) {
        let dele = screen1.innerText.split("");
        dele.pop();
        screen1.innerText = dele.join("");
        if (screen1.innerText == "") {
            screen1.innerText = "0";
        }
    }
}

function clear() {
    screen1.innerText = "0";
    screen2.innerText = "";
}

function clearE() {
    screen1.innerText = "0";
}

function sin() {
    screen1.innerText = Math.sin(parseFloat(screen1.innerText));
}
function cos() {
    screen1.innerText = Math.cos(parseFloat(screen1.innerText));
}
function tan() {
    screen1.innerText = Math.tan(parseFloat(screen1.innerText));
}