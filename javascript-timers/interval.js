var countText = document.querySelector('.countdown-display');
var i = 4;
function countDown() {
  if (i > 0) {
    countText.textContent = i;
    i -= 1;
    return i;
  } else {
    countText.textContent = '~Earth Beeeeeloooowww Us~';
    clearInterval(countInterval);
  }

}

var countInterval = setInterval(countDown, 1000);
