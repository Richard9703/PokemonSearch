function searchFilm(query) {
    const url = `https://ghibliapi.herokuapp.com/films?q=${query}`;
    fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
            const results = jsonData.map(element => element.title);
            renderResults(results);
    });
}

function renderResults(results) {
    const list = document.getElementById("resultsList");
    list.innerHTML = "";
    results.forEach(result => {
        const element = document.createElement("li");
        element.innerText = result;
        list.appendChild(element);
    });
}

window.onload = () => {
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = (event) => {
       searchFilm(searchFieldElement.value);
    };
}


