$(document).ready(function(){
        //var counter = $('#TextBox').val();
        $('#clickMe').click( function() {
            var counter = $('#textbox').val();
            counter++ ;
            $('#textbox').val(counter);
    });
    $('#clickme').click( function() {
        var counter = $('#textbox').val();
        counter-- ;
        $('#textbox').val(counter);
});
});
