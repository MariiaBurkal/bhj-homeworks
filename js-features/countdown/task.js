"use strict"

let timer; 
let startTime = 59; 

function countdown() { 
    document.getElementById('timer').innerHTML = startTime;
    startTime--; 
    if (startTime==0){
        alert("Вы победили в конкурсе");
    }
    else {
        timer = setTimeout(countdown, 1000);
    }
};

countdown(); 