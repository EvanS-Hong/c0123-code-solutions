var current = document.querySelectorAll("span");
var i = 0;
var counter = 0;
var results = (100 / counter);
function typedLetter() {
  var key = event.key;
    if (key == current[i].textContent) {
      current[i].className = 'correct-letter';
      current[i + 1].className = 'current-type';
      return i++;
    } else {current[i].className = 'wrong-letter';
    }
  }
document.addEventListener('keydown', typedLetter);
