// console.log('Fish image');

// catchFish().catch(error => {
//     console.log('No Fish');
// });

// async function catchFish() {
//     const response = await fetch('https://acnhapi.com/v1/images/fish/1');
//     const blob = await response.blob();
//     document.getElementById('fish').src = URL.createObjectURL(blob);
// }

const items = ('https://acnhapi.com/v1a/fish/')
const search = document.querySelector("#search")
let fish = []

const fetchImage = () => {
    fetch(items)
        .then(res => {
            res 
             .json()
             .then(res => {
                fish = res
                showFish(fish)
             })
              .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

const showFish = arr => {
    let output = ""

    arr.forEach(
        ({name, price, image_uri}) =>
         (output += `
         <div class="contents">
            <div class="content">
                <div class="content-main">
                    <img id="image" src=${image_uri}>
                </div>
                <div class="content-body">
                    <span class="fish-name" id="fishname">${name}</span>
                    <span class="price" id="price"${price}></span>
                    <button class="content-btn active"><i class="fas fa-heart"></i></button>
                </div>
            </div>
        </div>
         `)
            )
            items.innerHTML = output
}
document.addEventListener(fetchImage)

// const url = 'https://acnhapi.com/v1/fish/1'

// getImage();

// async function getImage() {
//     const response = await fetch('https://acnhapi.com/v1/images/fish/1');
//     const blob = await response.blob();
//     document.getElementById('image').src = URL.createObjectURL(blob);
// }

// getFish();

// async function getFish() {
//     const response = await fetch(url);
//     const data = await response.json();
//     const {name, price,} = data;
        
    
//     document.getElementById('fishname').textContent = name['name-EUen']; //log fish name
//     document.getElementById('price').textContent = price; // log price
// }