

const pokeApi = {}

function convertModelApi(pokeDetail) {
   const pokemon = new Pokemon()
   pokemon.name = pokeDetail.name;
   pokemon.number = ("000" + pokeDetail.id).slice(-3);

   const types = pokeDetail.types.map((slot) => slot.type.name)
   const [type] = types
   
   
   pokemon.types = types
   pokemon.type = type
   pokemon.photo = pokeDetail.sprites.other["official-artwork"].front_default

   return pokemon
}

pokeApi.getDetails = (pokemon) => {
   return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertModelApi)
}

pokeApi.getPokemons = (offset = 0, limit) => {
   const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
   
   return fetch(url)
   .then((response) => response.json())
   .then((responseBody) =>  responseBody.results)
   .then((pokemons) => pokemons.map(pokeApi.getDetails))
   .then((detailRequest) => Promise.all(detailRequest))
   .then((pokemonDetails) => pokemonDetails);
}



// Promise.all([pokeApi.getPokemons()])
//    .then((results) => {
//    // const arrayList = []
//    // arrayList.push(results[0])

//    results[0].forEach(e => {
//       fetch(e.url)
//          .then((response) => response.json())
//          .then((resultado) => {
//             const novaLista = []
//             novaLista.push(resultado)
//             console.log(novaLista)
//          })
//    });

//    // for (let i = 0; i < arrayList[0].length; i++) {
//    //    const element = arrayList[0][i];
//    //    console.log(element.url)     
//    // }
// })



// const url2 = `https://pokeapi.co/api/v2/pokemon/${id}`

// fetch(url2)
//    .then((resp) => resp.json())
//    .then((respBody) => {
//       console.log(respBody.types);
//    })