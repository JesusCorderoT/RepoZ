const IMAGE_URL = "https://placehold.co/200";

// const IMAGE_CONTAINER = document.querySelector('.img-container');
// const INFO_CONTAINER = document.querySelector('.info-container');

// import USERS from '/users.js';
// console.log(USERS);


// const USERS = [
//     {
//       id: 1,
//       user_name: "Jesus",
//       desc: "Rider",
//       age: 23,
//       musica_fav: {
//         lista: ["Metallica", "Metro Boomin"]
//       }
//     },
//     {
//       id: 2,
//       user_name: "Anwar",
//       desc: "Dev",
//       age: 25,
//       musica_fav: {
//         lista: [".", ".."]
//       }
//     }
//   ];

//   const navbar = 
//   `
//   <nav>
//   <div class='container'>
//   <img>
//   <h1>
//   ${user.name}
//   </div>
//   </nav>
//   `


//   const createDesc = (user) => 
//   {
//     const user_name = document.createElement('h3');
//     const descripcion = document.createElement('p');
//     const age = document.createElement('p');
//     const bands = document.createElement('ul');
//   }

//   users.forEach(user => {
//     createDesc(user);
//   })

//   const lista = `<ul>${IMAGE_URL}<ul>`;

// const image = document.createElement('img');
// image.src = IMAGE_URL;
// image.alt = 'User photo';

// console.log(createDesc);

// const user_name = document.createElement('h3');
// const descripcion = document.createElement('p');
// const age = document.createElement('p');
// const bands = document.createElement('ul');

// const bandList = USER.musica_fav.lista.map(e =>{
// const item = document.createElement('ul');
// item.textContent = e;
// return item;
// });

// console.log(bandList);
// user_name.textContent = USER.user_name;
// descripcion.textContent = USER.desc;
// age.textContent = USER.age;
// bands.textContent = USER.musica_fav.lista;

// IMAGE_CONTAINER.appendChild(image);

// INFO_CONTAINER.append(user_name,descripcion,age,...bandList);



//-----------------------------------------------------------------
const users = [
    {
      id: 1,
      user_name: "Jesus",
      desc: "Rider",
      age: 23,
      musica_fav: {
        lista: ["Metallica", "Metro Boomin"]
      }
    },
    {
      id: 2,
      user_name: "otro compa",
      desc: "Dev",
      age: 25,
      musica_fav: {
        lista: ["uNA", "OTRA"]
      }
    }
  ];

const createDesc = (user) => {
    const user_name = document.createElement('h3');
    const descripcion = document.createElement('p');
    const age = document.createElement('p');
    const bands = document.createElement('ul');
    const img = document.createElement('img');

  
    user_name.textContent = user.user_name;
    descripcion.textContent = user.desc;
    age.textContent = user.age;
    img.src = IMAGE_URL;

  
    user.musica_fav.lista.forEach(bandName => {
      const band = document.createElement('li');
      band.textContent = bandName;
      bands.appendChild(band);
    });
    
  
    const container = document.createElement('div');
    container.appendChild(img);
    container.appendChild(user_name);
    container.appendChild(descripcion);
    container.appendChild(age);
    container.appendChild(bands);

    return container;
  };
  
  const containerDiv = document.getElementById('container');
  
  users.forEach(user => {
    const userDesc = createDesc(user);
    containerDiv.appendChild(userDesc);
  });



