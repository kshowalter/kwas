window.onload = function(){
  console.log('page loaded');

  var notice = document.createElement('span');
  notice.className = 'notice';
  notice.innerHTML = 'ES file loaded';
  var appElement = document.getElementById('content');
  appElement.appendChild(notice);

};
