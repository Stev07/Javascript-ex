/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const createTable = () => {
        let rows;
        const table = document.createElement("table");
      
        for (let i=0; i < 10; i++) {
          rows = table.insertRow();

          for (let y=0; y <10; y++){
            rows.insertCell().textContent = (i+1)*(y+1);
          }
        }

        document.querySelector('#target').appendChild(table);
      }

      createTable();

})();
