//rectangles
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "red";
ctx.rect(5, 5, 290, 140);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(30, 30, 50, 50);
ctx.stroke();

// Blue rectangle
ctx.beginPath();
ctx.lineWidth = "10";
ctx.strokeStyle = "blue";
ctx.rect(50, 50, 150, 80);
ctx.stroke()
//rectangles

//les fonctions
$("#yellow").click(function(){//function 1
    if( $('#myCanvas').height() < 100 ) { // si height <100px alors
      $('#myCanvas').css('height', $('#myCanvas').height()+10+"px"); //+ 10px height rectA
    } else {//Si pas vérif
      $('#myCanvas').css('height', '10px'); // height=10px
    }//fin else
  })//fin fclick
$("#green").click(function(){ //fonction boutton 2
$("#myCanvas").css('border','5px solid green') ////bordure green
})
$("#red").click(function(){// fonction 3
$("#myCanvas").css('border', '1px solid #d3d3d3') // retour "initial"
})
$("#blue").click(function(){//fonction 4
$("#myCanvas").hide()//fait .hide
})
$("#orange").click(function(){//fonction 5
$("#myCanvas").show()//.show
})
