console.log('script loaded');

window.onload = function(){
  console.log('page loaded');

  var notice = document.createElement('span');
  notice.className = 'notice';
  notice.innerHTML = 'app loaded';
  var appElement = document.getElementById('content');
  appElement.appendChild(notice);

};
