
function fazGetUser(url){
    let requestUser = new XMLHttpRequest()
    requestUser.open("GET", url, false)
    requestUser.send()
    return requestUser.responseText

}


function criaLinhaOne(usuario){


    linha = document.createElement("tr");
    tdUsName = document.createElement("th");
    tdPerfil = document.createElement("td");
    tdId = document.createElement("td");
    tdFollowers = document.createElement("td");
    tdLocation = document.createElement("td");
    tdBio = document.createElement("button");
    
    tdUsName.innerHTML = usuario.name
    tdPerfil.innerHTML = usuario.url
    tdId.innerHTML = usuario.id
    tdFollowers.innerHTML = usuario.followers
    tdLocation.innerHTML = usuario.location
    tdBio.innerHTML = usuario.bio


    linha.appendChild(tdName);
    linha.appendChild(tdPerfil);
    linha.appendChild(tdId);
    linha.appendChild(tdFollowers);
    linha.appendChild(tdLocation);
    linha.appendChild(tdBio);
   


    return linha;
}

function git(){
    let dataOne = fazGetUser("https://api.github.com/users/JCarvalhoOAK")
    let usuarios = JSON.parse(dataOne);
    let tabela = document.getElementById("tabelaOne")
    usuarios.forEach(element => {   
        let linha = criaLinhaOne(element);
        tabela.appendChild(linha);
        
    });
}

git()