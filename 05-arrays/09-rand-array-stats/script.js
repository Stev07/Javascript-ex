/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector('#run').addEventListener('click', ()=>{
        
        function nombreRandom(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }


          let arr = [];
          let casesARemplir = document.querySelectorAll('td');
          let casesARemplirArr = Array.prototype.slice.call(casesARemplir);

          for (let i = 0; i < casesARemplirArr.length; i++) {       
            let temp = nombreRandom(101);
            arr.push(temp);
            casesARemplirArr[i].innerHTML = temp;
          }

          document.querySelector("#min").innerHTML = Math.min(... arr);
          document.querySelector("#max").innerHTML = Math.max(... arr);

          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          let somme = arr.reduce(reducer);
          document.querySelector("#sum").innerHTML = somme;
          document.querySelector("#average").innerHTML = somme/arr.length ;



        })

})();
