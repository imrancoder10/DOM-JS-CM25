const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText= 'AjinaBon';
placesList.appendChild(li).style.color= 'red';

// 1. where to add
const mainContainer = document.getElementById('main-container');

//2. what to do added
const section = document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText= 'My Food List';
section.appendChild(h1);
// ul
const ul = document.createElement('ul');
// li one
const li1 = document.createElement('li');
li1.innerText= 'biryani';
ul.appendChild(li1);
// li two
const li2 = document.createElement('li');
li2.innerText= 'Pizza';
ul.appendChild(li2);
// li three
const li3 = document.createElement('li');
li3.innerText= 'Salat';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);


// set innerHTML Directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML= `
<h1>My Dress Section</h1>
<ul>
    <li>T-Shirt</li>
    <li>Lungi</li>
    <li>Pajama</li>
    <li>Sando genji</li>
</ul>
`;

mainContainer.appendChild(sectionDress);


