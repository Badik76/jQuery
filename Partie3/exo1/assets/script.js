$(document).ready(function(){
  $('#clickMe').click( function() {
    var counter = $('#textbox').val();
    counter++ ;
    $('#textbox').val(counter);
  });
});
