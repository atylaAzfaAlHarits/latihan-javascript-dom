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
        button.addEventListener('mouseover', function(){
            button.style.backgroundColor = 'blue';
        });
        button.addEventListener('mouseout', function(){
            button.style.backgroundColor = '';
        });
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



// classList item()
const item = document.querySelector('#list-1');
console.log(item.classList.item(1));


// classList contains()
console.log(item.classList.contains('group'));

// End Manipulation Element



// Start Manipulation Node

// createElement()
const newElement = document.createElement('h2');
const newImg = document.createElement('img')
const text = document.createTextNode('Selamat belajar javascript DOM');
const subJudul = document.getElementById('subJudul');

newElement.appendChild(text);
subJudul.appendChild(newImg);
subJudul.appendChild(newElement);
const getImg = document.getElementsByTagName('img')[0];
getImg.setAttribute('id', 'gif');
const getImgId = document.getElementById('gif');

getImgId.setAttribute('src', 'https://media.giphy.com/media/xXD8sWsSfmY54hDOjS/giphy.gif');
getImgId.style.width = '200px'



// createTextNode()
const newTagP = document.createElement('p');
const newText = document.createTextNode('Judul Baru');
const list_2 = document.getElementById('list-2');

newTagP.appendChild(newText);
list_2.appendChild(newTagP);


// insertBefore()
const liA = document.querySelector('#a li:nth-child(3)');
const newLi = document.createElement('li');
const textLiNew = document.createTextNode('List Baru Ditambahkan');
const parent = liA.parentNode;

newLi.appendChild(textLiNew);
parent.insertBefore(newLi, liA);


// removeChild()

const elmentRemove = document.getElementById('removeMe');
const parentNode = elmentRemove.parentNode;

parentNode.removeChild(elmentRemove);



// replaceChild()
const replHeading = document.getElementById('heading');
const createHeading = document.createElement('h3');
createHeading.textContent = "ini adalah heading";

const parentE = replHeading.parentNode;

parentE.replaceChild(createHeading, replHeading)



// End Manipulation Node

    