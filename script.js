function searchFilm(query) {
    const url = `https://ghibliapi.herokuapp.com/films?q=${query}`;
 
    fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
            const movies = jsonData.map(element => element.title);

            renderMovies(movies);

            document.getElementById("errorMessage").innerHTML = "";
    })
    .catch((error) => {
        document.getElementById("errorMessage").innerHTML = error;
        renderMovies([]);
    });
}


function renderMovies(movie) {
    const list = document.getElementById("resultsList");
    
    movie.forEach(result => {
        const li = document.createElement("li");
        
        
        
        li.innerText = result;
        

        
        list.appendChild(li);
    });
}

let searchTimeoutToken = 0;

window.onload = () => {
    const searchFieldElement = document.getElementById("searchField");
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


