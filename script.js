// When pressing the search icon, it will search for user input
document.querySelector('#search').addEventListener("click" , searchPokemon);

// Capitalize the first letter of the string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Lower case the rest of the string
function lowerCaseName(string) {
    return string.toLowerCase();
}

//Search for pokemon
function searchPokemon(e) {
   
    const name = document.querySelector("#pokeName").value;
    const pokemonName = lowerCaseName(name);


    // Fetch url of API
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
            document.querySelector(".pokeCard").innerHTML = `
            <div class = container>
                <div class = card>
                    <div class = image>
                        <img src ="${data.sprites.other["official-artwork"].front_default}"
                        alt="${capitalizeFirstLetter(data.name)}">
                    </div>
                    <div class = content>
                        <h3>${capitalizeFirstLetter(data.name)}</h3>
                        <p>Weight: ${data.weight}</p>
                        <p>Abilities: ${capitalizeFirstLetter(data.abilities["0"].ability.name)},</p>
                        <p>Type: ${capitalizeFirstLetter(data.types[0].type.name)}</p>
                    </div>
                </div>    
            </div>
            `;
             })
            .catch((error) => {
             console.log(error);
            });
            e.preventDefault();
        }   




