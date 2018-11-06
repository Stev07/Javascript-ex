/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const btn1 = document.querySelector('#red') ;
    const btn2 = document.querySelector('#green') ;
    const btn3 = document.querySelector('#yellow') ;
    const btn4 = document.querySelector('#blue') ;

    btn1.addEventListener('click', ()=>{
        btn1.style.backgroundColor = "red";
    })

    btn2.addEventListener('click', ()=>{
        btn2.style.backgroundColor = "green";
    })

    btn3.addEventListener('click', ()=>{
        btn3.style.backgroundColor = "yellow";
    })

    btn4.addEventListener('click', ()=>{
        btn4.style.backgroundColor = "blue";
    })

})();
