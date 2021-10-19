function countdown(){
const dayElement= document.querySelector('.day');
const hourElement= document.querySelector('.hour');
const minuteElement= document.querySelector('.minute');
const secondElement= document.querySelector('.second');

//date functionality
const targetDate = new Date('oct 21,2021 00:00:00').getTime();
const currDate = new Date().getTime();
console.log(currDate);

const dueDate = targetDate - currDate;


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const displayDay = Math.floor(dueDate /day);
dayElement.innerText = displayDay;

const displayhour = Math.floor((dueDate % day)/hour);
hourElement.innerText = displayhour;
//console.log(displayhour);
const displayMinute = Math.floor((dueDate % hour)/minute);
minuteElement.innerText = displayMinute;
//console.log(displayMinute);
const displaySecond = Math.floor((dueDate % minute)/second);
secondElement.innerText = displaySecond;
//console.log(displaySecond);
}

countdown();
setInterval(countdown, 1000);