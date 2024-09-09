// console.log("Aôpa, povo!")
//console.log("Rebeca Andrade")
// console.log(dados);

function pesquisar() {
    // Função responsável por realizar a pesquisa e exibir os resultados na página.
  
    // console.log("clicou"); // Log para depuração: indica que a função foi chamada.
  
    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    // console.log(section); // Log para depuração: verifica se a seção foi encontrada.

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    // se conteúdo de campoPesquisa for vazio, retorne sem executar nada
    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado. Termo de pesquisa: " + campoPesquisa
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao1 = "";
    let descricao2 = "";
    let descricao3 = "";
    let tags = "";
  
    // Itera sobre cada item de dados (assumindo que 'dados' seja um array).
    for (dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao1 = dado.descricao1.toLowerCase();
      descricao2 = dado.descricao2.toLowerCase();
      descricao3 = dado.descricao3.toLowerCase();
      tags = dado.tags.toLowerCase();

      // define condicional para mostrar o que contém o dado digitado em campoPesquisa
      //console.log(dado.titulo.includes(campoPesquisa));
      if (titulo.includes(campoPesquisa) ||
          descricao1.includes(campoPesquisa) ||
          descricao2.includes(campoPesquisa) ||
          descricao3.includes(campoPesquisa) ||
          tags.includes(campoPesquisa)) 
          {
            // Constrói o HTML para cada resultado da pesquisa, concatenando-o na string 'resultados'.
            resultados += `
            <div class="item-resultado">
                <h2>
                <a href="https://www.instagram.com/rebecarandrade/?hl=en" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao1}</p>
                <p class="descricao-meta">${dado.descricao2}</p>
                <p class="descricao-meta">${dado.descricao3}</p>
                <a href=${dado.link} target="_blank">Saiba mais...</a>
            </div>
            `;
          };
    };
    
    if (!resultados) {
        resultados = `<p>Nenhum registro encontrado para a pesquisa "${campoPesquisa}".</p>`
    }
    // Atribui o HTML construído à seção de resultados.
    section.innerHTML = resultados;
  }