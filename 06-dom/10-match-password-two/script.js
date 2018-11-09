/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const mdp = document.querySelector('#pass-one');
    const mdp2 =document.querySelector('#pass-two');
    const mdpConfirm = document.querySelector('#run');

    mdpConfirm.addEventListener('click', ()=>{
        if (mdp.value!=mdp2.value){
            mdp.className = "error";
            mdp2.className = "error";      
        } else{
            mdp.style.border = "2px solid green";
            mdp2.style.border = "2px solid green";
        }
    })

})();
