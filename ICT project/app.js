function openFunction(){
  document.getElementById("menu").style.width="300px";
  document.getElementById("mainbox").style.marginLeft="300px";
  document.getElementById("mainbox").innerHTML="Click on the Cross to Close the Menu";
}
function closeFunction(){
  document.getElementById("menu").style.width="0px";
  document.getElementById("mainbox").style.marginLeft="0px";
  document.getElementById("mainbox").innerHTML="&#9776; Open menu";
}
