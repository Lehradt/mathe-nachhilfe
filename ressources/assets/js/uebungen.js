document.getElementById('ueb0304').addEventListener('click', function() {
    const dateiURL = 'https://lehradt.github.io/mathe-nachhilfe/ressources/uebungen/1_lineare_gleichungen.pdf';
    const link = document.createElement('a');
    link.href = dateiURL;
    link.download = '1_lineare_gleichungen.pdf';
    link.click();
});
