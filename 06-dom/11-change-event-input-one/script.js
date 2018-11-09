/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   const input = document.querySelector('#pass-one');
   let counter = document.querySelector('#counter');

   
   input.maxLength=10;

    input.addEventListener('input', ()=>{
        counter.innerHTML = input.value.length +"/10";
        });

})();
