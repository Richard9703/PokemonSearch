document.querySelector('#search').addEventListener("click" , searchPokemon);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.lowerCaseName();
}

function searchPokemon(e) {
   
    const name = document.querySelector("#pokeName");
    

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
            document.querySelector(".pokeBox").innerHTML = `
            <div>
                <img src="${data.sprites.other["official-artwork"].front_default}" 
                alt="${capitalizeFirstLetter(data.name)}" />
            </div>
            <div class="filmDescription">
                <h1>${capitalizeFirstLetter(data.name)}</h1>
                <p>Weight: ${data.weight}</p>
            </div>
            `;
             })
            .catch((error) => {
             console.log(error);
            });
            e.preventDefault();
        }   


 
// let searchTimeoutToken = 0;

// window.onload = () => {
//     const searchFieldElement = document.getElementById("pokeName");
//     searchFieldElement.onkeyup = (event) => {
//         clearTimeout(searchTimeoutToken);

//         if(searchFieldElement.value.length === 0) {
//             return; 
//         }

//         searchTimeoutToken = setTimeout(() => {
//             searchFilm(searchFieldElement.value);
//         }, 250);
//     };
// }


