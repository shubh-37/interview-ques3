var h1 = document.querySelector("#h1");
var h2 = document.querySelector("#h2");
var h3 = document.querySelector("#h3");

var submit = document.querySelector("#submit");
var output = document.querySelector("#output");

var input = document.querySelector("#input");

function h1Handler(){
    output.style.fontSize = "32px";
}

function h2Handler(){
    output.style.fontSize = "24px"
}

function h3Handler(){
    output.style.fontSize = "18.72px";
}

function submitHandler(){
    output.innerText = input.value;
}

h1.addEventListener("click",h1Handler);
h2.addEventListener("click",h2Handler);
h3.addEventListener("click",h3Handler);
submit.addEventListener("click",submitHandler);