

function setup() {
    createCanvas(200, 200);
    loadJSON('https://api.genshin.dev/characters', gotData);
}

function gotData(data) {
    println(data);
}