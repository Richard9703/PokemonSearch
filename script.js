document.querySelector('#search').addEventListener("click" , searchManga);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.lowerCaseName();
}


function searchManga(e) {      
    const name = document.querySelector("#mangaName");

    fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${name}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "de8adaa1d4msh71c66d01e37cf53p1778d2jsn675b5b8be069"
	}
})
.then(response => response.json())
.then((data) => {
    document.querySelector(".mangaCard").innerHTML = `
    <div>
        <img src="${data.image_url}" 
        alt="${data.title}" />
    </div>
    <div class="filmDescription">
        <h1>${data.title}</h1>
        <p>Synopsis: ${data.synopsis}</p>
    </div>
`;
})
.catch((error) => {
    console.log(error);
});
e.preventDefault();
}

// function searchFilm(e) {
   
//     const name = document.querySelector("#pokeName").value;
    

//     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     .then((response) => response.json())
//     .then((data) => {
//             document.querySelector(".pokeBox").innerHTML = `
            // <div>
            //     <img src="${data.sprites.other["official-artwork"].front_default}" 
            //     alt="${capitalizeFirstLetter(data.name)}" />
            // </div>
            // <div class="filmDescription">
            //     <h1>${capitalizeFirstLetter(data.name)}</h1>
            //     <p>Weight: ${data.weight}</p>
            // </div>
//             `;
//              })
//             .catch((error) => {
//              console.log(error);
//             });
//             e.preventDefault();
//         }   


 
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


