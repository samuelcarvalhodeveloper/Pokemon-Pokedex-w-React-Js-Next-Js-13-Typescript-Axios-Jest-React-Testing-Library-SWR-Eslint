import POKEMON_BASE_URL from "../../base_url/pokemonBaseUrl";

function UNIQUE_POKEMON_URL_BY_NAME(name: string): string {
  return POKEMON_BASE_URL + name;
}

export default UNIQUE_POKEMON_URL_BY_NAME;
