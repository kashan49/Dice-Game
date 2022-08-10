
var n1=Math.floor(Math.random() *6)+1;
 var ranimg="images/dice"+n1+".png";

  document.querySelectorAll("img")[0].setAttribute("src", ranimg);

 var n2=Math.floor(Math.random()*6)+1;
 var ranimg1="images/dice"+n2+".png";
document.querySelectorAll("img")[1].setAttribute("src", ranimg1);
 
if(n1>n2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(n1<n2){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

