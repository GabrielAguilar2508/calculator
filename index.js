/* tengo 2 inputs con los ids 'num1' y 'num2'
  * tengo 2 buttons con los ids 'sumar' y 'restar'
  * tengo un div con el id 'result'
  * cuando hago click en cada button, quiero que se sumen o resten los valores de los inputs y se muestre el resultado en el div
  */

// 1. obtener los elementos del DOM
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');

const btnSumar = document.getElementById('sumar');
const btnRestar = document.getElementById('restar');

const resultEl = document.getElementById('result');

// 2. definir las funciones
const sumar = () => {
  const num1 = Number(num1El.value);
  const num2 = Number(num2El.value);

  const result = num1 + num2;
  resultEl.innerText = result;
}

const restar = () => {
  const num1 = Number(num1El.value);
  const num2 = Number(num2El.value);

  const result = num1 - num2;
  resultEl.innerText = result;
}

// 3. agregar los event listeners
btnSumar.addEventListener('click', sumar);
btnRestar.addEventListener('click', restar);


// Cambiar de texto "Suma" o "Resta" en el elemento h1 según el botón que se clickee
const h1El = document.querySelector('h1');

btnSumar.addEventListener('click', () => {
  h1El.innerText = 'Suma';
}
);

btnRestar.addEventListener('click', () => {
  h1El.innerText = 'Resta';
}
);