// async function f()
// {
//     return 'hola';

// }

// f().then(alert);

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Exito'), 3000);
//     })

//     let result = await promise;

//     console.log(result);
// }

// f();

const btn = document.getElementById('btn-count');

const btn2 = document.getElementById('btn-count2');

const p = document.getElementById('contador');


let counter = 0;




btn.addEventListener('click', async () => {
    await setTimeout(() => {
        counter++;
        p.textContent = counter;
        console.log('Success');
    }, 0);
})

btn2.addEventListener('click', async () => {
    await setTimeout(() => {
        counter--;
        p.textContent = counter;
        console.log('Success');
    }, 0);
})