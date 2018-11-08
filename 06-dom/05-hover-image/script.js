/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
;   
    const attr = document.querySelector('img').getAttribute('src');
    console.log(attr);

    document.querySelector('img').addEventListener('mouseenter', ()=>{

        document.querySelector('img').src = document.querySelector('img').getAttribute('data-hover');
    })

    document.querySelector('img').addEventListener('mouseleave', ()=>{

        document.querySelector('img').src = attr;
    })


})();
