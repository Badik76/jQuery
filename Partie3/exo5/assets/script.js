$("#lastName").focus(function(){
  $("#lastName").css("border","1px solid green")
})
$("#firstName").focus(function(){
  $("#firstName").css("border","1px solid green")
})
$("#lastName").focusout(function(){
  $("#lastName").css("border","1px solid red")
})
$("#firstName").focusout(function(){
  $("#firstName").css("border","1px solid red")
})
