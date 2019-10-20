

      //On déssine des cercles pour chaque domaine d'actvité avec une taille proportionnelle à la proportion d'entreprise qui exerce ce domaine
     

domaines = ["MACHINE LEARNING",
"DEEP LEARNING",
"TRAITEMENT NATUREL DU LANGAGE",
"VISION PAR ORDINATEUR",
"SYSTEME EXPERT",
"SYSTEME DE RECOMMANDATION",
"ROBOTIQUE"]


function getLength(data, nomDomaine) {
  var nombre = 0;
  for(var i = 0; i < data.length; i++) {
    if (data[i][nomDomaine] === "1") {
      nombre += 1;
    }
  }
  console.log(nombre);
  return nombre;
}





  
  
