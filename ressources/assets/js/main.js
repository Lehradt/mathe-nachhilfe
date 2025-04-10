document.addEventListener("DOMContentLoaded", function () {
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notificationText');
  const nav = document.getElementById('nav');
  const opener = document.getElementById('opener');
  const icon = opener ? opener.querySelector('i') : null;

  let inactivityTimer;

  function blendIn(message) {
    notificationText.innerHTML = message;
    notification.style.transform = 'translateY(80px)';
    setTimeout(() => {
      notification.style.transform = 'translateY(0px)';
      notificationText.innerHTML = '';
    }, 3000);
  }

  function closeNav() {
    nav.classList.remove('open');
    opener.classList.remove('open');
    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');
  }

  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    localStorage.setItem('lastInteraction', new Date().getTime().toString());

    inactivityTimer = setTimeout(() => {
      localStorage.removeItem('currentTab');
      localStorage.removeItem('tabTimestamp');
      document.getElementById('main').style.display = 'none';
      document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
      document.getElementById('home').style.display = 'block';
      blendIn("Zurück zur Startseite wegen Inaktivität");
    }, 30 * 60 * 1000);
  }

  function checkInactivity() {
    const lastInteraction = localStorage.getItem('lastInteraction');
    if (lastInteraction) {
      const timePassed = new Date().getTime() - parseInt(lastInteraction, 10);
      if (timePassed > 30 * 60 * 1000) {
        localStorage.removeItem('currentTab');
        localStorage.removeItem('tabTimestamp');
        document.getElementById('main').style.display = 'none';
        document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
        document.getElementById('home').style.display = 'block';
        blendIn("Zurück zur Startseite wegen Inaktivität");
      }
    }
  }

  function setTab(tabName) {
    localStorage.setItem('currentTab', tabName);
    localStorage.setItem('tabTimestamp', new Date().getTime().toString());
    resetInactivityTimer();
  }

  window.onload = () => {
    checkInactivity();
    resetInactivityTimer();

    const currentTab = localStorage.getItem('currentTab');
    if (currentTab === 'kalender') {
      document.getElementById('main').style.display = 'block';
      document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
      document.getElementById('home').style.display = 'none';
      document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/kalender.html';
    } else if (currentTab === 'loesungen') {
      document.getElementById('main').style.display = 'block';
      document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
      document.getElementById('home').style.display = 'none';
      document.getElementById('main').src = '/sites/loesungen.html';
    } else if (currentTab === 'contact') {
      document.getElementById('main').style.display = 'block';
      document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
      document.getElementById('home').style.display = 'none';
      document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/contact.html';
    } else if (currentTab === 'uebungen') {
      document.getElementById('main').style.display = 'none';
      document.getElementsByClassName('uebungen-container')[0].style.display = 'block';
      document.getElementById('home').style.display = 'none';
    } else {
      document.getElementById('main').style.display = 'none';
      document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
      document.getElementById('home').style.display = 'block';
    }
  };

  document.getElementById('link1').addEventListener('click', function() {
    document.getElementById('main').style.display = 'block';
    document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/kalender.html';
    setTab('kalender');
    blendIn("Kalender geladen");
  });

  document.getElementById('link2').addEventListener('click', function() {
    document.getElementById('main').style.display = 'none';
    document.getElementsByClassName('uebungen-container')[0].style.display = 'block';
    document.getElementById('home').style.display = 'none';
    setTab('uebungen');
    blendIn("Übungen geladen");
  });

  document.getElementById('link3').addEventListener('click', function() {
    document.getElementById('main').style.display = 'block';
    document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/loesungen.html';
    setTab('loesungen');
    blendIn("Lösungen geladen");
  });

  document.getElementById('link4').addEventListener('click', function() {
    document.getElementById('main').style.display = 'block';
    document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/contact.html';
    setTab('contact');
    blendIn("Kontaktinfos geladen");
  });

  document.getElementById("aleft").addEventListener('click', function() {
    window.history.back();
    blendIn("Vorherige Seite geladen");
    resetInactivityTimer();
  });

  document.getElementById("aright").addEventListener('click', function() {
    window.history.forward();
    blendIn("Nächste Seite geladen");
    resetInactivityTimer();
  });

  document.getElementById("reload").addEventListener('click', function() {
    window.location.reload();
    blendIn("Seite neu geladen");
    resetInactivityTimer();
  });

  if (opener) {
    opener.addEventListener('click', function() {
      nav.classList.toggle('open');
      opener.classList.toggle('open');
      if (icon) {
        icon.classList.toggle('fa-angle-down');
        icon.classList.toggle('fa-angle-up');
      }
      resetInactivityTimer();
    });
  }

  document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', function() {
      closeNav();
      resetInactivityTimer();
    });
  });
  document.getElementById('icon').addEventListener('click', function() {
    localStorage.removeItem('currentTab');
    localStorage.removeItem('tabTimestamp');
    document.getElementById('main').style.display = 'none';
    document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
    document.getElementById('home').style.display = 'block';
    blendIn("Zurück zur Startseite");
  });
  document.getElementById('homeLink1').addEventListener('click', function() {
    document.getElementById('main').style.display = 'block';
    document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/kalender.html';
    setTab('kalender');
    blendIn("Kalender geladen");
  });

  document.getElementById('homeLink2').addEventListener('click', function() {
    document.getElementById('main').style.display = 'none';
    document.getElementsByClassName('uebungen-container')[0].style.display = 'block';
    document.getElementById('home').style.display = 'none';
    setTab('uebungen');
    blendIn("Übungen geladen");
  });

  document.getElementById('homeLink3').addEventListener('click', function() {
    document.getElementById('main').style.display = 'block';
    document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/loesungen.html';
    setTab('loesungen');
    blendIn("Lösungen geladen");
  });

  document.getElementById('homeLink4').addEventListener('click', function() {
    document.getElementById('main').style.display = 'block';
    document.getElementsByClassName('uebungen-container')[0].style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('main').src = 'https://lehradt.github.io/mathe-nachhilfe/sites/contact.html';
    setTab('contact');
    blendIn("Kontaktinfos geladen");
  });
  
  document.getElementById('download').addEventListener('click', function(event) {
    event.preventDefault();
    const fileUrl = "https://lehradt.github.io/mathe-nachhilfe/ressources/download/calc.html";
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = "calculator_v1_0.html";
    link.click();
});

  document.getElementById('ueb0304').addEventListener('click', function() {
    const dateiURL = 'https://lehradt.github.io/mathe-nachhilfe/ressources/uebungen/1_lineare_gleichungen.pdf';
    window.open(dateiURL, '_blank');
    resetInactivityTimer();
  });
  document.getElementById('ueb1004').addEventListener('click', function() {
    const dateiURL = 'https://lehradt.github.io/mathe-nachhilfe/ressources/uebungen/Zahlenmengen.png';
    window.open(dateiURL, '_blank');
    resetInactivityTimer();
  });
  document.getElementById('ueb1004_2').addEventListener('click', function() {
    const dateiURL = 'https://lehradt.github.io/mathe-nachhilfe/ressources/uebungen/2_multiplikatoin_von_summentermen.pdf';
    window.open(dateiURL, '_blank');
    resetInactivityTimer();
  });
  document.getElementById('ueb1004_3').addEventListener('click', function() {
    const dateiURL = 'https://lehradt.github.io/mathe-nachhilfe/ressources/uebungen/3_vermischte_uebungen.pdf';
    window.open(dateiURL, '_blank');
    resetInactivityTimer();
  });
});
