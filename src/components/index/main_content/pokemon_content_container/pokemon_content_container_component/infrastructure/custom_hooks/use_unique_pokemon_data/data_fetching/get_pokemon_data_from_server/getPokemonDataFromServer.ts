import axios from "axios";
import ALL_POKEMONS_DATA_URL from "../../../../../../../../../../constants/pokemon/pokemon_data/server_request/urls/urls_to_router_handlers/all_pokemons_data/swr_fetcher_url/allPokemonsDataUrlConstants";
import PokemonEntity from "../../../../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";

async function getPokemonDataFromServer(): Promise<Array<PokemonEntity>> {
  return (await axios.get<Array<PokemonEntity>>(ALL_POKEMONS_DATA_URL)).data;
}

export default getPokemonDataFromServer;
