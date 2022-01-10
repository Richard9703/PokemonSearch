// When pressing the search icon or enter, it will search for the user input
document.querySelector("#search").addEventListener("click", searchPokemon);

// Capitalize the first letter of the string
function uppercaseFirstLetter(string) {
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
            // Create elements in selected query
            document.querySelector(".pokeCard").innerHTML = ` 
            <div class = container>
                <div class = card>
                    <div class = image>
                        <img src ="${data.sprites.other["official-artwork"].front_default}"
                        alt="${uppercaseFirstLetter(data.name)}">
                    </div>
                    <div class = content>
                        <h3>${uppercaseFirstLetter(data.name)}</h3>
                        <p>Weight: ${data.weight}</p>
                        <p>Abilities: ${uppercaseFirstLetter(data.abilities["0"].ability.name)}</p>
                        <p>Type: ${uppercaseFirstLetter(data.types[0].type.name)}</p>
                    </div>
                </div>    
            </div>
            `;
        })
        //log errors
        .catch((error) => {
            console.log(error);
        });
    e.preventDefault();
}
