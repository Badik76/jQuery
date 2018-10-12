$('#text').keydown(function(e){
  // var WW = $(window).width() //définition d'un variable sur la hauteur max
  // var WH = $(window).height()//définition d'une variable sur la longueur max
  // var wh = WH < $("#yellow").height() //variable
  // var ww = WW < $("#yellow").width() //  variable

  if (e.which == 39) { //Vers la droite
    posX = parseInt($('#yellow').css('left'));
      $('#yellow').css('left', posX+10);
  }
  if (e.which == 37) { // Vers la gauche
    posX = parseInt($('#yellow').css('left'));
      $('#yellow').css('left', posX-10);
  }
  if (e.which == 40) {// Vers le bas
    posY = parseInt($('#yellow').css('top'));
      $('#yellow').css('top', posY+10);
  }
  if (e.which == 38) {// Vers le haut
    posY = parseInt($('#yellow').css('top'));
      $('#yellow').css('top', posY-10);
  }

  var offset = $('#yellow').offset();
  offset.left
});
