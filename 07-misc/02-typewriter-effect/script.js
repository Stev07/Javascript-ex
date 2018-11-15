/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let txt = document.querySelector('#target').innerHTML;
    
    let i = 0;
    
    document.querySelector('#target').innerHTML = " ";

    const newContent = () => {
        if (i< txt.length){
            let vitesse = Math.floor(Math.random() * Math.floor(300))
            document.getElementById('target').innerHTML += txt.charAt(i)
            i++
            setTimeout(newContent,vitesse)
        }
        
    }     
            
    newContent()
})();
