$("#green").mouseover(function(){
$("#text").css("color","green")
})
$("#red").mouseover(function(){
$("#text").css("color","red")
})
$("#blue").mouseover(function(){
$("#text").css("color","blue")
})
$("#blue, #red, #green").mouseout(function(){
$("#text").css("color","white")
})
