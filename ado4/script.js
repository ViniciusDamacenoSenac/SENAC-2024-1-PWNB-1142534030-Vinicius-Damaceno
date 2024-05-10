const filmes = [
    "O Silêncio dos Inocentes (1991)",
    "Estrada para Perdição (2002)",
    "Batman: O Cavaleiro das Trevas Ressurge (2012)",
    "Os Bons Companheiros (1990)",
    "A Origem (2010)",
    "O Poderoso Chefão (1972)",
    "O Senhor dos Anéis: O Retorno do Rei (2003)",
    "Pulp Fiction: Tempo de Violência (1994)"
  ];
  
  function loadFilmes() {
    const listaFilmes = document.getElementById('lista-filmes');
    listaFilmes.innerHTML = ''; 
  
    filmes.forEach((filme, index) => {
      const li = document.createElement('li');
      li.textContent = (index + 1) + "° " + filme; // Adiciona números de ordem à lista de filmes
      listaFilmes.appendChild(li);
    });
  
    // Mostra a lista de filmes quando o botão "LOAD" é clicado
    listaFilmes.style.display = 'block';
  }
  
  function fecharLista() {
    const listaFilmes = document.getElementById('lista-filmes');
    // Esconde a lista de filmes quando o botão "FECHAR" é clicado
    listaFilmes.style.display = 'none';
  }
  