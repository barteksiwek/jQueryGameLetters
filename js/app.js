$(document).ready(function() {

    var width = screen.width;
    var height = screen.height;
    var code = 0;

    $('#start').click( function()
    {
        $(this).fadeOut('slow');
        $('#score').show();
        genLetter();
    });

    $(document).keydown( function(event)
    {
        var keycode = event.keyCode;
        var animateBubb = $('.bubble'+ keycode).animate(
            {
                "top" : height+"px",
                "opacity" : 0
            }, 'slow');

        animateBubb.fadeOut('slow').hide( 'slow', function()
            {
                code += 20;
                $('#score').html(code);
                $(this).remove();
            }
        );
    });

    function randomColor()
    {
        var color = '';
        var values = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        for (c = 0; c < 6; c++)
        {
            no = Math.floor(Math.random()*16);
            color += values[no];
        }
        return color;
    }
    console.log(randomColor());

    function genLetter()
    {
        var color = randomColor();
        var k = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
        var ch = String.fromCharCode(k);
        var top = Math.floor(Math.random() * 80 + 10 );
        var left = Math.floor(Math.random() * 80 + 10 ) ;
        $('#container').append('<span class="bubble bubble'+ k +'" style="left: '+ left +'vw;  top: '+ top +'vh; background-color:#'+ color +'">'+ ch +'</span>');
        setTimeout(genLetter, 750);
    }
});