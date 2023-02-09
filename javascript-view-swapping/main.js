var tab = document.querySelector('.tab-container');
var allTab = document.querySelectorAll('.tab')
var allView = document.querySelectorAll('.view');

function tabCheck() {
  if (event.target.matches('.tab')) {
    var data = event.target.getAttribute('data-view');
    for ( i = 0; i< allView.length; i++) {
      if (allView[i].getAttribute('data-view') === data) {
        allView[i].className = 'view'}
        else {allView[i].className ='view hidden'
      }
    }
    for ( i = 0; i < allTab.length; i++) {
      if (allTab[i] === event.target) {
        allTab[i].className = 'tab active'; }
        else {allTab[i].className = 'tab'};
    }
  }
}


tab.addEventListener('click', tabCheck)
