// Add this function for sorting
function sortTable(columnIndex, order) {
    let table = document.getElementById("tabela");
    let tbody = document.getElementById("tabela-body");
    let rows = Array.from(tbody.getElementsByTagName("tr"));
  
    rows.sort((a, b) => {
      let aValue = a.getElementsByTagName("td")[columnIndex].textContent.trim();
      let bValue = b.getElementsByTagName("td")[columnIndex].textContent.trim();
  
      if (order === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  
    tbody.innerHTML = "";
    rows.forEach((row) => {
      tbody.appendChild(row);
    });
  }
  
  // Add event listeners for each sortable header
  document.querySelectorAll("[data-sortable='true']").forEach((header, index) => {
    header.addEventListener("click", () => {
      let currentOrder = header.getAttribute("data-order") || "asc";
      let newOrder = currentOrder === "asc" ? "desc" : "asc";
  
      sortTable(index, newOrder);
  
      // Toggle the order attribute
      header.setAttribute("data-order", newOrder);
    });
  });
  
  function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
  }
  
  function formatarData(dataString) {
    const data = new Date(dataString);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
  
  function criaLinha(repositorio) {
    let linha = document.createElement("tr");
    let tdBr = document.createElement("div");
    let tdName = document.createElement("th");
    let tdCreated_at = document.createElement("td");
    let tdDescription = document.createElement("td");
    let tdLanguage = document.createElement("td");
    let tdVisibility = document.createElement("td");
    let tdMoreDetails = document.createElement("more-details-button");
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
  