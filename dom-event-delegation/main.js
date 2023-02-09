var taskList = document.querySelector('.task-list');

function targetName() {
  if (event.target.tagName  === 'BUTTON') {
  console.log(event.target);
  console.log('event target tagname: ' + event.target.tagName);
    var close = event.target.closest('.task-list-item')
  console.log(close);
  close.remove();
  } else {
    console.log(event.target);
    console.log('event target tagname: ' + event.target.tagName);
  }
}
taskList.addEventListener('click', targetName);
