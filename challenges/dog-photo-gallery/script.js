const dogImgBtn = document.getElementById("dogImgBtn");
const dogImgUl = document.getElementById("dogUl");

dogImgBtn.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        return response.json();
    }).then((json) => {
        // dogImgUl.innerHTML = "";
        const dogImgLi = document.createElement("li");
        const dogImg = document.createElement("img");
        dogImg.src = json.message;
        dogImgLi.appendChild(dogImg);
        dogImgUl.appendChild(dogImgLi);
    }).catch((e) => {
        console.log(e);
    })
});



// async function getImage () {
//     const response = await fetch("https://dog.ceo/api/breeds/image/rando");
//     const json = await response.json();
//     dogImgUl.innerHTML = "";
//     const dogImgLi = document.createElement("li");
//     const dogImg = document.createElement("img");
//     dogImg.src = json.message;
//     dogImgLi.appendChild(dogImg);
//     dogImgUl.appendChild(dogImgLi);
//     console.log("success");
// }

