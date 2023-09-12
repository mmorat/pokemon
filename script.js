const boton = document.getElementById("boton");

function randomN() {
    const min = 1;
    const max = 1010;
    return Math.floor(Math.random() * max) + min;
}

boton.addEventListener("click", function () {
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";
    const randomID = randomN();
    const URL = baseURL + randomID;
 

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            const div = document.getElementById("divNombre");
            const divImg = document.getElementById("sprite");
            div.innerHTML = '';
            divImg.innerHTML = ''; 
            
            const h4 = document.createElement("h4");
            h4.textContent = data.name; 
            div.appendChild(h4);

            const img = document.createElement("img");
            img.src = data.sprites.front_default;
            divImg.appendChild(img);
        })
        .catch((error) => console.log(error));
});