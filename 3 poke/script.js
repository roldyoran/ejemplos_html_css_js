document.getElementById('fetch-pokemon').addEventListener('click', fetchPokemon);

function fetchPokemon() {
    const pokemonNameOrId = document.getElementById('pokemon-name').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon no encontrado');
            }
            return response.json();
        })
        .then(data => {
            displayPokemon(data);
        })
        .catch(error => {
            alert(error);
        });
}

function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById('pokemon-info');
    const pokemonImage = document.getElementById('pokemon-image');
    const pokemonNameDisplay = document.getElementById('pokemon-name-display');
    const pokemonType = document.getElementById('pokemon-type');
    const pokemonHeight = document.getElementById('pokemon-height');
    const pokemonWeight = document.getElementById('pokemon-weight');
    const pokemonExperience = document.getElementById('pokemon-experience');

    // Actualizamos la información del Pokémon
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonNameDisplay.textContent = `Nombre: ${pokemon.name.toUpperCase()}`;
    pokemonType.textContent = `Tipo: ${pokemon.types.map(info => info.type.name).join(', ')}`;
    pokemonHeight.textContent = `Altura: ${pokemon.height / 10} m`; // Convertimos la altura de decímetros a metros
    pokemonWeight.textContent = `Peso: ${pokemon.weight / 10} kg`; // Convertimos el peso de hectogramos a kilogramos
    pokemonExperience.textContent = `Experiencia base: ${pokemon.base_experience}`;

    // Aplicamos la transición suave al contenedor de información
    pokemonInfo.classList.add('show');

}
