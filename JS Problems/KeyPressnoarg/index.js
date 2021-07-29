var i=0;
$("p").keypress(function(){
    $("span").text(i+=1);
});
$("button").click(function(){
    $("p").keypress();
});