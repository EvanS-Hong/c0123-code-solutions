function changeTitle() {
  var title = document.querySelector('.message');
  title.textContent = 'Hello There';
}

setTimeout(changeTitle, 2000)
