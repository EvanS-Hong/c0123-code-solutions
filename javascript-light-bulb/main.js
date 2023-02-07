var light = document.querySelector('.bright-button');
var lightBackground = document.querySelector('.bright-background');
var dark = document.querySelector('.dark-button');
var darkBackground = document.querySelector('.dark-background');
function elementSwitch() {
  if (light.className == "bright-button") {
    light.className = "dark-button";
    lightBackground.className = "dark-background";
  } else { light.className = "bright-button";
lightBackground.className = "bright-background" }
}

light.addEventListener('click', elementSwitch);
