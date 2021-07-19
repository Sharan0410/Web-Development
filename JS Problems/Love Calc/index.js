function lc(){
    var a=document.getElementById("name1").value;
    var b=document.getElementById("name2").value;
    var cs=commonstrings(a,b);
    var percent=(((cs/(a.length+b.length))*100+1));
    var lc=Math.floor(Math.random()*percent)
    if(lc>70)
    {
      document.write("Your love "+lc+"% is awesome");
      document.getElementById("demo").innerHTML ="Your love "+lc+"% is awesome" ;
    }
    else
    {
       document.write("Your love "+ lc+"%  is waste");
       document.getElementById("demo").innerHTML ="Your love "+ lc+"%  is waste";
    }
}

function commonstrings(a,b)
{
    c=0;
    for(var i=0;i<=a.length;i++)
     {
         for(var j=0;j<=b.length;j++){
                if(a[i]==a[j]){
                    c++;
                }
         }
     }
     return c;
}