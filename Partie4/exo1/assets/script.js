function comparer(choix1, choix2) { //création d'une fonction qui comparera les résultats et affichera le "gagnant" de la manche
  if (choix1 === choix2) { // si nul
    return "Egalité !"; // = nul
  } else if (choix1 === "Pierre") { //Pierre
    if (choix2 === "Ciseaux") { //vs Ciseaux
      return "Pierre"; // = Pierre
    } else if (choix2 === "Feuille") { // vs Feuille
      return "Feuille"; // = Feuille
    } // fin choix1 = pierre
  } else if (choix1 ==="Feuille") { //Feuille
    if (choix2 === "Pierre") { // vs Pierre
      return "Feuille"; // = Feuille
    } else if (choix2 === "Ciseaux") { // vs Ciseaux
      return "Ciseaux"; // = Ciseaux
    } // fin choix1 = Feuille
  } else if (choix1 === "Ciseaux") { // Ciseaux
    if (choix2 === "Pierre") { // vs Pierre
      return "Pierre"; // = Pierre
    } else if (choix2 === "Feuille") { // vs Feuille
      return "Ciseaux"; // = Ciseaux
    }
  } // fin choix1 = Ciseaux
} // fin fonction compater

var compteurM = 0 // compteur de manche
var playerscore = 0 // compteur pour le score du joueur
var cpuscore = 0 // compteur pour le score de l'ordi.


$('#clickme').click(function(LeJeuMaggle){ // LE JEU MOUAHAHAHAHAHAHAH
compteurM++ //lancement du compteur de manche

  var cIA = Math.random();  //Création d'une variable pour l'aléatoire
  if (cIA < 0.34) {
    cIA = ("Pierre");
  } else if(cIA <= 0.67) {
    cIA = ("Feuille");
  } else {
    cIA = ("Ciseaux");
  }

  console.log("Ordinateur:", cIA); //réponse IA dans consollog

  var User = prompt("Choisissez-vous Pierre, Feuille, ou Ciseaux ?");   // choix du joueur => A MODIF par modal

  var resultat = comparer(User, cIA); //création d'une var résultat qui se base sur la fonction comparer défini avant.

  if (resultat === "Egalité !") { // if pour définir le vainqueur se basant sur l'égalité.
    alert("=> Egalité !");  // si égal
  } else if (resultat === User) { // si le choix user est identique au résultat alors il remporte la manche.
    alert("=> Gagnant de la manche : TOI !");
    playerscore++; //augmentation du score player
  } else { //sinon IA vainqueur
    alert("=> Gagnant de la manche : l'IA");
    cpuscore++; // augmentation du score IA
  }


var poureusit = Math.round(playerscore/compteurM*100) // variable pour le % /\ fin de code pour qu'il fonctionne

$("#win").val(playerscore)
$("#loose").val(cpuscore)
$("#pourcent").val(poureusit + "%")
})
