
let input = document.getElementById("boxInput");
let buttons = document.querySelectorAll("button");
let number = "";

let btnArray = Array.from(buttons);
btnArray.forEach(btn =>{
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            number = eval(number);
            input.value = number;
        }else if(e.target.innerHTML =="AC"){
            number = "";
            input.value = number;
        }else if(e.target.innerHTML =="DELL"){
            number = number.substring(0, number.length - 1);
        }
        else {
            number += e.target.innerHTML;
            input.value = number;
        }
    })
})