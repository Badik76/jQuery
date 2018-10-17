$(function(){  //fonction pour charger
  $("#submit").click(function(){ // définition de la fonction au moment du clic.

    var tabnot = [ // compilation des inputs dans tableau
      parseInt($("#textbox").val()), // .val() à ajouter !!
      parseInt($("#textbox1").val()),
      parseInt($("#textbox2").val()),
      parseInt($("#textbox3").val()),
      parseInt($("#textbox4").val()),
    ]

    function elem(n){ //fonction pour chiffre >0<20
      for (var i=0; i <= n.length; i++) { //création d'une boucle pour vérifier chacunes des valeurs du tableau
      if(n[i] <=20 && n[i] >=0){ //regex sur n
        return true
      }else{
        return false
      } // fin du else
    } // fin for
  } //fin 2elme

  function appr(moyenne){ // création d'une fonction pour les appréciations
  if(moyenne >= 0 && moyenne < 10){ //si moyenne comprise entre 0 et 10
    return("En dessous de la moyenne, PAS BIEN, BOSSE FEIGNASSE !")
  } else if(moyenne >= 10 && moyenne <13){ // si moyenne comprise entre 10 et 13
    return("Moyen, peut mieux faire")
  } else if(moyenne >= 13 && moyenne <16){ // si moyenne comprise entre 13 et 16
    return("Bien, continue ainsi !")
  } else if(moyenne >= 16 && moyenne <20){ // si moyenne comprise entre 16 et 20
    return("Très bien, Icare est en toi")
  } else if(moyenne === 20) { // si moyenne = 20
    return("Excellent, au dessus c'est le soleil")
  } //fin du else if
} //fin de la fonction appr

var addition = 0; // création d'une variable afin d'automatisé la moyenne
for(var i = 0; i < tabnot.length; i++) { // boucle pour compiler les valeurs, ne pas oubliez de référencer tabnot.
  addition += tabnot[i]; // += est la boucle qui va additionner chacune des valeurs du tableau
} // fin boucle addition

var moyenne = addition / tabnot.length //définition d'une variable qui calculera la moyenne, automatisé

if (elem(tabnot)){ // créa d'un if avec regex pour tester les valeur des inputs.

$("#app").val(appr(moyenne))
$("#moy").val(moyenne)

alert (moyenne + " - " + appr(moyenne)) // résultat affiché si condition respectée.
} // fin de la fonction if regex
}) // fin fonction click
}) //fin fonction pour charger
