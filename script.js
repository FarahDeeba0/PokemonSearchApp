const searchInput = document.getElementById('searchInput');
const pokemonInfo = document.getElementById('pokemonInfo');

async function fetchPokemonInfo(pokemonNameOrId) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId.toLowerCase()}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Pokémon info:', error);
    throw error;
  }
}

function displayPokemonInfo(pokemon) {
  const html = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p>Abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
  `;
  pokemonInfo.innerHTML = html;
}

searchInput.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    const pokemonNameOrId = searchInput.value.trim();
    if (pokemonNameOrId !== '') {
      try {
        const pokemon = await fetchPokemonInfo(pokemonNameOrId);
        displayPokemonInfo(pokemon);
      } catch (error) {
        pokemonInfo.textContent = 'Pokémon not found. Please enter a valid name or ID.';
      }
    }
  }
});
