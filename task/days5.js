/*
 상용구를 사용하여 크리스마스 이브까지의 시간을 일, 시간, 분 및 초 단위로 표시하는 앱을 만듭니다.


*   */

// 86400000ms는 1day를 의미한다.
// 1s = 1,000ms
// 1m = 60s * 1,000ms = 60,000ms
// 1h = 60m * 60,000ms = 3,600,000ms
// 1d = 24h * 3,600,000ms = 86,400,000ms

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    // Don't delete this.
    const xmasDay = new Date("2020-12-24:00:00:00+0900");
    const now = new Date();
    // This is in milisecondsx
    const difference = new Date(xmasDay - now);
    const secondsInMs = Math.floor(difference / 1000);
    const minutesInMs = Math.floor(secondsInMs / 60);
    const hoursInMs = Math.floor(minutesInMs / 60);
    const days = Math.floor(hoursInMs / 24);
    const seconds = secondsInMs % 60;
    const minutes = minutesInMs % 60;
    const hours = hoursInMs % 24;
    const daysStr = `${days < 10 ? `0${days}` : days}d`;
    const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
    const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
    const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
    clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;


}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();