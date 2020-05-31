console.log("time to start the timer!");
//Html selectors for easy DOM manipulation
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const timeDiv = document.getElementById('time');
const lapDiv = document.getElementById('lapList')
//Variable for incrementation
let counter = 0;
//Variable to store the interval function globally
let interval;
//Variable to prevent start time from running multiple times
let clockRunning = false;
//Variable for keeping count of laps
let lap = 1;

function startTime() {
    //If false I run the count function every second and store that within interval.
    if (!clockRunning) {
        interval = setInterval(count, 1000);
        //Setting clockRunning to true to prevent double runs of startTime
        clockRunning = true;
    }
}

function count() {
    //Increment the counter by one
    counter++;
    //Storing the returned value from timeConverter running on the counter
    const converted = timeConverter(counter);
    //Displaying that value to the HTML
    timeDiv.textContent = converted
}

function stopTime() {
    //Removes the setInterval stored within the interval variable
    clearInterval(interval);
    //Resets clockRunning so the timer can start again
    clockRunning = false;
}

function resetTime() {
    //Removes the setInterval stored within the interval variable
    clearInterval(interval);
    //Resets clockRunning so the timer can start again
    clockRunning = false;
    //Changes the counter and laps back to zero
    counter = 0;
    lap = 0;
    //Resets the HTML elements for the time and laps
    timeDiv.textContent = "00:00";
    lapDiv.innerHTML = '';
    //Hides the lap div to keep to the style of the page
    lapDiv.style.display = "none"
}

function recordLap() {
    if(lap === 1){
        lapDiv.style.display = "block"
    }
    //Storing the returned value from timeConverter running on the counter
    const converted = timeConverter(counter);
    //Creating a p tag and creating the text node to append to it for the lap text
    const lapText = document.createElement('p');
    const message = document.createTextNode(`Lap ${lap}: ${converted}`)
    //Appending the text to the p element then appending the element to the HTML
    lapText.appendChild(message)
    lapDiv.appendChild(lapText);
    //Increment the lap by one
    lap++;
  }

function timeConverter(time) {
    //Takes in the passed time parameter and devides it by 60 setting a Math.floor
    //incase it is below 60 seconds, therefore a decimal so set it to zero
    let minutes = Math.floor(time / 60);
    //Taking the parameter and sutracting out any minute values to make sure its only seconds
    let seconds = time - (minutes * 60);
    //If else chain for setting the time stucture correctly to display
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    //Retuning the time as a string for an easy HTML update
    return `${minutes}:${seconds}`;
}

//Adding onclick functionality to the buttons for the respective functions
startBtn.onclick = startTime;
stopBtn.onclick = stopTime;
resetBtn.onclick = resetTime;
lapBtn.onclick = recordLap;