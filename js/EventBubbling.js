// preventDefault();
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// const name = document.querySelector('.nama');

// close.forEach(function(hidden){
//     hidden.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     })
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(cardst){
//     card.addEventListener('click', function(e){

//     })
// })


const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})