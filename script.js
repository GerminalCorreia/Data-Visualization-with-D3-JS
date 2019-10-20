var mymap = L.map('mapid')
                    .setView([43.60, 1.44], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
       {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
          maxZoom: 20,
        }).addTo(mymap);

      //On déssine des cercles pour chaque domaine d'actvité avec une taille proportionnelle à la proportion d'entreprise qui exerce ce domaine
      d3.csv("toulouse.csv", function(data) {
        for (var i=0; i<domaines.length; i++){
          var win = d3.select("body").append("svg")
            .attr("width", 450)
            .attr("height", 450);
          var text = win.append("text")
            .attr("dx", getLength(data,domaines[i]) * 3 - 60)
            .attr("dy", getLength(data,domaines[i]) * 3)
            .text(domaines[i]);
          var cercle = win.append("circle")
            .attr("cx", getLength(data,domaines[i]))
            .attr("cy", getLength(data,domaines[i]))
            .attr("r", getLength(data,domaines[i]))
            .style("fill","hsl(" + Math.random() * 360 + ",100%,50%)");
          }

        var cStyle = { 
          color: 'red',
          fillColor: '#ffffff'
        };

        // On place les entreprises sur la map avec des cercles
        for (var i = 0; i < data.length; i++){
          L.circle([data[i]["lat"], data[i]["lon"]], 30, cStyle).addTo(mymap);
        }
    });

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





  
  
