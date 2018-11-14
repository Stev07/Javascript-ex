/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
   

    document.querySelector('button#run').addEventListener('click', ()=>{
        let inputYear = document.querySelector('input#year').value;
        let month = 0;
        let date = new Date(inputYear,month,13, 1);
        let month13 = [];
        const monthName = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];


        for (month; month < 12 ; month++){
            date = new Date(inputYear, month,13, 1);
            if (date.getDay() === 5){


                switch (month) {
                    case 0:
                        month = monthName[0];
                        break;
                    case 1:
                        month = monthName[1];
                        break;
                    case 2:
                        month = monthName[2];
                        break;
                    case 3:
                        month = monthName[3];
                        break;
                    case 4:
                        month = monthName[4];
                        break;
                    case 5:
                        month = monthName[5];
                        break;
                    case 6:
                        month = monthName[6];
                        break;
                    case 7:
                        month = monthName[7];
                        break;
                    case 8:
                        month = monthName[8];
                        break;
                    case 9:
                        month = monthName[9];
                        break;
                    case 10:
                        month = monthName[10];
                        break;
                    case 11:
                        month = monthName[11];
                }
                month13.push(month);

            }
        }
        alert(month13);
    })


})();
