/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const input = document.querySelector('#pass-one');


    input.addEventListener('input', ()=>{
        const inputArray = Array.from(input.value);
        let compteur = 0;
        
        for (let i = 0; i<inputArray.length; i++){
            isNaN(inputArray[i])? compteur+=0: compteur++ ;
        }

        // if (inputArray.length>7 && compteur>1){
        //     document.querySelector('span#validity.indicator').innerHTML = "OK";
        // }else{
        //     document.querySelector('span#validity.indicator').innerHTML = "Pas ok";
        // }

        inputArray.length>7 && compteur>1?
            document.querySelector('span#validity.indicator').innerHTML = "OK" :
            document.querySelector('span#validity.indicator').innerHTML = "Pas ok";

        });



})();
