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
  document.getElementById('main').style.display = 'block';
  document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
  document.getElementById('main').src = '/sites/kalender.html';
  notificationText.innerHTML = "Kalender geladen";
  blendIn();
});
document.getElementById('link2').addEventListener('click', function(){
  document.getElementById('main').style.display = 'none';
  document.getElementsByClassName('uebungen-container')[0].style.display = 'block';
  notificationText.innerHTML = "Übungen geladen";
  blendIn();
});
document.getElementById('link3').addEventListener('click', function(){
  document.getElementById('main').style.display = 'block';
  document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
  document.getElementById('main').src = '/sites/loesungen.html';
  notificationText.innerHTML = "Lösungen geladen";
  blendIn();
});
document.getElementById('link4').addEventListener('click', function(){
  document.getElementById('main').style.display = 'block';
  document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
  document.getElementById('main').src = '/sites/rueckblick.html';
  notificationText.innerHTML = "Rückblick geladen";
  blendIn();
});

document.getElementById('ueb0304').addEventListener('click', function() {
    const dateiURL = 'https://lehradt.github.io/mathe-nachhilfe/ressources/uebungen/1_lineare_gleichungen.pdf';
    window.open(dateiURL, '_blank');
});
