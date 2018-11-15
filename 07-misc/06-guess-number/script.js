/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const randomNumber = Math.floor(Math.random() * Math.floor(100));
    let reponse = false;
    let essai = 1;

    alert("Devinez le nombre entre 1 et 100")


    while (reponse !== true){
        let valeurATester = prompt ("Votre chiffre/nombre");
        if (valeurATester > randomNumber){
            alert("-")
            essai ++
        }   else if (valeurATester < randomNumber){
            alert('+')
            essai ++
           }
           else{
               alert(`Bien joué, tu as réussi en ${essai} essais`)
               reponse = true;
           }
    }
       
    

})();
