// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// })


// DOM Traversal
const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');
const name = document.querySelector('.nama');

// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(e){
        // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none'
//     })
// }

close.forEach(function(hidden){
    hidden.addEventListener('click', function(e) {
        // parentElement (element)
        e.target.parentElement.style.display = 'none';
    })
});
// contoh ke dua dari parentElement
console.log(name.parentElement.parentElement);



// parentNode (nodeList)
console.log(name.parentNode);
// contoh kedua parentNode
console.log(name.parentNode.parentNode);


// nextSibling (element)
consolegit p.log(name.nextSibling);
// contoh kedua nextSibling
console.log(name.nextSibling.nextSibling);

// nextElementSibling (element)
console.log(name.nextElementSibling);
// contoh kedua nextElementSibling
console.log(name.nextElementSibling.nextElementSibling);

// previousSibling (nodeList)
console.log(name.previousSibling);
// contoh kedua previousSibling
console.log(name.previousSibling.previousSibling);

// previousElementSibling (element)
console.log(name.previousElementSibling);
// contoh kedua previousElementSibling
console.log(name.previousElementSibling.previousElementSibling);