/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    // function generateTable() {
    //     const table = document.createElement("table");
    //     const tableBody = document.createElement("tbody");


    //     for (let i = 0; i<11; i++){
    //         let row = document.createElement("tr");
    //     }

    //     const col = document.createElement("td");
    //     tableBody.appendChild(row);
    //     table.appendChild(tableBody);
    //     body.appendChild(table);
    //     table.setAttribute("border", "2");

    // }

    // generateTable();


    function createTable() {
        let rows;
        let table = document.createElement("table");
      
        for (i=1; i <= 10; i++) {
          rows = table.insertRow();
          rows.insertCell().textContent = "Row "+ i ;   
        }
        document.querySelector('#target').appendChild(table);
      }

      createTable();

    

})();
