// apuntes .rating es una clase  class=""
//         #app es id, id=""
const ratingContainer = document.querySelector('.rating');
let currentValue=0;
const limit=10;

// (itema,i )  => (_, i) dentro del map(), es igual, donde no se utiliza item
const html = Array.from(Array(limit)).map( (item, i) => {
    return `<div class="item item-${i}" data-pos="${i}"> </div>`;
});      

ratingContainer.innerHTML = html.join('');  // transforma un array a string

document.querySelectorAll('.item').forEach( (item) => {
    item.addEventListener('mouseover', (e) => {
        //console.log("hola");
        const pos =  item.getAttribute("data-pos");
        if (currentValue===parseInt(pos)+1){
            return;
        }

        document.querySelectorAll('.item').forEach((it) => {
           if(it.classList.contains('item-full'))   {
             it.classList.remove('item-full');
           }   
        });

       // console.log(pos);
        for (let index = 0; index <= pos; index++) {
            const square = document.querySelector(`.item-${index}`);
            if(!square.classList.contains('item-full')){
                square.classList.add('item-full');
               // console.log("Agrego..---");  
            }
        }
        currentValue = parseInt(pos)+1;
    });
    item.addEventListener("click", (e) => {
        const pos = item.getAttribute("data-pos");
        currentValue = parseInt(pos)+1;
        console.log(currentValue);
    });

});