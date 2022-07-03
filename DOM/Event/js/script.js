//===Handle button click by setting function===
function defaultColor() {
    document.body.style.backgroundColor = '#f0f0f0';
}

//====Handle button by id and click by setting function===
const yellowButton = document.getElementById('make-yellow-button');

//Just set the name of the function
yellowButton.onclick = makeYellow;

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

//===Handle event using function in same line on variable===
const greenButton = document.getElementById('make-green-button');

greenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

//===Handle event using anonymous function===
const purpleButton = document.getElementById('make-purple-button');

purpleButton.onclick = function () {
    document.body.style.backgroundColor = 'purple';
}

//==Handle event by eventListener function ===
const goldenRod = document.getElementById('make-goldenrod-button');
goldenRod.addEventListener('click' , makeGoldenRod);
function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenrod';
}

//==Handle event by eventListener in same line ===
const hotPink = document.getElementById('make-hotPink-button');

hotPink.addEventListener('click',function makeHotPink(){
    document.body.style.backgroundColor = 'hotpink';
});

//===Short cut way to use event listener

document.getElementById('make-lightBlue-button').addEventListener('click',
function(){
    document.body.style.backgroundColor = 'lightblue';
});