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
      btnmenu.innerHTML = "<i class='cross fa-solid fa-xmark'></i><i class='cross2 fa-solid fa-xmark'></i>";
    } else {
      btnmenu.innerHTML = "<span class='icon_burger2'></span><span class='icon_burger2'></span><span class='icon_burger2'></span>";
    }
    count++;
  });


