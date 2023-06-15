// const baseURL = 'https://pokeapi.co/api/v2/';
// const pokeContainer = document.getElementById('pokemons-container');
// const btnFetch = document.getElementById('btn-fetch');

// btnFetch.addEventListener('click', async () => {
//     const pokemons = await fetchPokemon();

//     pokemons.results.foreach(async (pokemon) => {
//       const data = await fetch(baseURL + '/pokemon/' +pokemon.name)
//       const parsedData = await data.json();
//         console.log(parsedData);
//     })
// })

// const extraURl = 'pokemon?limit=151';
// const fetchPokemon = async () => {

//     try {
//         const data = await fetch(baseURL + extraURl);
//         const parsedData = await data.json();
//         return parsedData;
//     } catch (err) {
//         console.error(err);
//     }
// }

// de acuerdo a las siguientes funciones 
// realizar el codigo para imprimir cada pokemon en un card html

const BASE_URL = 'https://pokeapi.co/api/v2';

const pokeContainer = document.getElementById('pokemons-container');
const btnFetch = document.getElementById('btn-fetch');

btnFetch.addEventListener('click', async () => {
    const pokemons = await fetchPokemon();

    pokemons.results.forEach(async (pokemon) => {
        const data = await fetch(BASE_URL + '/pokemon/' + pokemon.name);
        const parsedData = await data.json();
        // console.log(parsedData);
    })
})


const fetchPokemon = async () => {
    try {
        const data = await fetch(BASE_URL + '/pokemon?limit=151');
        const parsedData = await data.json();
        return parsedData;
    } catch (err) {
        console.error(err);
    }
}



//----------------------------------------------------------------------------------------
// const baseURL = 'https://pokeapi.co/api/v2/';
// const extraURl = 'pokemon?limit=151';
// const limite = baseURL + extraURl;



// async function getPOkemonData(pokemonName)
// {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//     const data = await response.json();
//     return data;
// }





// function createPokemonCard(pokemonData)
// {   
//     const card = document.createElement("div");
//     card.classList.add("card");

//     // const image = document.createElement("img");
//     // image.src = pokemonData.sprites.front_default;
//     // image.src = pokemonData.sprites.other.official-artwork.front_default;
//     // image.src = pokemonData.sprites.other["official-artwork"].front_default

    
//     const name = document.createElement("h2");
//     name.textContent = pokemonData.name;

//     // card.appendChild(image);
//     card.appendChild(name);


//     return card;


// }


// async function loadPokemonCard(n)
// {

//     // const container = document.querySelector(".pokemon-container");

//     // pokemons.results.forEach(async (pokemon) => {
//     //     const data = await fetch(BASE_URL + '/pokemon/' + pokemon.name);
//     //     const parsedData = await data.json();
//     //     // console.log(parsedData);
//     // })

//     // const pokemonData = await getPOkemonData(parsedData);




//     // const pokemonData = await getPOkemonData(pokemonName);
//     // const PokemonCard = createPokemonCard(pokemonData);
//     const container = document.querySelector(".pokemon-container");
//     // container.appendChild(PokemonCard);





// }

// loadPokemonCard(11);
