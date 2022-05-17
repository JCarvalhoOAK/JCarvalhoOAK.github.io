function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}


function criaLinha(repositorio){


    linha = document.createElement("tr");
    tdBr = document.createElement("div");
    tdName = document.createElement("th");
    tdCreated_at = document.createElement("td");
    tdDescription = document.createElement("td");
    tdLanguage = document.createElement("td");
    tdVisibility = document.createElement("td");
    tdMoreDetails = document.createElement("button");
    
    tdName.innerHTML = repositorio.name
    tdCreated_at.innerHTML = repositorio.created_at
    tdDescription.innerHTML = repositorio.description
    tdLanguage.innerHTML = repositorio.language
    tdVisibility.innerHTML = repositorio.visibility
    tdMoreDetails.innerHTML = repositorio.html_url

    linha.appendChild(tdBr);

    var divNome = document.createElement("th");
    var conteudoNomeNovo = document.createTextNode("Nome: ");
    divNome.appendChild(conteudoNomeNovo);
    var divNomeAtual = document.getElementById("th1");
    linha.insertBefore(divNome, divNomeAtual);

    linha.appendChild(tdName);
    

    var divCreate = document.createElement("th");
    var conteudoCreateNovo = document.createTextNode("Criado: ");
    divCreate.appendChild(conteudoCreateNovo);
    var divCreateAtual = document.getElementById("th1");
    linha.insertBefore(divCreate, divCreateAtual);

    linha.appendChild(tdCreated_at);

    var divDescription = document.createElement("th");
    var conteudoDescriptionNovo = document.createTextNode(" Descrição: ");
    divDescription.appendChild(conteudoDescriptionNovo);
    var divDescriptionAtual = document.getElementById("th1");
    linha.insertBefore(divDescription, divDescriptionAtual);

    linha.appendChild(tdDescription);

    var divLanguage = document.createElement("th");
    var conteudoLanguageNovo = document.createTextNode(" Linguagem: ");
    divLanguage.appendChild(conteudoLanguageNovo);
    var divLanguageAtual = document.getElementById("th1");
    linha.insertBefore(divLanguage, divLanguageAtual);

    linha.appendChild(tdLanguage);

    var divStatus = document.createElement("th");
    var conteudoStatusNovo = document.createTextNode(" Status: ");
    divStatus.appendChild(conteudoStatusNovo);
    var divStatusAtual = document.getElementById("th1");
    linha.insertBefore(divStatus, divStatusAtual);

    linha.appendChild(tdVisibility);
    linha.appendChild(tdMoreDetails);
   


    return linha;
}

function api(){
    let data = fazGet("https://api.github.com/users/JCarvalhoOAK/repos")
    let repositorios = JSON.parse(data);
    let tabela = document.getElementById("tabela")
    repositorios.forEach(element => {   
        let linha = criaLinha(element);
        tabela.appendChild(linha);
        
    });
}

api()