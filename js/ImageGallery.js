const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    // cek click    
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);

        thumb.forEach(function(thumbs){
            // if(thumb.classList.contains('active')){
            //     thumb.classList.remove('active');
            // }
            thumbs.className = 'thumb';
        });
        e.target.classList.add('active');
    }
})