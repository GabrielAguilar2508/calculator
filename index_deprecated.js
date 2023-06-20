const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');

const btn = document.querySelector('button');
const resultEl = document.getElementById('result');

const suma = () => {
  const num1 = Number(num1El.value);
  const num2 = Number(num2El.value);

  const result = num1 + num2;
  resultEl.innerText = result;
}

btn.addEventListener('click', suma)
num1El.addEventListener('input', () => suma());
num2El.addEventListener('input', suma);