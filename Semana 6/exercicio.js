const calculadora = document.getElementById('calculadora');
let displayValue = '';

// Botões da calculadora

let buttons = [
  'C','+/-','%','/',
  '7','8','9', '*',
  '4','5','6', '+',
  '1', '2', '3', '-',
  '0', '.', '='
];

buttons.forEach(buttonText => {
  let button = document.createElement('button');
  button.textContent = buttonText;
  calculadora.appendChild(button);
  button.addEventListener('click', () => handleButtonClick(buttonText));
});

function handleButtonClick(buttonText) {
  if (buttonText === '=') {
    try {
      displayValue = eval(displayValue);
    } catch (error) {
      displayValue = 'Erro';
    }
  } else if (buttonText === 'C') {
    displayValue = '';
  } else if (buttonText === '%') {
      // Calcula a metade do valor atual

    const value = parseFloat(displayValue);
    if (!isNaN(value)) {
      displayValue = (value / 2).toString();
    } else {
      displayValue = 'Erro';
    }
  } else if (buttonText === '+/-') {
      // Inverte o sinal do valor atual

    displayValue = Number(displayValue) * -1;
  } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
    displayValue += ` ${buttonText} `;
  } else {
    displayValue += buttonText;
  }

  updateDisplay();
}

function updateDisplay() {
  const display = document.createElement('input');
  display.value = displayValue;
  display.disabled = true;
  display.style.gridArea = '1 / 1 / span 1 / span 4';
    // Limpa o conteúdo anterior antes de adicionar o novo display
  
  while (calculadora.firstChild) {
    calculadora.removeChild(calculadora.firstChild);
  }
  
  calculadora.appendChild(display);

  buttons.forEach(buttonText => {
    let button = document.createElement('button');
    button.textContent = buttonText;
    calculadora.appendChild(button);
    button.addEventListener('click', () => handleButtonClick(buttonText));
  });
}