//TODOS
//(1) no form/ input just modify time on click action
//(2) message or alert when at zero
//(3) start one click only
//(4) stop at zero - DONE



let secVal = document.getElementById("sec-val");
let buttons = document.querySelectorAll(".btn");
let secInput = document.getElementById("sec-input");
let value = parseInt(secVal.textContent);
const beginningVal = 5;
console.log(secVal.textContent);
console.log(buttons);
console.log(value);
let t = beginningVal;

let countDown = null;

console.log(secInput);

// check contents of secVal, if stop when boom is blank, cannot reset, fix this
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const actions = e.currentTarget.classList;
        if(actions.contains('start')) {
            console.log("start clicked");
            countdown = setInterval(countingDown, 1000);
            countingDown();
        } else if(actions.contains("stop")) {
            console.log("stop clicked");
            countdown = clearInterval(countdown);
            stopCountDown();
        } else if(actions.contains("reset")) {
            console.log("reset clicked");
            countdown = clearInterval(countdown);
            secVal.innerHTML = beginningVal;
            t = beginningVal;
            if(secVal.innerHTML == '') {
                console.log('blank');
            }
        } else if(actions.contains("submit")) {
            console.log("submit clicked");
            console.log(secInput.value);
            let newInput = parseInt(secInput.value);
            secVal.innerHTML = newInput;
            t = newInput;

        }
    })
})


function countingDown() {
    if(t > 0) {
        t = --t;
        console.log(t);
        secVal.innerHTML = t;
    } else {
        t = 0;
        const timeOutMsg = "BOOM";
        secVal.innerHTML = timeOutMsg;
        let flash = setTimeout(()=> {
            secVal.style.color = (secVal.style.color == "black") ? "#84c0ae": "black"
            console.log("===sec val===")
            console.log(secVal.innerHTML);
        }, 50);
        
        }
    }


function stopCountDown(interval) {
    clearInterval(interval);

}
