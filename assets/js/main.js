const lista = document.getElementById("pokemons");
const loadMoreButton = document.getElementById("loadMoreButton");
const selectGeneration = document.getElementById("generations");
const qtPokemons = [
   gen1 = 150,
   gen2 = 100,
   gen3 = 135,
   gen4 = 107,
   gen5 = 156,
   gen6 = 72,
   gen7 = 88,
   gen8 = 96,
   especiais = 100000000
]

const limit = 12;
let offset = 0


function loadPokemons(offset, limit){
   function convertListPokemon(pokemon) {
      return `
         <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${capitalize(pokemon.name)}</span>
   
            <div class="detail">
               <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${capitalize(type)}</li>`).join('')}
               </ol>
               <img src="${pokemon.photo}" srcset="">
            </div>
         </li>
      `
   }

   pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {   
      lista.innerHTML = pokemonList.map(convertListPokemon).join('');
      // const listItens = [];
   
      // for (let i = 0; i < pokemonList.length; i++) {
      //    const pokemon = pokemonList[i];
      //    listItens.push(convertListPokemon(pokemon))
      //    // lista.innerHTML += (convertListPokemon(pokemon))
      // }
      // lista.innerHTML = listItens
      // console.log(listItens)
   })
}

function loadMorePokemons(offset, limit){
   function convertListPokemon(pokemon) {
      return `
         <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${capitalize(pokemon.name)}</span>
   
            <div class="detail">
               <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${capitalize(type)}</li>`).join('')}
               </ol>
               <img src="${pokemon.photo}" srcset="">
            </div>
         </li>
      `
   }

   pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {   
      lista.innerHTML += pokemonList.map(convertListPokemon).join('');
      // const listItens = [];
   
      // for (let i = 0; i < pokemonList.length; i++) {
      //    const pokemon = pokemonList[i];
      //    listItens.push(convertListPokemon(pokemon))
      //    // lista.innerHTML += (convertListPokemon(pokemon))
      // }
      // lista.innerHTML = listItens
      // console.log(listItens)
   })
}

loadPokemons(offset, limit);

loadMoreButton.addEventListener('click', () => {
   offset += limit;
   loadMorePokemons(offset, limit)
})

selectGeneration.addEventListener('change', () => {
   
   if (selectGeneration.value == 1) {
      loadPokemons(0, qtPokemons[0])
   } else if (selectGeneration.value == 2) {
      loadPokemons(qtPokemons[0], qtPokemons[1] + 1)
   } else if (selectGeneration.value == 3) {
      loadPokemons(qtPokemons[1] + qtPokemons[0] + 1, qtPokemons[2])
   } else if (selectGeneration.value == 4) {
      loadPokemons(qtPokemons[2] + qtPokemons[1] + qtPokemons[0] + 1, qtPokemons[3])
   } else if (selectGeneration.value == 5) {
      loadPokemons(qtPokemons[3] + qtPokemons[2] + qtPokemons[1] + qtPokemons[0] + 1, qtPokemons[4])
   } else if (selectGeneration.value == 6) {
      loadPokemons(qtPokemons[4] + qtPokemons[3] + qtPokemons[2] + qtPokemons[1] + qtPokemons[0] + 1, qtPokemons[5])
   } else if (selectGeneration.value == 7) {
      loadPokemons(qtPokemons[5] + qtPokemons[4] + qtPokemons[3] + qtPokemons[2] + qtPokemons[1] + qtPokemons[0] + 1, qtPokemons[6])
   } else if (selectGeneration.value == 8) {
      loadPokemons(qtPokemons[6] + qtPokemons[5] + qtPokemons[4] + qtPokemons[3] + qtPokemons[2] + qtPokemons[1] + qtPokemons[0] + 1, qtPokemons[7])
   } else if (selectGeneration.value == 9) {
      loadPokemons(qtPokemons[7] + qtPokemons[6] + qtPokemons[5] + qtPokemons[4] + qtPokemons[3] + qtPokemons[2] + qtPokemons[1] + qtPokemons[0] + 1, qtPokemons[8])
   }


   loadMoreButton.parentElement.removeChild(loadMoreButton)
})



