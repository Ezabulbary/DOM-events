// 2nd way 

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// 3rd way

const blueButton = document.getElementById('make-blue-button');

blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// 4th way is anonymous event

const makeGreen = document.getElementById('make-green-button');
makeGreen.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// 5th way add Event Listener

const goldenButton = document.getElementById('make-goldenrod-button');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'GoldenRod';
}

// 6th way 

