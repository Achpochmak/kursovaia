const wordText = document.querySelector(".text"),
questionText = document.querySelector(".question span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");
let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Время закончилось! Правильный ответ - ${correctWord} `);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = texts[Math.floor(Math.random() * texts.length)];

    wordText.innerText = randomObj.text;
    questionText.innerText = randomObj.question;
    correctWord = randomObj.answer;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Введите ответ!");
    if(userWord !== correctWord) return alert(`${userWord} - неправильный ответ`);
    alert(`Позравляем! ${correctWord.toUpperCase()}-верный ответ!`);
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);