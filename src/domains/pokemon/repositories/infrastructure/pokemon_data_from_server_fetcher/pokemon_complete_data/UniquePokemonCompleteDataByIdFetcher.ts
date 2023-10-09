import axios from "axios";
import RawCompletePokemonDataFromServer from "../../../../../../types/pokemon/raw_pokemon_information_from_server/raw_complete_pokemon_data_from_server/RawCompletePokemonDataFromServer";
import UNIQUE_POKEMON_URL_BY_ID from "../../../../../../constants/pokemon/pokemon_data/server_request/urls/unique_pokemon_url/by_id/uniquePokemonsUrlByIdConstants";

class UniquePokemonCompleteDataByIdFetcher {
  private constructor() {}

  public static async getUniquePokemonCompleteDataById(
    pokemonId: number,
  ): Promise<RawCompletePokemonDataFromServer> {
    const requestResult = (
      await axios.get<RawCompletePokemonDataFromServer>(
        UNIQUE_POKEMON_URL_BY_ID(pokemonId),
      )
    ).data;

    return requestResult;
  }
}

export default UniquePokemonCompleteDataByIdFetcher;
