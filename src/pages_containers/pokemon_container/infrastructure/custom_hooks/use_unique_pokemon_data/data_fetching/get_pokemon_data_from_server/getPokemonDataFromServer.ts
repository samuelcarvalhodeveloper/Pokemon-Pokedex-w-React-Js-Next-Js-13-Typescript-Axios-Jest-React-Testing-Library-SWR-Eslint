import axios from "axios";
import UNIQUE_POKEMON_DATA_URL from "../../../../../../../constants/pokemon/pokemon_data/server_request/urls/urls_to_router_handlers/unique_pokemon_data/uniquePokemonDataUrlConstants";
import PokemonEntity from "../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";

async function getPokemonDataFromServer(
  pokemonId: number,
): Promise<PokemonEntity> {
  return (await axios.get<PokemonEntity>(UNIQUE_POKEMON_DATA_URL(pokemonId)))
    .data;
}

export default getPokemonDataFromServer;
