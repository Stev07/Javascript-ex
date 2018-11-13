/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const mdp = document.querySelector('#pass-one');
    const mdp2 =document.querySelector('#pass-two');

    document.querySelector('#run').mdpConfirm.addEventListener('click', ()=>{
        if (mdp.value!=mdp2.value){
            mdp.style.border = "1px solid red";
            mdp2.style.border = "1px solid red";
        } else{
            mdp.style.border = "1px solid green";
            mdp2.style.border = "1px solid green";
        }
    })

})();
