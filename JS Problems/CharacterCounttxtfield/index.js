i=0;
$("input").keypress(function(){
    $("span").text(i+=1);
});

$("button").click(function()
{
    $("span").text("0");
    $("input").val(" ")
});