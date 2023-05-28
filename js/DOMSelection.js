// contoh
const byID = document.getElementById('contoh'); //mengembalikan element
const byClass = document.getElementsByClassName('contoh'); //mengembalikan HTMLCollection
const byTag = document.getElementsByTagName('span'); //mengembalikan HTMLCollection
const querySelector = document.querySelector('#contoh') //mengembalikan element
const querySelectorAll = document.querySelectorAll('.contoh') //mengembalikan nodeList


// contoh penggunaan by Id
// ubah warna text paragraph by id
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

p1.style.color = 'green';
p1.style.fontWeight = '700'

p2.style.color = 'green';
p2.style.fontWeight = '700'



// contoh penggunaan by className
// ubah background fonts
const group = document.getElementsByClassName('group');

// tanpa looping
group[0].style.fontFamily = 'monospace';
group[1].style.fontFamily = 'Arial, Helvetica, sans-serif';

// jika menggunakan looping
var i = 0;
for(i; i < group.length; i++){
    group[i].style.background = 'lightblue';
}



// contoh penggunaan by tagName
// ubah warna background tag li list-1
const ul1 = document.getElementById('a');
const li1 = ul1.getElementsByTagName('li');
// gunakan looping
for(let i = 0; i < li1.length; i++){
    li1[i].style.background = 'orange';
}



// contoh penggunaan querySelector
// ubah judul
const judul = document.querySelector('center h2#judul');
// ambil isi judul lama
console.log(judul.innerHTML);

// masukkan judul
judul.textContent = "Belajar DOM Selection";



// contoh penggunaan querySelectorAll
// ubah background li 2
const li2 = document.querySelectorAll('ul.list-b li');
li2.forEach(function(li2){
    li2.style.background = "red";
})