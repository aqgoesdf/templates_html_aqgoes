function loadComponent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(error => {
      console.error("Erro ao carregar componente:", error);
    });
}

loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
