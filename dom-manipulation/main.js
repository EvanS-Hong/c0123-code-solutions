var buttonPresses = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
hotButton.className = 'hot-button cold';
function clickIncrease(event) {
  clickCount.textContent = 'Clicks: ' + buttonPresses;
  if (buttonPresses < 4) {
    hotButton.className = "hot-button cold";
  } else if (buttonPresses < 7) {
    hotButton.className = "hot-button cool";
  } else if (buttonPresses < 10) {
    hotButton.className = "hot-button tepid";
  } else if (buttonPresses < 13) {
    hotButton.className = "hot-button warm";
  } else if (buttonPresses < 16) {
    hotButton.className = "hot-button hot";
  } else if (buttonPresses > 15) {
    hotButton.className = "hot-button nuclear";
  }
  return buttonPresses ++, hotButton.className;
  }
hotButton.addEventListener('click', clickIncrease);
