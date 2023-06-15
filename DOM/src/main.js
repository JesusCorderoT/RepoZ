const inputNombre = document.getElementById('nombre-input');
// const parrafo = document.getElementsByClassName('text');

const parrafo = document.getElementById('text');

// const parrafo = document.querySelector('.text');


const parrafos = document.querySelectorAll('.text');

// console.log(inputNombre.getAttribute('id'));
// console.log(inputNombre.id);

// 

// manipulacion del dom

// inputNombre.value = 'Soy la modificacion'

// document.getElementById('text').innerHTML = 'Se modifica otro texto';



// inputNombre.addEventListener('input', actualizarText);


// function actualizarText(e)
// {
// parrafo.textContent = e.target.value;

// }

// inputNombre.addEventListener('input',e => {
// parrafo.textContent = e.target.value;
// });

inputNombre.addEventListener('input',e => parrafo.textContent = e.target.value)

// //creamos el elemento
// const divParrafo = document.getElementById('div-container');

// const p = document.createElement('p');
// p.textContent = 'Agregado desde JS';

// // inspeccionamos elemento
// divParrafo.appendChild(p);