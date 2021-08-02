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
       
    }
    else
    {

        $("body").css("background-color","black");
        $(".name").css("color","white");
        $(".body").css("color","white");
        $(".square").css("background-color","white");
        $(".place").css("color","white");
        
    }
    current=!current;
});

$(".name").mouseover(function () {
    $("body").css("background-color","white");
    $(".name").css("color","black");
    $(".body").css("color","black");
    $(".square").css("background-color","black");
    $(".place").css("color","black");
});


$(".name").mouseout(function () {

    $("body").css("background-color","black");
    $(".name").css("color","white");
    $(".body").css("color","white");
    $(".square").css("background-color","white");
    $(".place").css("color","white");
});