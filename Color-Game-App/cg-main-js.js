
let removeBoxColor = 'rgb(36, 35, 35)';
let colors = ["", "", "", "", "", ""];
let squares = document.querySelectorAll('.box');
let container_1 = document.querySelector('.container-1');
let displayResult = document.querySelector('#result');
let pickedColor = '';
let hardGame = document.querySelector('#hard-game');
let easyGame = document.querySelector('#easy-game');
let colorDisplay = document.querySelector('#rgb-code');
let newColorBtn = document.querySelector('#new-color1');
let isEasyClicked = false;
reset();
hardGame.addEventListener('click', function () {
    isEasyClicked = false;
    reset();
});

easyGame.addEventListener('click', function () {
    isEasyClicked = true;
    reset()
});


newColorBtn.addEventListener('click', function () { reset(); });


for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener('click', function () {

        let clickedColor = this.style.background;
        if (clickedColor === pickedColor) {

            displayResult.textContent = 'Correct';
            container_1.style.background = pickedColor;
            changeAllColor(clickedColor);
        }
        else {
            this.style.background = removeBoxColor;
            displayResult.textContent = 'try Again';
        }
    });
}
function reset() {

    for (let i = 0; i < colors.length; i++) {
        let red = getRandomValue();
        let green = getRandomValue();
        let blue = getRandomValue();
        let colorCode = `rgb(${red}, ${green}, ${blue})`;
        colors[i] = colorCode;
        if (i < colors.length / 2) {
            squares[i].style.background = colors[i];
        }
        else if (!isEasyClicked) {
            squares[i].style.background = colors[i];
        }
        else
            squares[i].style.background = removeBoxColor;

    }
    let mod = isEasyClicked == true ? 3 : 6;
    pickedColor = colors[getRandomValue() % mod];
    container_1.style.background = 'rgb(38, 132, 219)';
    displayResult.textContent = '';
    colorDisplay.textContent = pickedColor;
}

function changeAllColor(color) {
    for (let i = 0; i < squares.length; i++) {
        if (i < colors.length / 2) {
            squares[i].style.background = color;
        }
        else if (!isEasyClicked)
            squares[i].style.background = color;
        else
            squares[i].style.background = removeBoxColor;
    }
}
function getRandomValue() {
    let random = Math.floor(Math.random() * 255);
    return random;
}
