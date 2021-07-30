var current=1;
$(document).keypress(function(event){

   
   switch (event.keyCode) {
       case 100:if (current%2 !== 0) {
                            
        $("body").css("background-color","white");
        $(".name").css("color","black");
        $(".body").css("color","black");
        $(".square").css("background-color","black");
        $(".place").css("color","black");
        current=current+1;
       } else {
           
        $("body").css("background-color","black");
        $(".name").css("color","white");
        $(".body").css("color","white");
        $(".square").css("background-color","white");
        $(".place").css("color","white");
        current=current+1;
       }
           
           break;
   
       default:alert("Wrong Key to Convert");
           break;
   }
    
})