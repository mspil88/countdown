let secVal = document.getElementById("sec-val");
let buttons = document.querySelectorAll(".btn");

let value = parseInt(secVal.textContent);
const beginningVal = 60;
console.log(secVal.textContent);
console.log(buttons);
console.log(value);
let t = beginningVal;

let countDown = null;

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
            t = beginningVal;
            secVal.textContent = beginningVal;
            
        }
    })
})


function countingDown() {
    t = --t;
    console.log(t);
    secVal.textContent = t;
}

function stopCountDown(interval) {
    clearInterval(interval);

}
