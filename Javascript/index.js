$(document).ready(function(){
    $("#menu").click(function(){
        $("header").toggleClass("toggle");
        $(this).toggleClass("fa-times");
        $("back_to_home").toggleClass("nothing");
    });

    $(window).on("load scroll",function(){
        $("header").removeClass("toggle");
        $("#menu").removeClass("fa-times")
        if($(window).scrollTop() > 0){
            $(".back_to_home").show();
        }
        else{
            $(".back_to_home").hide();
        }

    });
});