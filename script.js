// console.log('Fish image');

// catchFish().catch(error => {
//     console.log('No Fish');
// });

// async function catchFish() {
//     const response = await fetch('https://acnhapi.com/v1/images/fish/1');
//     const blob = await response.blob();
//     document.getElementById('fish').src = URL.createObjectURL(blob);
// }

const url = 'https://acnhapi.com/v1/fish/1'

getFish();

async function getFish() {
    const response = await fetch(url);
    const data = await response.json();
    const {name, price,} = data;
    

    document.getElementById('fishname').textContent = name['name-EUen']; //log fish name
    document.getElementById('price').textContent = price; // log price
}

let btn = document.getElementById('btnClick')
let image = document.getElementById('image')

btn.addEventListener('click', function() {
    fetch("https://acnhapi.com/v1/images/fish/1")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(err=>console.log(err))
})