const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
function blendIn(){
  notification.style.transform = 'translateY(80px)';
  setTimeout(() => {
    notification.style.transform = 'translateY(0px)';
    notificationText.innerHTML = '';
  }, 3000);
};
document.getElementById("aleft").addEventListener('click', function(){
  window.history.back();
  notificationText.innerHTML = "Vorherige Seite geladen";
  blendIn();
});
document.getElementById("aright").addEventListener('click', function(){
  window.history.forward();
  notificationText.innerHTML = "Nächste Seite geladen";
  blendIn();
});
document.getElementById("reload").addEventListener('click', function(){
  window.location.reload();
  notificationText.innerHTML = "Seite neu geladen";
  blendIn();
});
document.getElementById('opener').addEventListener('click', function(){
  document.getElementById('nav').classList.toggle('open');
  document.getElementById('opener').classList.toggle('open');
  this.querySelector('i').classList.toggle('fa-angle-down');
  this.querySelector('i').classList.toggle('fa-angle-up');
});
document.getElementById('link1').addEventListener('click', function(){
  document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/kalender.html';
  notificationText.innerHTML = "Kalender geladen";
  blendIn();
});
document.getElementById('link2').addEventListener('click', function(){
  document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/uebungen.html';
  notificationText.innerHTML = "Übungen geladen";
  blendIn();
});
document.getElementById('link3').addEventListener('click', function(){
  document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/loesungen.html';
  notificationText.innerHTML = "Lösungen geladen";
  blendIn();
});
document.getElementById('link4').addEventListener('click', function(){
  document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/rueckblick.html';
  notificationText.innerHTML = "Rückblick geladen";
  blendIn();
});
