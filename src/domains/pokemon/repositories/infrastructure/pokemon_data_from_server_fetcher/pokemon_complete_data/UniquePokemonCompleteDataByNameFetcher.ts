import axios from "axios";
import UNIQUE_POKEMON_URL_BY_NAME from "../../../../../../constants/pokemon/pokemon_data/server_request/urls/unique_pokemon_url/by_name/uniquePokemonsUrlByNameConstants";
import RawCompletePokemonDataFromServer from "../../../../../../types/pokemon/raw_pokemon_information_from_server/raw_complete_pokemon_data_from_server/RawCompletePokemonDataFromServer";

class UniquePokemonCompleteDataByNameFetcher {
  private constructor() {}

  public static async getCompletePokemonDataByName(pokemonName: string) {
    const pokemonFetchedDataResult: RawCompletePokemonDataFromServer = (
      await axios.get<RawCompletePokemonDataFromServer>(
        UNIQUE_POKEMON_URL_BY_NAME(pokemonName),
      )
    ).data;

    return pokemonFetchedDataResult;
  }
}

export default UniquePokemonCompleteDataByNameFetcher;
