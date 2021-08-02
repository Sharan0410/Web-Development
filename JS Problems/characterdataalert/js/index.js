function keypress(event) {
    var x=event.keyCode;
    document.getElementById("demo").innerHTML=document.getElementById("demo").innerHTML+String.fromCharCode(x);
}

function equal() {
    var y=document.getElementById("text").value;
    if(y)
    {
        document.getElementById("demo").innerHTML=eval(y);
    }
}


function clean() {
    document.getElementById("demo").innerHTML="";
    document.getElementById("text").value="";
}