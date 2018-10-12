var choixOrdi = Math.floor((Math.random() * 100) + 1); //vaiable qui créer un chiffre aléatoire à trouver.
var compteur = 0 //la variable qui compte
$("#submit").on("click", function(){ //définition d'une fonction click au bouton
var choixUtilisateur = parseInt($("#textbox").val()); //variable du choix de l'utilisateur.
  // console.log(choixOrdi); //choix de l'ordi dans la console. En com car nous ne voulons pas l'affichier
    compteur++     //le compteur qui monte à chaque click
  if (choixOrdi !== choixUtilisateur) { //fonction if si le résultat n'est pas égal
    if (choixUtilisateur > choixOrdi) { //if si choix utilisateur est supérieur à celui de l'ordi
      alert("Pluuus Ptit mon p'tit !");//réponse affichée
    }else{//si utilisateur < ordi alors
  alert("PLUUUUUUUS HAUUUUUT, plus graaaand, pluuuuus fort !"); // réponse si uti<ordinateur
}}else{//si ordi=uti alors
  alert("Correcte, Félicitation t'es un bon, tu as trouvé le bon chiffre bravo après " + compteur +" tentatives.");//si réponse positive du premier if
}//fin du else
})//fin de la fonction click.
