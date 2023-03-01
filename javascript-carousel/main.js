var pictures = document.querySelectorAll('img');
var buttons = document.querySelectorAll('.fa-circle');
var buttonRow = document.querySelector('.row2');
var arrowRow = document.querySelector('.row1');
var currentNumber = 0;

function buttonSwap(event) {
  if (event.target.matches('.fa-circle')) {
  for ( var i = 0; i < buttons.length; i++) {
    if (event.target.getAttribute('id') === buttons[i].getAttribute('id')) {
    buttons[currentNumber].className = 'fa-regular fa-circle';
    pictures[currentNumber].className = ('hidden');
    event.target.className = "fa-solid fa-circle";
    pictures[i].classList.remove('hidden');
    currentNumber = i;
    } else {
      buttons[i].className = 'fa-regular fa-circle';
      pictures[i].className = "hidden";
      }
    }
  }
  clearInterval(autoRotate);
  autoRotate = setInterval(autoSwap, 3000);
}

buttonRow.addEventListener('click', buttonSwap);

function arrowSwap(event) {
  if (event.target.matches('.fa-arrow-left')) {
    if (currentNumber != 0) {
      buttons[currentNumber].className = 'fa-regular fa-circle';
      pictures[currentNumber].className = ('hidden');
      currentNumber -= 1;
      pictures[currentNumber].classList.remove('hidden');
      buttons[currentNumber].className = 'fa-solid fa-circle';
    } else {
      buttons[currentNumber].className = 'fa-regular fa-circle';
      pictures[currentNumber].className = ('hidden');
      currentNumber = 4;
      pictures[currentNumber].classList.remove('hidden');
      buttons[currentNumber].className = 'fa-solid fa-circle';
    }
  }
  if (event.target.matches('.fa-arrow-right')) {
   if (currentNumber != 4) {
    buttons[currentNumber].className = 'fa-regular fa-circle';
    pictures[currentNumber].className = ('hidden');
    currentNumber += 1;
    pictures[currentNumber].classList.remove('hidden');
    buttons[currentNumber].className = 'fa-solid fa-circle';
    } else {
    buttons[currentNumber].className = 'fa-regular fa-circle';
    pictures[currentNumber].className = ('hidden');
    currentNumber = 0;
    pictures[currentNumber].classList.remove('hidden');
    buttons[currentNumber].className = 'fa-solid fa-circle';
    }
  } clearInterval(autoRotate);
  autoRotate = setInterval(autoSwap, 3000);
}

arrowRow.addEventListener('click', arrowSwap);

function autoSwap() {
  if (currentNumber != 4) {
    buttons[currentNumber].className = 'fa-regular fa-circle';
    pictures[currentNumber].className = ('hidden');
    currentNumber += 1;
    pictures[currentNumber].classList.remove('hidden');
    buttons[currentNumber].className = 'fa-solid fa-circle';
  } else {
    buttons[currentNumber].className = 'fa-regular fa-circle';
    pictures[currentNumber].className = ('hidden');
    currentNumber = 0;
    pictures[currentNumber].classList.remove('hidden');
    buttons[currentNumber].className = 'fa-solid fa-circle';
  }
}

var autoRotate = setInterval(autoSwap, 3000);
