$(document).ready(function(){

var regtext = /[a-z-]+/g

    var $prenom = $('#prenom'),
        $nom = $('#nom'),
        $dateDeNaissance = $('#dateDeNaissance'),
        $lnais = $('#lnais'),
        $Sos = $('#Sos'),
        $Emploi = $('#Emploi'),
        $envoi = $('#envoi'),
        $reset = $('#rafraichir'),
        $erreur = $('#erreur'),
        $champ = $('.champ');

        $('#dateDeNaissance').keyup(function(e)
        {
           if($(this).val()[1]=="/")
           {
             var temp = $(this).val();
             $(this).val('');
             $(this).val('0'+temp);
           }
           if($(this).val()[4]=="/")
           {
             var tempo = $(this).val();
             $(this).val('');
             var newTempo = tempo.charAt(0) + tempo.charAt(1) + tempo.charAt(2) + "0" + tempo.charAt(3) + "/";
             $(this).val(newTempo);
           }
           var nb_car = $(this).val().length;
           if((nb_car == 2 || nb_car == 5) && ($(this).val().charAt(4)!="/"))
           {
              $(this).val($(this).val()+'/');
           }
        });

    $champ.keyup(function(){
        if($(this).val().length < 3){ // si la chaîne de caractères est inférieure à 3
            $(this).css({ // on rend le champ rouge
                borderColor : 'red',
	        color : 'red'
            });
         }else{
             $(this).css({ // si tout est bon, on le rend vert
	         borderColor : 'green',
	         color : 'green'
	     });
         }
    });

    $envoi.click(function(e){
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi

        // puis on lance la fonction de vérification sur tous les champs :
        verifier($prenom);
        verifier($nom);
        function valideDate()
        {
            if($('#dateDeNaissance').val().length<10){return false;}

            var jour = $('#dateDeNaissance').val().charAt(0) + $('#dateDeNaissance').val().charAt(1);
            if(jour <1 || jour >31){return false;}
            if(!$.isNumeric(jour)){return false;}

            var mois = $('#dateDeNaissance').val().charAt(3) + $('#dateDeNaissance').val().charAt(4);
            if(!$.isNumeric(mois)){return false;}
            if(mois <1 || mois >12){return false;}

            var annee = $('#dateDeNaissance').val().charAt(6) + $('#dateDeNaissance').val().charAt(7) + $('#dateDeNaissance').val().charAt(8) + $('#dateDeNaissance').val().charAt(9);
            if(!$.isNumeric(annee)){return false;}

            return true;
        };
        verifier($lnais);
        verifier($Emploi)
        verifier($Sos)
    });

    function verifier(champ){
        if(champ.val() == ""){ // si le champ est vide
    	    $erreur.css('display', 'block'); // on affiche le message d'erreur
            champ.css({ // on rend le champ rouge
    	        borderColor : 'red',
    	        color : 'red'
    	    });
}}
envoi.addEventListener("click", function(){
alert( prenom.value + " " + nom.value + ", né(e) le " + dateDeNaissance.value + " à " + lnais.value + " exerce le métier de " + Emploi.value + " dans la société " + Sos.value)
})
});
