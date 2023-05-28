// event handler
const judul = document.getElementById('judul');
var p1 = document.getElementById('p1');

// inline HTML attribute
function changeBackground(){
    judul.style.background = "red";
    judul.style.cursor = "pointer";
}

// element method
p1.onclick = changeBackgroundP1;
p1.style.cursor = "pointer";
function changeBackgroundP1(){
    p1.style.background = 'orange';
}


// addEventListener()
const p2 = document.getElementById('p2');


p2.style.cursor = 'pointer';


p2.addEventListener('click', function(){
    const ulB = document.querySelector('ul#b');
    const createElement = document.createElement('li');
    const addTextNode = document.createTextNode('Ini adalah list baru');
    createElement.appendChild(addTextNode);
    ulB.appendChild(createElement);
});



