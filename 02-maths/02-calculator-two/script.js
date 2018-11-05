/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    var performOperation = function(operation) {
        let nb1 = parseInt(document.querySelector('#op-one').value);
        let nb2 = parseInt(document.querySelector('#op-two').value);
        let result;
        
        switch(operation){
            case "addition" :
            result=(nb1+nb2);
            break;

            case "substraction" :
            result=(nb1-nb2);
            break;

            case "multiplication" :
            result=(nb1*nb2);
            break;

            case "division" :
            result=(nb1/nb2);
            break;
        }

        alert(result)
        
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
