function fizz()
{
    var a=document.getElementById("no1").value;
    var b=document.getElementById("no2").value;
    if(a===b)
    {
        document.write("Same Value");

    }
    else
    {
        for(var i=a;i<=b;i++)
        {
            if(i%3 === 0 && i%5 === 0)
            {
                document.write("FizzBuzz"+"<br>");
            }
            else if(i%3 === 0)
            {
                document.write("Fizz"+"<br>");
            }
            else if(i%5 === 0)
            {
                document.write("Buzz"+"<br>");
            }
            else{
                document.write(i+"<br>");
            }
        }
    }
}