

var n = Math.floor(Math.random()*6)+1;
var str = "images/dice"+n+".png";

// document.querySelector(".img1").src = str;

document.querySelector(".img1").setAttribute("src",str);


var n1 = Math.floor(Math.random()*6)+1;
var str1 = "images/dice"+n1+".png";

// document.querySelector(".img2").src = str1;
document.querySelector(".img2").setAttribute("src",str1);

if(n>n1)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(n < n1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}