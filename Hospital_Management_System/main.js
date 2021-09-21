$(document).ready(function()
{
    $('.fa-bars').click(function()
    {
        $(this).toggleClass('fa-times')
        $('.nav').toggleClass('nav-toggle')
    });
    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times')
        $('.nav').removeClass('nav-toggle')
    });
    $('.box').magnificPopup({
        type:'image',
        delegate:'a',
        gallery:{
            enabled:true
        }

    });

});