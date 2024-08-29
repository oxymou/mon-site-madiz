// Fonction pour afficher la date et l'heure GMT
function updateCalendar() {
    const calendarDisplay = document.getElementById('calendar-display');

    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'GMT', timeZoneName: 'short' };
    const formattedDate = now.toLocaleDateString('fr-FR', options);

    calendarDisplay.textContent = `Nous sommes le ${formattedDate}`;
}

// Mettre à jour le calendrier toutes les secondes
setInterval(updateCalendar, 1000);
