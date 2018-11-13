/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];


    let index = 0;

    // document.querySelector('#next').addEventListener('click', ()=>{
    //     if(index==4){
    //         index=0;
    //     } else{
    //         index++;
    //     }
    //     document.querySelector('img').src = gallery[index];
    // });


    // OU


    document.querySelector('#next').addEventListener('click', ()=>{
        index == 4? index = 0 : index++;
        document.querySelector('img').src = gallery[index];
    })

        

})();
