document.addEventListener("DOMContentLoaded", function () {
    const kalenderBody = document.getElementById("kalender-body");
    const kalenderTitel = document.getElementById("kalender-titel");

    const jetzt = new Date();
    const monat = jetzt.getMonth();
    const jahr = jetzt.getFullYear();

    const monate = [
        "Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];

    kalenderTitel.innerText = `${monate[monat]} ${jahr}`;

    const ersterTag = new Date(jahr, monat, 1).getDay();
    const letzteTag = new Date(jahr, monat + 1, 0).getDate();

    let kalenderHTML = "";
    let tagNummer = 1;
    let gestartet = false;

    for (let i = 0; i < 6; i++) {
        let row = "<tr>";

        for (let j = 0; j < 7; j++) {
            if (!gestartet && j === (ersterTag === 0 ? 6 : ersterTag - 1)) {
                gestartet = true;
            }

            if (gestartet && tagNummer <= letzteTag) {
                let extraClass = j === 3 ? ' donnerstag' : ''; 
                let text = j === 3 ? `<br>Mathe Nachhilfe 16:30 Uhr` : '';
                row += `<td class="${extraClass}">${tagNummer}${text}</td>`;
                tagNummer++;
            } else {
                row += "<td></td>";
            }
        }

        row += "</tr>";
        kalenderHTML += row;

        if (tagNummer > letzteTag) break;
    }

    kalenderBody.innerHTML = kalenderHTML;
});
