$(document).keypress(function(event){
    if(event.keyCode === 108)
    $("body").css("background-color","white");
    $(".name").css("color","black");
    $(".body").css("color","black");
    $(".square").css("background-color","black");
    $(".place").css("color","black");
    if(event.keyCode === 100)
    $("body").css("background-color","black");
    $(".name").css("color","white");
    $(".body").css("color","white");
    $(".square").css("background-color","white");
    $(".place").css("color","white");
})