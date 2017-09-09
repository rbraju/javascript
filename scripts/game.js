var riddle = {};
var total = 0;
var marks = 0;

function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function playGame() {
    var number1 = getRandomNumber(11, 99);
    var number2 = getRandomNumber(11, 99);
    var answerIndex = getRandomNumber(1, 4);
    riddle = {
        num1: number1,
        num2: number2,
    };
    for(var i = 1; i < 5; i++) {
        var field = "option" + i;
        document.getElementsByClassName('number')[0].innerText = riddle.num1;
        document.getElementsByClassName('number')[1].innerText = riddle.num2;
        if (answerIndex == i) {
            document.getElementById(field).innerText = riddle.num1 + riddle.num2;
        }
        else {
            document.getElementById(field).innerText = getRandomNumber(11, 200);
        }
    }
}

function checkAnswer(element) {
    total++;
    var after = document.getElementById('after');
    after.classList.remove('hide');
    after.classList.add('animated');
    after.classList.add('zoomInDown');
    if (element.innerText == (riddle.num1 + riddle.num2)) {
        after.classList.add('valid');
        after.innerHTML = "Great Job! Hit the below button to play again."
        marks++;
    } else {
        after.classList.add('invalid');
        after.innerHTML = "Oops! Try again!"
    }

    if(total > 0) {
        var score = document.getElementById('score');
        score.classList.remove('hide');
        document.getElementById('result').innerHTML = marks + "/" + total;
    }
}

function playAgain() {
    var after = document.getElementById('after');
    after.classList.add('hide');
    after.classList.remove('valid');
    after.classList.remove('invalid');
    playGame();
}
