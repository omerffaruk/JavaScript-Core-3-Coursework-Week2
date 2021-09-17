
const rootDiv = document.getElementById("root");
const imgContainerDiv = document.getElementById("imgContainer");
const programmerHumourImg = document.getElementById("programmerHumourImg");
const apiUrl = "https://xkcd.now.sh/?comic=latest";


// fetch("https://xkcd.now.sh/?comic=latest")
// .then((response) => {
//     console.log(response);
//     return response.json();
// }).then((json) => {
//     console.log(json);
//     programmerHumourImg.src = json.img;
//     programmerHumourImg.alt = json.alt;
// })
// .catch((error) => {
//     console.log(error);
// })

async function getImage () {
    const response = await fetch(apiUrl);
    console.log(response);
    const json = await response.json();
    console.log(json);
    programmerHumourImg.src = json.img;
    programmerHumourImg.alt = json.alt;
    return json;
}

getImage().catch((error) => console.log(error));