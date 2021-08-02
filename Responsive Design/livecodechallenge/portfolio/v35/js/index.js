var current=new Boolean(true);
$(document).keypress(function(event){

   
//    switch (event.keyCode) {
//        case 100:if (current===true) {
                            
//         $("body").css("background-color","white");
//         $(".name").css("color","black");
//         $(".body").css("color","black");
//         $(".square").css("background-color","black");
//         $(".place").css("color","black");
//         current=false;
//        } else {
           
//         $("body").css("background-color","black");
//         $(".name").css("color","white");
//         $(".body").css("color","white");
//         $(".square").css("background-color","white");
//         $(".place").css("color","white");
//         current=true;
//        }
           
//            break;
   
//        default:alert("Wrong Key to Convert");
//            break;
//    }
//     console.log(event.keyCode);
    if((event.keyCode===100)&& current===true)
    {
        $("body").css("background-color","white");
        $(".name").css("color","black");
        $(".body").css("color","black");
        $(".square").css("background-color","black");
        $(".place").css("color","black");
       $(".gm-box").css("background"," linear-gradient(111deg,#647DEE,#7F53AC)");
    }
    else
    {

        $("body").css("background-color","black");
        $(".name").css("color","white");
        $(".body").css("color","white");
        $(".square").css("background-color","white");
        $(".place").css("color","white");
        $(".gm-box").css("background"," linear-gradient(111deg,#37383D,#535353)");
    }
    current=!current;
});

$(".name").mouseover(function () {
    $("body").css("background-color","white");
    $(".name").css("color","black");
    $(".body").css("color","black");
    $(".square").css("background-color","black");
    $(".place").css("color","black");
    $(".gm-box").css("background"," linear-gradient(111deg,#647DEE,#7F53AC)")
});


$(".name").mouseout(function () {

    $("body").css("background-color","black");
    $(".name").css("color","white");
    $(".body").css("color","white");
    $(".square").css("background-color","white");
    $(".place").css("color","white");
    $(".gm-box").css("background"," linear-gradient(111deg,#37383D,#535353)");
});

var a=new Date();
var hours=a.getHours();
var minutes=a.getMinutes();

 var msg=setTime(hours,minutes);
 $("#new").html(msg);
function setTime(h,m)
{
    var totmin=(h*60)+m;
    if(totmin<690)
    {
        return("GOOD MORNING");
    }
    else if(totmin<900)
    {
        return("GOOD AFTERNOON");
    
    }
    else
    {
      return("GOOD EVENING");
    } 
}