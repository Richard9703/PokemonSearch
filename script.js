console.log('Fish image');

catchFish().catch(error => {
    console.log('No Fish');
});

async function catchFish() {
    const response = await fetch('https://acnhapi.com/v1/images/fish/1');
    const blob = await response.blob();
    document.getElementById('fish').src = URL.createObjectURL(blob);
}

