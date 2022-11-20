
/*-----------------------------
        ProgressBar Circle
------------------------------*/


/*1st Progressbar*/
const circularProgress = document.querySelector(".circular-progress");
const progressValue = document.querySelector(".progress-value");

let progressStartValue = 0;
let progressEndValue = 95;
let speed = 20;


let progress = setInterval(() => {
    progressStartValue++

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#D9534F ${progressStartValue * 3.5}deg, #0f0f0f 0deg)`; 

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
}, speed);



/*2nd Progressbar*/

const circularProgress2 = document.querySelector(".circular-progress2");
const progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0;
let progressEndValue2 = 95;
let speed2 = 20;


let progress2 = setInterval(() => {
    progressStartValue2++

    progressValue2.textContent = `${progressStartValue2}%`;
    circularProgress2.style.background = `conic-gradient(#0262B3 ${progressStartValue2 * 3.5}deg, #0f0f0f 0deg)`; 

    if(progressStartValue == progressEndValue){
        clearInterval(progress2);
    }
}, speed2);


/*3rd ProgressBar*/

const circularProgress3 = document.querySelector(".circular-progress3");
const progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0;
let progressEndValue3 = 80;
let speed3 = 20;


let progress3 = setInterval(() => {
    progressStartValue3++

    progressValue3.textContent = `${progressStartValue3}%`;
    circularProgress3.style.background = `conic-gradient(#E8B361 ${progressStartValue3 * 3.5}deg, #0f0f0f 0deg)`; 

    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }
}, speed3);

/*4th ProgressBar*/

const circularProgress4 = document.querySelector(".circular-progress4");
const progressValue4 = document.querySelector(".progress-value4");

let progressStartValue4 = 0;
let progressEndValue4 = 80;
let speed4 = 20;


let progress4 = setInterval(() => {
    progressStartValue4++

    progressValue4.textContent = `${progressStartValue4}%`;
    circularProgress4.style.background = `conic-gradient(#34A47B ${progressStartValue4 * 3.5}deg, #0f0f0f 0deg)`; 

    if(progressStartValue4 == progressEndValue4){
        clearInterval(progress4);
    }
}, speed4);

/*5th ProgressBar*/

const circularProgress5 = document.querySelector(".circular-progress5");
const progressValue5 = document.querySelector(".progress-value5");

let progressStartValue5 = 0;
let progressEndValue5 = 70;
let speed5 = 20;


let progress5 = setInterval(() => {
    progressStartValue5++

    progressValue5.textContent = `${progressStartValue5}%`;
    circularProgress5.style.background = `conic-gradient(#399CF8 ${progressStartValue5 * 3.5}deg, #0f0f0f 0deg)`; 

    if(progressStartValue5 == progressEndValue5){
        clearInterval(progress5);
    }
}, speed5);

/*6th ProgressBar*/

const circularProgress6 = document.querySelector(".circular-progress6");
const progressValue6 = document.querySelector(".progress-value6");

let progressStartValue6 = 0;
let progressEndValue6 = 70;
let speed6 = 20;


let progress6 = setInterval(() => {
    progressStartValue6++

    progressValue6.textContent = `${progressStartValue6}%`;
    circularProgress6.style.background = `conic-gradient(#F49135 ${progressStartValue6 * 3.5}deg, #0f0f0f 0deg)`; 

    if(progressStartValue6 == progressEndValue6){
        clearInterval(progress6);
    }
}, speed6);
