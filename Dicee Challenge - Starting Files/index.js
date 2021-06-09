var rn1=Math.floor(Math.random() *6) +1;
var rdi1="dice"+ rn1 +".png";
var ris1="images/"+rdi1;
var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",ris1);

var rn2=Math.floor(Math.random() *6) +1;
var rdi2="dice"+ rn2 +".png";
var ris2="images/"+rdi2;
var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",ris2);


if(rn1 > rn2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins"


}

else if(rn2 > rn1)
{
    
    document.querySelector("h1").innerHTML="Player 2 Wins"

}
else
{
    document.querySelector("h1").innerHTML="Draw"
}