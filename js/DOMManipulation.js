// Start Manipulation Element

// ubah isi tag menggunakan innerHTML
const judul = document.querySelector('center h2#judul');
// ambil isi judul awal dan masukkan ke console
console.info(judul.innerHTML);
// ubah isi judul dan tambahkan underline
judul.innerHTML = "<u>Belajar DOM Manipulation</u>";


// set attribut tag a menambahkan atribut href
const getLink = document.getElementsByClassName('link');
getLink[0].setAttribute('href', 'http://alharyts.github.io/');
getLink[1].setAttribute('href', 'https://instagram.com/alharits25');
// tambahkan atribut target
getLink[0].setAttribute('target', '__blank');
getLink[1].setAttribute('target', '__blank');



// contoh penggunaan classList
// classList add() dan remove()
    const button = document.getElementById('button');
    var isBgBlue = false;
    button.addEventListener('click', function(){
        const groups = document.getElementsByClassName('group');
        if(isBgBlue){
            // localStorage.setItem('theme', 'bg-blue');
            // var strg = localStorage.getItem('theme');
            for(var i = 0; i < groups.length; i++){
                groups[i].classList.add('bg-blue');
                groups[i].classList.remove(`group-${i}`)
            }
        } else{
            // localStorage.removeItem('theme');
            for(var i = 0; i < groups.length; i++){
                groups[i].classList.add(`group-${i}`);
                groups[i].classList.remove('bg-blue');
            }
        }
        isBgBlue = !isBgBlue;
    });



// classList toggle()
const inptToggle = document.getElementById('toggle');
inptToggle.addEventListener('click', function(){
    document.body.classList.toggle('darkMode');
});

// End Manipulation Element



// Start Manipulation Node




// End Manipulation Node

    