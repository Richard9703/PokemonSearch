document.querySelector('#search').addEventListener("click" , searchFilm);



function searchFilm(e) {
   
    const title = document.querySelector("#filmName").value;
    

    fetch(`https://ghibliapi.herokuapp.com/films/${title}`)
    .then((response) => response.json())
    .then((films) => {
        document.querySelector(".filmBox").innerHTML = `
        <div>
			<img src="${films.image}" 
            alt="${films.title}" />
		</div>
		<div class="filmDescription">
			<h1>${films.title}</h1>
			<p>Description: ${films.description}</p>
		</div>
        `;
    })
    .catch((error) => {
        document.getElementById("errorMessage").innerHTML = error;
    });

}

let searchTimeoutToken = 0;

window.onload = () => {
    const searchFieldElement = document.getElementById("filmName");
    searchFieldElement.onkeyup = (event) => {
        clearTimeout(searchTimeoutToken);

        if(searchFieldElement.value.length === 0) {
            return; 
        }

        searchTimeoutToken = setTimeout(() => {
            searchFilm(searchFieldElement.value);
        }, 250);
    };
}


