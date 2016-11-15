


var xValue = Number(document.getElementById("Bill").getAttribute("x"))
var yValue = Number(document.getElementById("Bill").getAttribute("y"))


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
})
