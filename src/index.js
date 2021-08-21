//TODOS
//(1) no form/ input just modify time on click action
//(2) message or alert when at zero
//(3) start one click only
//(4) stop at zero - DONE



let secVal = document.getElementById("sec-val");
let buttons = document.querySelectorAll(".btn");
let secInput = document.getElementById("sec-input");
let value = parseInt(secVal.textContent);
const beginningVal = 60;
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
            TweenLite.killTweensOf("div");
            let leavesElems = document.querySelectorAll("#leavesDiv");
            leavesElems.forEach(elem => elem.remove());
            
            
            
           
       
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

let fallingSwitch = false;

function countingDown() {
    if(t > 0) {
        console.log(fallingSwitch);
        t = --t;
        console.log(t);
        secVal.innerHTML = t;


    } else {
        t = 0;
        fallingSwitch = true;
        falling = makeLeavesFall();
        console.log(falling);
        
        // const timeOutMsg = "BOOM";
        // secVal.innerHTML = timeOutMsg;
        // let flash = setTimeout(()=> {
        //     secVal.style.color = (secVal.style.color == "black") ? "#84c0ae": "black"
        //     console.log("===sec val===")
        //     console.log(secVal.innerHTML);
        // }, 50);
        
        }
    }


function stopCountDown(interval) {
    clearInterval(interval);

}


let fallingLeaves = false;
let total = 5;
let container = document.getElementsByClassName("count-container")[0];
let win = window.innerWidth;
let height = window.innerHeight;

console.log(win);
console.log(height);



function makeLeavesFall() {
    fallingLeaves = true;
    
    var Div = document.createElement('div');
    Div.setAttribute("id", "leavesDiv");
    TweenLite.set(Div,{attr:{class:'leaves'},x:R(0,win),y:R(-700,-700),z:R(-700,700)});
    container.appendChild(Div);
    animate(Div);

};
  

function animate(elem) {
    TweenLite.to(elem, R(6, 15),
    {y: height+100, ease:Linear.easeNone, repeat:-1, delay: -15});
    TweenLite.to(elem,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
    TweenLite.to(elem,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
  };

function R(min, max) {
    return min+Math.random()*(max-min)
};

