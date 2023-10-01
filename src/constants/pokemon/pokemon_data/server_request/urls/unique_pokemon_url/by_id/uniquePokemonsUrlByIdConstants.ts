import POKEMON_BASE_URL from "../../base_url/pokemonBaseUrl";

function UNIQUE_POKEMON_URL_BY_ID(id: number): string {
  return POKEMON_BASE_URL + id;
}

export default UNIQUE_POKEMON_URL_BY_ID;
