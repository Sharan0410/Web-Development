var a=new Date();
var hours=a.getHours();
var minutes=a.getMinutes();
// var time=hours+":"+minutes;
// document.getElementById("time").innerHTML=time;
 var msg=setTime(hours,minutes);
 document.getElementById("time").innerHTML=msg;
function setTime(h,m)
{
    var totmin=(h*60)+m;
    if(totmin<690 )
    {
        return("Good Morning");
    }
    else if(totmin<900)
    {
        return("Good Afternoon");
    
    }
    else
    {
      return("Good Evening");
    } 
}