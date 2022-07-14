/* https://rickandmortyapi.com/api
 */

let page = 1;

async function getCharacter() {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    data.results.forEach(function (character) {
        document.querySelector("#character-list").insertAdjacentHTML(
            "beforeend",
            `
        <div class="card">
        <img
            class="image-character"
            src="${character.image}"
            alt="Image character"
        />
        <div>
            <h2 class="name-character">${character.name}</h2>
            <p class="species-character">${character.species}</p>
            <h4>Gender</h4>
            <p class="species-character">${character.gender}</p>
            <h4>Origin</h4>
            <p class="species-origin">${character.origin.name}</p>
        </div>
    </div>
        `
        );
    });
}

getCharacter();

function viewMore() {
    page++;
    getCharacter();
}
window.addEventListener("scroll", function () {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      viewMore();
    }
  });