// document.addEventListener("DOMContentLoaded", function() {
//     let pokemonAPI = "https://pokeapi.co/api/v2";
    
//     let thing = document.querySelector("button");

//     async function getPokemonFact() {
//         try {
//             let response = await axios.get(`${pokemonAPI}/pokemon/?limit=1000`);
//             console.log(response.data);
//         } catch (error) {
//             console.error("Error fetching Pokémon data:", error);
//         }
//     }

//     thing.addEventListener("click", getPokemonFact);
// }); PART 1

// document.addEventListener("DOMContentLoaded", function() {
//     let pokemonAPI = "https://pokeapi.co/api/v2";

//     let thing = document.querySelector("button");

//     async function fetchPokemonFacts() {
//         try {

//             let allData = await axios.get(`${pokemonAPI}/pokemon/?limit=1000`);
//             let randomPokemonUrls = [];

//             for(let i = 0; i < 3; i++) {
//                 let randomIdx = Math.floor(Math.random() * allData.data.results.length);
//                 let url = allData.data.results.splice(randomIdx, 1)[0].url;
//                 randomPokemonUrls.push(url);
//             }

//             let responses = await Promise.all(
//                 randomPokemonUrls.map(url => axios.get(url))
//             );

//             responses.forEach(p => console.log(p.data));

//         } catch (error) {
//             console.error("Error fetching Pokémon data:", error);
//         }
//     }

//     thing.addEventListener("click", fetchPokemonFacts);
// }); PART 2

// document.addEventListener("DOMContentLoaded", function() {
//     let pokemonAPI = "https://pokeapi.co/api/v2";

//     let thing = document.querySelector("button");

//     async function fetchPokemonAndSpecies() {
//         try {

//             let allData = await axios.get(`${pokemonAPI}/pokemon/?limit=1000`);

//             let randomPokemonUrls = [];

//             for(let i = 0; i < 3; i++) {
//                 let randomIdx = Math.floor(Math.random() * allData.data.results.length);
//                 let url = allData.data.results.splice(randomIdx, 1)[0].url;
//                 randomPokemonUrls.push(url);
//             }

//             let pokemonData = await Promise.all(
//                 randomPokemonUrls.map(url => axios.get(url))
//             );

//            let speciesData = await Promise.all(
//                pokemonData.map(p => axios.get(p.data.species.url))
//            );

//            let descriptions = speciesData.map(d => {
//             let descriptionEng = d.data.flavor_text_entries.find(
//                 entry => entry.language.name === "en"
//             );
//             return descriptionEng 
//                 ? descriptionEng.flavor_text 
//                 : "No description available";
//            });

//            descriptions.forEach((desc, i) => {
//             console.log(`${pokemonData[i].data.name}: ${desc}`);
//            });

//         } catch (error) {
//             console.error("Error fetching Pokémon data:", error);
//         }
//     }

//     thing.addEventListener("click", fetchPokemonAndSpecies);
// });

document.addEventListener("DOMContentLoaded", function() {
    let pokemonAPI = "https://pokeapi.co/api/v2";

    let button = document.querySelector("button");
    let pokemonPicture = document.getElementById("pokemon-picture");

    button.addEventListener("click", getPokemonData);

    async function getPokemonData() {
        try {
            pokemonPicture.innerHTML = "";

            let mainData = await axios.get(`${pokemonAPI}/pokemon/?limit=1000`);
            let randomPokemonUrls = [];

            for (let i = 0; i < 3; i++) {
                let randomIdx = Math.floor(Math.random() * mainData.data.results.length);
                let url = mainData.data.results.splice(randomIdx, 1)[0].url;
                randomPokemonUrls.push(url);
            }

            let pokemonData = await Promise.all(
                randomPokemonUrls.map(url => axios.get(url))   
            );

            let speciesData = await Promise.all(
                pokemonData.map(p => axios.get(p.data.species.url))
            );

            speciesData.forEach((d,i) => {
                let descriptionEng = d.data.flavor_text_entries.find(function(entry) {
                    return entry.language.name === "en";
                });

                let description = descriptionEng ? descriptionEng.flavor_text : "";
                let name = pokemonData[i].data.name;
                let imgSource = pokemonData[i].data.sprites.front_default;

                pokemonPicture.insertAdjacentHTML('beforeend', makePokemonSprite(name, imgSource, description));   
            });
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    }

    function makePokemonSprite(name, imgSource, description) {
    return `
        <div class="pokemon">
            <h3>${name}</h3>
            <img src="${imgSource}" alt="${name}">
            <p>${description}</p>
        </div>
    `;
    }

});