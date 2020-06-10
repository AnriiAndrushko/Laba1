//  import _ from 'lodash';
let correctInput1 = false;
let correctInput2 = false;
const input1 = document.createElement('input');
document.body.appendChild(input1);

const input2 = document.createElement('input');
document.body.appendChild(input2);
input2.style.display = 'block';

const div = document.createElement('div');
div.className = 'error message';
div.innerHTML = 'not a number';
div.style.display = 'none';
input1.after(div);

const div2 = document.createElement('div');
div2.className = 'error message';
div2.innerHTML = 'not a number';
div2.style.display = 'none';
input2.after(div2);

const button = document.createElement('button');
button.textContent = 'Расчитать';
document.body.appendChild(button);

const result = document.createElement('div');
result.id = 'result';
result.style.display = 'none';
button.after(result);

button.addEventListener('click', () => {
  const res1 = input1.value.split('');
  const res2 = input2.value.split('');
    if (res1.every((elem) => elem === '.' || (elem >= 0 && elem <= 9))&&res1[0] != undefined&&res1[0] != ' ') {
      correctInput1 = true;
      div.style.display = 'none';
    } else {
      correctInput1 = false;
      div.style.display = 'block';
    }
    if (res2.every((elem) => elem === '.' || (elem >= 0 && elem <= 9))&&res2[0] != undefined&&res2[0] != ' ') {
      correctInput2 = true;
      div2.style.display = 'none';
    } else {
      correctInput2 = false;
      div2.style.display = 'block';
    }

  if (correctInput2 === true && correctInput1 === true) {
    result.innerHTML = Number(input1.value) + Number(input2.value);
    result.style.display = 'block';
  } else {
    result.style.display = 'none';
  }
});


/* function component()
{
  const element = document.createElement('div');
    Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}
document.body.appendChild(component()); */
