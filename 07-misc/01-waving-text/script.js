/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const txt = document.querySelector('#target').innerHTML
    const txtArray = [...txt]
    let newTxt = ""
    const sizes = [20, 24, 28, 32, 36, 40, 36, 32, 28, 24, 20]
    let index = sizes.length
    
    for (i = 0; i < txtArray.length; i++) {
        if (index < sizes.length) {
            size = sizes[index]
            index++
        } else {
            index = 0
            size = sizes[index]
            index++
        }
        newTxt += "<span style=\"font-size:" + size + "px;\">" + txtArray[i] + "</span>"
    }
   
document.querySelector('#target').innerHTML = newTxt

})();
