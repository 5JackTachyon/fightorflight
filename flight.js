


var xValue = Number(document.getElementById("Bill").getAttribute("x"))
var yValue = Number(document.getElementById("Bill").getAttribute("y"))
var xProton = Number(document.getElementById("Atom").getAttribute("x"))
var yElectron = Number(document.getElementById("Atom").getAttribute("y"))
var neutron = Number(document.getElementById("Atom").getAttribute("width"))
var quark = Number(document.getElementById("Atom").getAttribute("height"))
//var xPrincipia = Number(document.getElementById("Issac").getAttribute("x"))
//var yPrincipia = Number(document.getElementById("Issac").getAttribute("y"))
//var universalGravWidth = Number(document.getElementById("Issac").getAttribute("width"))
//var universalGravHeight = Number(document.getElementById("Issac").getAttribute("height"))
//var vunerability = false;
//var abdomenHurt = false;
var appleADay = Number(document.getElementById("Issac").getAttribute("opacity"))
var appleADay1 = Number(document.getElementById("Issac1").getAttribute("opacity"))
var hitCount = 0;
var health = 20;
var timeStart = Date.now();
var issacSpeed = 3;
var issacSpeed1 = 3;
var radioActive = false;

document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37) {
  document.getElementById("Bill").setAttribute("x", xValue - 10)
   xValue = xValue - 10;
   health = health - 1;
   document.getElementById("HEALTH").textContent = "Health: " + health;
}

 else if (e.keyCode == 39) {
  document.getElementById("Bill").setAttribute("x", xValue + 10)
     xValue = xValue + 10;
     health = health - 1;
     document.getElementById("HEALTH").textContent = "Health: " + health;
 }
 else if (e.keyCode == 38) {
  document.getElementById("Bill").setAttribute("y", yValue - 10)
   yValue = yValue - 10;
   health = health - 1;
   document.getElementById("HEALTH").textContent = "Health: " + health;
}

 else if (e.keyCode == 40) {
  document.getElementById("Bill").setAttribute("y", yValue + 10)
     yValue = yValue + 10;
     health = health - 1;
     document.getElementById("HEALTH").textContent = "Health: " + health;




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
 if (xValue > xProton && xValue < xProton + neutron && yValue > yElectron && yValue < yElectron + quark){
  radioActive = true;
  if(radioActive == true){
   health = health - 10;
   document.getElementById("HEALTH").textContent = "Health: " + health;
  }
 }


 if(health < 1){
   document.getElementById("Bill").setAttribute("opacity", 0);
   document.getElementById("screen").pauseAnimations()
   document.getElementById("gameOverText").textContent = "You Died!";
 }
 else{
   document.getElementById("gameOverText").textContent = "";
 }

})

document.addEventListener("click", function (e) {

  var xNye = Number(document.getElementById("Bill").getAttribute("x"))
  var yNye = Number(document.getElementById("Bill").getAttribute("y"))
  var xPrincipia = Number(document.getElementById("Issac").getAttribute("x"))
  var yPrincipia = Number(document.getElementById("Issac").getAttribute("y"))
  var universalGravWidth = Number(document.getElementById("Issac").getAttribute("width"))
  var universalGravHeight = Number(document.getElementById("Issac").getAttribute("height"))
  var xPrincipia1 = Number(document.getElementById("Issac1").getAttribute("x"))
  var yPrincipia1 = Number(document.getElementById("Issac1").getAttribute("y"))
  var universalGravWidth1 = Number(document.getElementById("Issac1").getAttribute("width"))
  var universalGravHeight1 = Number(document.getElementById("Issac1").getAttribute("height"))
  var abdomenHurt = false;
  var abdomenHurt1 = false;
  function randomNumberGenerator(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  var value1 = randomNumberGenerator(1,600);
  var value2 = randomNumberGenerator(2,600);

if (xValue > xPrincipia && xValue < xPrincipia + universalGravWidth && yValue > yPrincipia && yValue < yPrincipia + universalGravHeight){
 abdomenHurt = true;
 if(abdomenHurt == true){
   issacSpeed = issacSpeed - 0.5;
   document.getElementById("Prism").setAttribute("dur", issacSpeed);
   document.getElementById("Apple").setAttribute("dur", issacSpeed1);
  document.getElementById("Issac").setAttribute("x", value1)
  hitCount = hitCount + 1;
  health = health + 10;
  document.getElementById("HEALTH").textContent = "Health: " + health;
  document.getElementById("shouldersOfGiants").textContent = "Score: " + hitCount;
 }
}
if (xValue > xPrincipia1 && xValue < xPrincipia1 + universalGravWidth1 && yValue > yPrincipia1 && yValue < yPrincipia1 + universalGravHeight1){
 abdomenHurt1 = true;
 if(abdomenHurt1 == true){
   issacSpeed1 = issacSpeed1 - 0.5;
   document.getElementById("Prism1").setAttribute("dur", issacSpeed1);
   document.getElementById("Apple1").setAttribute("dur", issacSpeed1);
  document.getElementById("Issac1").setAttribute("x", value2)
  hitCount = hitCount + 1;
  health = health + 10;
  document.getElementById("HEALTH").textContent = "Health: " + health;
  document.getElementById("shouldersOfGiants").textContent = "Score: " + hitCount;
 }
}
if(hitCount > 19){
  document.getElementById("gameOverText").textContent = "You Won";
  document.getElementById("screen").pauseAnimations()
  var timeStop = Date.now();
  var finishTime = (timeStop - timeStart)/1000;
  document.getElementById("gravity").textContent = "Time: " + finishTime + " seconds";
}
else{
  document.getElementById("gameOverText").textContent = "";
}


})
