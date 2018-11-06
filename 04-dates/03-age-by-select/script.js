/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    function calculAge(strDate) {
        strDate = strDate.split('/');
        let birthMonth = strDate[1]-1,
            birthDay = strDate[0],
            now = new Date(),
            nowMonth = now.getMonth(),
            nowDay = now.getDate(),
            age = now.getFullYear()-strDate[2];
         
        if(nowMonth<birthMonth || nowMonth==birthMonth && nowDay<birthDay) {
            age--;
        }
        return age;
    }

    document.querySelector('#run').addEventListener('click', ()=>{
        let day = document.querySelector("select#dob-day").value;
        let month = document.querySelector("select#dob-month").value;
        let year = document.querySelector("select#dob-year").value;

        alert(calculAge(`${day}/${month}/${year}`))
    } )

})();
