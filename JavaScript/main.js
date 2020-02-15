console.log(window);


// single element
console.log(document.getElementById('my-form'));

const form =  document.getElementById('my-form');

console.log(form);

console.log(document.querySelector('h1'));

//multiple element

console.log(document.querySelectorAll('item'));

console.log(document.getElementsByClassName('item'));

console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

//seleciona os items

const ul = document.querySelector('.items');

//ul.remove();

//ul.lastElementChild.remove();

/*ul.firstElementChild.textContent = "Hello";

ul.children[1].innerText = 'Brad';

ul.lastElementChild.innerHTML = '<h1>  Hello </h1>';

const btn = document.querySelector('.btn');

btn.style.background = 'red';*/



const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';

    document.querySelector ('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';


    
});