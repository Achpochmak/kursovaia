let operators = ["+", "-", "*"];
const startBtn = document.getElementById("start-btn");
const question = document.getElementById("question");
const controls = document.querySelector(".controls-container");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
let answerValue;
let operatorQuestion;

const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const questionGenerator = () => {

  let randomOperator = operators[Math.floor(Math.random() * operators.length)];
  let [num1, num2]=[0,0];
  if ((randomOperator == "-") || (randomOperator=="+")) {
    [num1, num2] = [randomValue(100, 5000), randomValue(100, 5000)];
    if(num1<num2)
    [num1, num2] = [num2, num1];
  }else{
     [num1, num2] = [randomValue(10, 20), randomValue(10, 20)];
  }

  let solution = eval(`${num1}${randomOperator}${num2}`);

  let randomVar = randomValue(1, 5);

  if (randomVar == 1) {
    answerValue = num1;
    question.innerHTML = `<input type="number" id="inputValue" placeholder="?"\> ${randomOperator} ${num2} = ${solution}`;
  } else if (randomVar == 2) {
    answerValue = num2;
    question.innerHTML = `${num1} ${randomOperator}<input type="number" id="inputValue" placeholder="?"\> = ${solution}`;
  } else if (randomVar == 3) {
    answerValue = randomOperator;
    operatorQuestion = true;
    question.innerHTML = `${num1} <input type="text" id="inputValue" placeholder="?"\> ${num2} = ${solution}`;
  } else {
    answerValue = solution;
    question.innerHTML = `${num1} ${randomOperator} ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
  }

  
  submitBtn.addEventListener("click", () => {
    let userInput = document.getElementById("inputValue").value;

    if (userInput) {
      if (userInput == answerValue) {
        alert('Правильный ответ!');
        questionGenerator();
      }
      else {
        alert(` Неверно! Правильный ответ - ${answerValue}`);
        questionGenerator();
      }
    }
    
  });
};

questionGenerator();