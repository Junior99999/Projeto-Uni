// Seleciona o container dos inputs
const inputsContainer = document.querySelector('#add');

// Seleciona o botão de adicionar campo
const adicionarCampoBotao = document.querySelector('.add-campo');

// Cria o contador de campos
let campoCount = 1;

// Define a função para adicionar mais campos
function adicionarCampo() {
    // Incrementa o contador de campos
    campoCount++;

    // Cria o novo campo
    const novoCampo = document.createElement('div');
    novoCampo.classList.add('campo');
    novoCampo.innerHTML = `
          <label for="titulo-${campoCount}" class="fonte">Título ${campoCount}:</br></label>
          <input type="text" name="titulo-${campoCount}" id="titulo-${campoCount}" class="titulo">
      
          <label for="texto-${campoCount}" class="fonte">Texto ${campoCount}:</br></label>
          <textarea name="texto-${campoCount}" id="texto-${campoCount}" class="texto"></textarea>
      
          <label for="imagem-${campoCount}" class="fonte">Imagem ${campoCount}:</br></label>
          <input type="file" name="imagem" id="imagem-${campoCount}" class="imagem" accept=".jpg,.jpeg,.png">
    `;

    inputsContainer.appendChild(novoCampo);
}

// Adiciona um event listener ao botão de adicionar campo
adicionarCampoBotao.addEventListener('click', adicionarCampo);