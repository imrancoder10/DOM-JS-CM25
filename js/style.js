const sections = document.querySelectorAll('section');
// console.log(sections);

for(const section of sections){
    section.style.border= '2px solid red';
    section.style.marginBottom= '5px';
    section.style.borderRadius= '10px';
    section.style.padding= '8px';
    section.style.backgroundColor= 'lightgray';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'lightblue';

// const placesContainer = document.getElementById('places-container');
// console.log(placesContainer);
// placesContainer.classList.add('text-center');
// placesContainer.classList.remove('large-text');