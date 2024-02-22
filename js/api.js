function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function formatarData(dataString) {
    // Formata a data no padrão DD/MM/YYYY
    const data = new Date(dataString);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }


function criaLinha(repositorio){

    linha = document.createElement("tr");
    tdBr = document.createElement("div");
    tdName = document.createElement("th");
    tdCreated_at = document.createElement("td");
    tdDescription = document.createElement("td");
    tdLanguage = document.createElement("td");
    tdVisibility = document.createElement("td");
    tdMoreDetails = document.createElement("more-details-button");
    tdMoreDetails.innerHTML = "Detalhes";
   
    tdName.innerHTML = repositorio.name;
    tdCreated_at.innerHTML = formatarData(repositorio.created_at);
    tdDescription.innerHTML = repositorio.description;
    tdLanguage.innerHTML = repositorio.language;
    tdVisibility.innerHTML = repositorio.visibility;
    tdMoreDetails.innerHTML = repositorio.html_url;

    linha.appendChild(tdBr);

    linha.appendChild(tdName);

    linha.appendChild(tdCreated_at);

    linha.appendChild(tdDescription);

    linha.appendChild(tdLanguage);

    linha.appendChild(tdVisibility);

    tdMoreDetails.addEventListener("click", function () {
        window.open(repositorio.html_url, "_blank");
    });

    linha.appendChild(tdMoreDetails);

    return linha;
}

function api() {
    let data = fazGet("https://api.github.com/users/JCarvalhoOAK/repos");
    let repositorios = JSON.parse(data);
    let tabelaBody = document.getElementById("tabela-body");
  
    repositorios.forEach((element) => {
      let linha = criaLinha(element);
      tabelaBody.appendChild(linha);
    });
  }
  
  api();