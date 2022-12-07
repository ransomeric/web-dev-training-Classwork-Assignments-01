var number = document.getElementById("number");
var result = document.getElementById("numberText");

function convert()
{
  var sqRoot = Math.sqrt(number.value);
  result.innerHTML = sqRoot.toFixed(2);
}

function createEventListener()
{
  var calcBtn = document.getElementById("calculate");
  
  if (calcBtn.addEventListener)
  {
    calcBtn.addEventListener("click", convert, false);
  }
  else if (calcBtn.attachEvent)
  {
    calcBtn.attachEvent("onclick", convert);
  }
}

if (window.addEventListener)
{
  window.addEventListener("load", createEventListener, false);
}
else if (window.attachEvent)
{
  window.attachEvent("onload", createEventListener);
}