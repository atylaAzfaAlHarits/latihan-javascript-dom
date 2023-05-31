// preventDefault();
const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');
const name = document.querySelector('.nama');

close.forEach(function(hidden){
    hidden.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    })
});