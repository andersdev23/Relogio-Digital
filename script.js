//  Script responsável por atualizar o relógio 

  // Seleciona os elementos HTML onde o tempo será exibido
  const hourElement = document.querySelector('.hour');
  const minuteElement = document.querySelector('.minute');
  const secondElement = document.querySelector('.second');

  // Função para atualizar o relógio com a hora atual
  function atualizarRelogio() {
    const now = new Date(); // Obtém a data e hora atual

    // Atualiza os valores de hora, minuto e segundo com 2 dígitos
    hourElement.innerText = now.getHours().toString().padStart(2, '0');
    minuteElement.innerText = now.getMinutes().toString().padStart(2, '0');
    secondElement.innerText = now.getSeconds().toString().padStart(2, '0');
  }

  atualizarRelogio(); // Chama a função uma vez ao carregar a página

  // Atualiza o relógio a cada 1 segundo (1000 milissegundos)
  setInterval(atualizarRelogio, 1000);