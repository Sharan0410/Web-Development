var i=0;
$("input").keypress({param1:'Keys are passed'},function(event){
    $("span").text((i+=1)+event.data.param1);
});

$("button").click(function(){
    $("span").text("0");
    $("input").val(" ");
    
});