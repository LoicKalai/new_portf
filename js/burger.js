let btnmenu = document.getElementById("btnburger");
let cross = document.querySelector(".cross");
let sidebar = document.getElementById("sidebar");
let count = 0;

// Fonction : ouvre / ferme le volet
function ouvreFermeVolet(){
    sidebar.classList.toggle("ouvert");
  }
  
  // Activation et programmation des clics
  btnmenu.addEventListener('click', ouvreFermeVolet);


 //remplacer le bouton burger par une croix lorsque le menu est ouvert, répéter l'opération à chaque fois
  btnmenu.addEventListener('click', function(){
    if (count % 2 === 0) {
      btnmenu.innerHTML = "<img src=./images/icon_cross_dark.png class='cross'><img src=./images/icon_cross.png class='cross2'>";
    } else {
      btnmenu.innerHTML = "<img src=./images/icon_burger.png>";
    }
    count++;
  });


