const url = "https://acnhapi.com/v1a/fish/{fishID}"
getFish();

//Function Search by ID + Term
async function getFish() {
    const resp = await fetch(
        'https://acnhapi.com/v1a/fish/1'
    ).data;
    const respData = await resp.json();


    console.log(getFish.fish[0]);
}

async function getContentId(id) {
    const content = await fetch(
        'https://acnhapi.com/v1a/fish/{fishID}' + id
    );
}

async function getContentSearch(term) {
    const contents = await fetch(
        'https://acnhapi.com/v1a/fish/{fishID}/name/name-USen' + term
    );
}