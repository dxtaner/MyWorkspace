const listPokemon = document.querySelector("#listPokemon");
const headerButtons = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";

// Fetch the first 151 Pokémon
for (let i = 1; i <= 151; i++) {
  fetch(URL + i)
    .then((response) => response.json())
    .then((data) => showPokemon(data));
}

// Function to display a Pokémon
function showPokemon(poke) {
  let types = poke.types.map(
    (type) => `<p class="${type.type.name} type">${type.type.name}</p>`
  );
  types = types.join("");

  let pokeId = poke.id.toString();
  if (pokeId.length === 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId.length === 2) {
    pokeId = "0" + pokeId;
  }

  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-image">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="name-container">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-name">${poke.name}</h2>
            </div>
            <div class="pokemon-types">
                ${types}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
            </div>
        </div>
    `;
  listPokemon.append(div);
}

// Filter Pokémon by type when a header button is clicked
headerButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    const buttonId = event.currentTarget.id;

    listPokemon.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
      fetch(URL + i)
        .then((response) => response.json())
        .then((data) => {
          if (buttonId === "all-todos") {
            showPokemon(data);
          } else {
            const types = data.types.map((type) => type.type.name);
            if (types.some((type) => type.includes(buttonId))) {
              showPokemon(data);
            }
          }
        });
    }
  })
);
