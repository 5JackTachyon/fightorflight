


var xValue = Number(document.getElementById("Bill").getAttribute("x"))
var yValue = Number(document.getElementById("Bill").getAttribute("y"))
var xPrincipia = Number(document.getElementById("Issac").getAttribute("x"))
var yPrincipia = Number(document.getElementById("Issac").getAttribute("y"))
var universalGravWidth = Number(document.getElementById("Issac").getAttribute("width"))
var universalGravHeight = Number(document.getElementById("Issac").getAttribute("height"))
var vunerability = false;
var abdomenHurt = false;

document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37) {
  document.getElementById("Bill").setAttribute("x", xValue - 10)
   xValue = xValue - 10;
}

 else if (e.keyCode == 39) {
  document.getElementById("Bill").setAttribute("x", xValue + 10)
     xValue = xValue + 10;
 }
 else if (e.keyCode == 38) {
  document.getElementById("Bill").setAttribute("y", yValue - 10)
   yValue = yValue - 10;
}

 else if (e.keyCode == 40) {
  document.getElementById("Bill").setAttribute("y", yValue + 10)
     yValue = yValue + 10;
 }
 if (e.keyCode == 32) {
   if(vunerability = true){
     abdomenHurt = true;
   }
 }

 if (xValue > xPrincipia & xValue < xPrincipia + universalGravWidth & yValue > yPrincipia & yValue < yPrincipia + universalGravHeight){
   vunerability = true;
 }

 if(abdomenHurt = true){
   document.getElementById("Issac").setAttribute("opacity", 0)
 }

})
