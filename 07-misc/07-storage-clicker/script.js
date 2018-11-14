/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // localStorage.removeItem("#target")
    let target = localStorage.getItem("#target");

    document.querySelector('#target').innerHTML = target;

    document.querySelector('#increment').addEventListener('click', () => {

        target != null ?
        target++:
        target = 0;
        
        document.querySelector('#target').innerHTML = target;

        localStorage.setItem("#target",target);
    })

})();