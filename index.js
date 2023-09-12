let numOne = '';
let operator = '';
let numTwo = '';

const $result = document.querySelector('#result');
const $operator = document.querySelector('#operator');

const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  if (!numTwo) {
    $result.value = '';
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};

const onClickOperator = (event) => {
  if (numOne) {
    operator = event.target.textContent;
    $operator.value = event.target.textContent;
  } else {
    alert('숫자 먼저 입력하거라');
  }
};

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);
document.querySelector('#plus').addEventListener('click', onClickOperator);
document.querySelector('#minus').addEventListener('click', onClickOperator);
document.querySelector('#divide').addEventListener('click', onClickOperator);
document.querySelector('#multiply').addEventListener('click', onClickOperator);

document.querySelector('#cal').addEventListener('click', () => {
  if (numTwo) {
    $result.value = eval(numOne + operator + numTwo);
    $operator.value = '';
    numOne = $result.value;
    numTwo = '';
    operator = '';
  } else {
    alert('숫자 먼저 제대로 입력해');
  }
});
document.querySelector('#clear').addEventListener('click', () => {
  $result.value = '';
  $operator.value = '';
  numOne = '';
  numTwo = '';
  operator = '';
});
