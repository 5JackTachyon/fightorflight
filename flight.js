


var xValue = Number(document.getElementById("Bill").getAttribute("x"))
var yValue = Number(document.getElementById("Bill").getAttribute("y"))
//var xPrincipia = Number(document.getElementById("Issac").getAttribute("x"))
//var yPrincipia = Number(document.getElementById("Issac").getAttribute("y"))
//var universalGravWidth = Number(document.getElementById("Issac").getAttribute("width"))
//var universalGravHeight = Number(document.getElementById("Issac").getAttribute("height"))
//var vunerability = false;
//var abdomenHurt = false;
var appleADay = Number(document.getElementById("Issac").getAttribute("opacity"))
var hitCount = 0;

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
//  if (e.keyCode == 32) {
  // if(vunerability = true){
    // abdomenHurt = true;
  // }
 //}

//if (xValue > xPrincipia && xValue < xPrincipia + universalGravWidth && yValue > yPrincipia && yValue < yPrincipia + universalGravHeight){
  // vunerability = true;
 //}

 //if(abdomenHurt = true){
//   document.getElementById("Issac").setAttribute("opacity", 0)
 //}

})

document.addEventListener("click", function (e) {

  var xNye = Number(document.getElementById("Bill").getAttribute("x"))
  var yNye = Number(document.getElementById("Bill").getAttribute("y"))
  var xPrincipia = Number(document.getElementById("Issac").getAttribute("x"))
  var yPrincipia = Number(document.getElementById("Issac").getAttribute("y"))
  var universalGravWidth = Number(document.getElementById("Issac").getAttribute("width"))
  var universalGravHeight = Number(document.getElementById("Issac").getAttribute("height"))
  var abdomenHurt = false;
  function randomNumberGenerator(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  var value1 = randomNumberGenerator(1,600);

if (xValue > xPrincipia && xValue < xPrincipia + universalGravWidth && yValue > yPrincipia && yValue < yPrincipia + universalGravHeight){
 abdomenHurt = true;
 if(abdomenHurt == true){
  document.getElementById("Issac").setAttribute("x", value1)
  hitCount = hitCount + 1;
  document.getElementById("shouldersOfGiants").textContent = "Score: " + hitCount;
  if(hitCount = 20){
    document.getElementById("gameOverText").textContent = "You Won";
  }
 }
}



})
