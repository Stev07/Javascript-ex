/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let today = new Date();
    let date = today.getDate();
    let day = today.getDay();
    let month = today.getMonth()+1;
    let year = today.getFullYear();
    let hour = today.getHours();
    let min = today.getMinutes();
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



// TRANSFORMATION DU MOIS EN LETTRES
    switch (month) {
        case 1:
            month = monthName[0];
            break;
        case 2:
            month = monthName[1];
            break;
        case 3:
            month = monthName[2];
            break;
        case 4:
            month = monthName[3];
            break;
        case 5:
            month = monthName[4];
            break;
        case 6:
            month = monthName[5];
            break;
        case 7:
            month = monthName[6];
            break;
        case 8:
            month = monthName[7];
            break;
        case 9:
            month = monthName[8];
            break;
        case 10:
            month = monthName[9];
            break;
        case 11:
            month = monthName[10];
            break;
        case 12:
            month = monthName[11];
    }


// TRANSFORMATION JOUR EN LETTRES

    switch (day) {
        case 1:
            day = "lundi";
            break;
        case 2:
            day = "mardi";
            break;   
        case 3:
            day = "mercredi";
            break;
        case 4:
            day = "jeudi";
            break;
        case 5:
            day = "vendredi";
            break;
        case 6:
            day = "samedi";
            break;
        case 7:
            day = "dimanche";
            break;         
    }


// EN PLUS COURT ...
    // let date = new Date();
    // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // console.log(
    // Nous sommes le ${date.toLocaleTimeString("fr-FR", options)});


    document.querySelector('#target').innerHTML = `Nous sommes ${day} ${date} ${month} ${year}, ${hour}h${min}`;

})();
