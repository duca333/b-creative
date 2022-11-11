let counts = setInterval(updated);
let upto = 181;
function updated() {
    var count = document.getElementById("counter");
    count.innerHTML = ++upto;
    if (upto === 256) {
        clearInterval(counts);
    }
}

let counts1 = setInterval(updated1);
let upto1 = 280;
function updated1() {
    var count = document.getElementById("counter1");
    count.innerHTML = ++upto1;
    if (upto1 === 355) {
        clearInterval(counts1);
    }
}


let counts2 = setInterval(updated2);
let upto2 = 750;
function updated2() {
    var count = document.getElementById("counter2");
    count.innerHTML = ++upto2;
    if (upto2 === 825) {
        clearInterval(counts2);
    }
}


let counts3 = setInterval(updated3);
let upto3 = 0;
function updated3() {
    var count = document.getElementById("counter3");
    count.innerHTML = ++upto3;
    if (upto3 === 75) {
        clearInterval(counts3);
    }
}

document.querySelector("button.prvi").addEventListener('click', () => {
    let buttons = document.querySelector(".container-portfolio").children
    for (let button of buttons) {
        button.style.visibility = "visible";
    }
});

document.querySelector("button.drugi").addEventListener('click', () => {
    let buttons = document.querySelector(".container-portfolio").children
    for (let button of buttons) {
        if (button.classList.contains("logo-dizajn"))
            button.style.visibility = "visible";
        else
            button.style.visibility = "hidden";
    }
});

document.querySelector("button.treci").addEventListener('click', () => {
    let buttons = document.querySelector(".container-portfolio").children
    for (let button of buttons) {
        if (button.classList.contains("web-dizajn"))
            button.style.visibility = "visible";
        else
            button.style.visibility = "hidden";
    }
});

document.querySelector("button.cetvrti").addEventListener('click', () => {
    let buttons = document.querySelector(".container-portfolio").children
    for (let button of buttons) {
        if (button.classList.contains("development"))
            button.style.visibility = "visible";
        else
            button.style.visibility = "hidden";
    }
});

