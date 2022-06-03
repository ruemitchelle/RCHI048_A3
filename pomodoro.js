const focusBtn = document.getElementById('focus-btn');
const shortBtn = document.getElementById('short-break-btn');
const longBtn = document.getElementById('long-break-btn');
const currentStatus = document.getElementById('current-status')
const resetBtn = document.getElementById('reset-btn');
let timeDisplay = document.getElementById('time-display');
let secondsRemaining = 0;

function pad(n, width,z ){
    z = z || "0";
    n = n + "";
    return n.lenght >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

setInterval(function (){
    if (secondsRemaining > 0) {
        secondsRemaining--;
        const minutes = pad(Math.floor(secondsRemaining / 60), 2);
        const seconds = pad(Math.ceil(secondsRemaining % 60), 2);
        timeDisplay.textContent = `${minutes}:${seconds}`;
    }
}, 1000);

focusBtn.addEventListener('click', function () {
    secondsRemaining = 60 * 30;
});


shortBtn.addEventListener('click', function () {
    secondsRemaining = 60 * 5;
    currentStatus.textContent = "Enjoy 5 Minute Break!";
});

longBtn.addEventListener('click', function () {
    secondsRemaining = 60 * 15;
    currentStatus.textContent = "Enjoy 15 Minute Break!";
});


resetBtn.addEventListener('click', function() {
    secondsRemaining = 0;
    const minutes = pad(secondsRemaining, 2);
    const seconds = pad(secondsRemaining, 2);
    timeDisplay.textContent = `${minutes}:${seconds}`;
    currentStatus.textContent = "";
})