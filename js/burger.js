let btnmenu = document.getElementById("btnburger");
let sidebar = document.getElementById("sidebar");
let count = 0;

// Fonction : ouvre / ferme le volet
function ouvreFermeVolet(){
    sidebar.classList.toggle("ouvert");
  }
  
  // Activation et programmation des clics
  btnmenu.addEventListener('click', ouvreFermeVolet);

  