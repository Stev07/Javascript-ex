/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // const btn1 = document.querySelector('#red') ;
    // const btn2 = document.querySelector('#green') ;
    // const btn3 = document.querySelector('#yellow') ;
    // const btn4 = document.querySelector('#blue') ;
    // const html = document.querySelector ("html");

    // btn1.addEventListener('click', ()=>{
    //     html.style.backgroundColor = "red";
    // })

    // btn2.addEventListener('click', ()=>{
    //     html.style.backgroundColor = "green";
    // })

    // btn3.addEventListener('click', ()=>{
    //     html.style.backgroundColor = "yellow";
    // })

    // btn4.addEventListener('click', ()=>{
    //     html.style.backgroundColor = "blue";
    // })

    let btn = document.querySelectorAll('button');
   
    btn.forEach((item)=>{
         item.addEventListener('click', ()=>{
            let temp = item.getAttribute('id');
            document.documentElement.style.backgroundColor = temp;
    })
       
    });


})();
