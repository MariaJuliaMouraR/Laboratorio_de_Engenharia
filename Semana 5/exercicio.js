// Função para criar e configurar os elementos do contador de pessoas

function createCounter() {
  document.body.setAttribute("style", "display: flex; align-items: center; justify-content: center;");
  
  let appDiv = document.createElement('div');
  appDiv.id = 'app';
  appDiv.setAttribute("style", "width: 17em;");

  divPrincipal = document.getElementById('container');
  divPrincipal.setAttribute("style", "width: 17em;");
  divPrincipal.appendChild(appDiv);

  let total = 0;
  let homeTotal = 0;
  let mulherTotal = 0;

  let updateButton = document.createElement('button');
  updateButton.textContent = 'Atualizar';
  updateButton.setAttribute("style", "margin-left: 18.5em;")
  updateButton.classList.add('button', 'update-btn');
  updateButton.onclick = () => {
    total = 0;
    homeTotal = 0;
    mulherTotal = 0;
    updateCounters();
  };
  appDiv.appendChild(updateButton);

  let counterDiv = document.createElement('div');
  counterDiv.classList.add('counter');
  counterDiv.textContent = 'Total: 0';
  appDiv.appendChild(counterDiv);

  let homeDiv = createPersonDiv('Homem', "homem2.jpg");
  let mulherDiv = createPersonDiv('Mulher', "mulher2.jpg");

  appDiv.appendChild(homeDiv);
  appDiv.appendChild(mulherDiv);

  function createPersonDiv(label, imagePath) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.classList.add('people-img');
    img.src = imagePath;
    img.alt = label;
    div.appendChild(img);

    let increaseBtn = document.createElement('button');
    increaseBtn.classList.add('button');
    increaseBtn.style.backgroundColor = '#4caf50'; // Cor verde
    increaseBtn.textContent = '+';
    increaseBtn.onclick = () => {
      if (label === 'Homem') {
        homeTotal++;
      } else if (label === 'Mulher') {
        mulherTotal++;
      }
      total++;
      updateCounters();
    };
    div.appendChild(increaseBtn);

  let decreaseBtn = document.createElement('button');
  decreaseBtn.classList.add('button');
  decreaseBtn.style.backgroundColor = '#f44336'; // Cor vermelha
  decreaseBtn.textContent = '-';
  decreaseBtn.onclick = () => {
    if (label === 'Homem' && homeTotal > 0) {
      homeTotal--;
      total--; // Atualizar o total geral 
      updateCounters();
    } else if (label === 'Mulher' && mulherTotal > 0) {
      mulherTotal--;
      total--; // Atualizar o total geral 
      updateCounters();
    } else {
      alert(`Não é possível diminuir mais ${label}, a contagem já está em zero.`);
    }
  };
  div.appendChild(decreaseBtn);

    let personCounterDiv = document.createElement('div');
    personCounterDiv.textContent = `Total ${label}: 0`;
    div.appendChild(personCounterDiv);

    return div;
  }

  function updateCounters() {
    counterDiv.textContent = `Total: ${total}`;
    homeDiv.querySelector('div').textContent = `Total Homem: ${homeTotal}`;
    mulherDiv.querySelector('div').textContent = `Total Mulher: ${mulherTotal}`;
  }
}

// Chamando a função para criar o contador ao carregar a página
window.onload = createCounter;