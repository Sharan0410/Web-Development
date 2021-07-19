
    //var n=document.getElementById("nos").value;
    // var n=prompt('ENter No');
    // var output=[0,1];
    // for(var i=2;i<n;i++){
    //     c=output[i-1]+output[i-2];
    //     output.push(c);
    // }
    // alert(output);
function fib()
{
    var n=document.getElementById("no").value;
    var a=-1;
    var b=1;
    for(var i=0;i<n;i++)
    {
        var c=a+b
        document.write(c+"<br>")
        a=b;
        b=c;
    }
}

