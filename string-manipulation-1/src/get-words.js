/* exported getWords */
function getWords(string) {
  if (string === '') {
    return string.split('');
  }else if (typeof string === 'string') {
    return string.split(" ");
  }
  }
