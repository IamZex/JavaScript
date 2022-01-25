const div = document.createElement('div');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');
const body = document.querySelector('body')

p1.classList.add('bodyText');
p1.textContent = "I\'ve added text";
p1.style.color = 'red';

p2.classList.add('bodyText');
p2.textContent = "Me too ";
p2.style.color = 'black';


h3.classList.add('headingText');
h3.textContent = "I\'m a blue H3";
h3.style.cssText = "color: blue; weight: bold;" ;

h1.classList.add('headingText');
h1.textContent = "I\'m in a div";
h3.style.cssText = "color: blue; weight: bold;";

function makediv(){
    div;
    div.style = 'border: 2px solid black; background-color:pink;'; 
    div.appendChild(h1);
    div.appendChild(p2);
    body.appendChild(div);
};
body.appendChild(p1);
body.appendChild(h3)
makediv();







