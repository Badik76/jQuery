var yelwidt = $("#yellow").width() //définition d'un variable sur la hauteur max
var yelheig = $("#yellow").height()//définition d'une variable sur la longueur max

$('#text').keydown(function(e){ //association de la div au controle du pavé directionnel
  var offset = $("#yellow").offset() //posi yellow avec offset

  if (e.which == 39) { //Vers la droite
    if ((offset.left + yelwidt) < $(window).width()){ // if left + yellow < width fenêtre +10px.
      $('#yellow').css('left',offset.left + 10 + 'px');
    } else { // si superieur, on repart de d'un left 0
    $('#yellow').css('left','5px');
  }
}
if (e.which == 37) { // Vers la gauche
  if (offset.left <= 0){ // if left =< 0, retour left windows
    $('#yellow').css('left',$(window).width() - yelwidt + 'px');
  } else { // if left < widht  windows - 10px.
    $('#yellow').css('left',offset.left - 10 + 'px');
  }
}
if (e.which == 40) { // Vers le bas
  if ((offset.top + yelheig) < $(window).height()){ //if emplacement yellow ne dépasse pas la fenetre alors
    $('#yellow').css('top',offset.top + 10 + 'px'); //position augmenter de 10px sur le top
  } else { // si superieur, on repart d'un top 0.
  $('#yellow').css('top','15px');
}
}
if (e.which == 38) { // Vers le haut
  if (offset.top <= 0){ // if top =< à 0, retour
    $('#yellow').css('top',$(window).height() - yelheig + 'px');
  } else { // si supérieur on retire 10.
    $('#yellow').css('top',offset.top - 10 + 'px');
  }
}
}); // fin de la fonction du pavé directio
