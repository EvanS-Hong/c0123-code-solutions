var openPage = document.querySelector('.open');
var exitPage = document.querySelector('.close');
var  closedPage = document.querySelector('.sub-page-closed');

function openSpam() {
  closedPage.className = "sub-page-opened";
}

function closeSpam() {
  closedPage.className = "sub-page-closed";
}

openPage.addEventListener('click', openSpam);
exitPage.addEventListener('click', closeSpam);
