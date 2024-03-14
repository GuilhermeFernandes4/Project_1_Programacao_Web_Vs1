document.getElementById("menu-button").addEventListener("click", function() {
    var menuContent = document.getElementById("menu-content");
    if (menuContent.style.display === "block") {
      menuContent.style.display = "none";
    } else {
      menuContent.style.display = "block";
    }
  });
    
    document.getElementById("logout-button").addEventListener("click", function() {
      // Adicione aqui a funcionalidade para terminar a sessão do usuário
      alert("Sessão terminada!");
    });