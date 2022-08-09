import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { activate } from "./switch.js";
import { timeStart, timeStop } from "./timer.js";

const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc__result');

const checkBox = document.getElementById('checkBox');
const buttonRun = document.getElementById('start');
const buttonStop = document.getElementById('stop');

dateCalcForm.addEventListener('submit', handleCalcDates);
checkBox.addEventListener('click', activate);
buttonRun.addEventListener('click', timeStart);
buttonStop.addEventListener('click', timeStop);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = '';
  event.preventDefault();

  let {firstDate, secondDate} = event.target.elements;
  firstDate = firstDate.value, secondDate = secondDate.value;
  if (firstDate && secondDate) {
    console.log(firstDate, secondDate);
    const diff = diffDates(firstDate, secondDate);
    dateCalcResult.innerHTML = diffToHtml(diff);
  } else {
    console.log('Для расчета промежутка введите оба значения');
    dateCalcResult.innerHTML = formatError('Для расчета промежутка введите оба значения');
  }
}