import axios from "axios";
import GENERAL_POKEMON_ARRAY_URL from "../../../../../../constants/pokemon/pokemon_data/server_request/urls/general_pokemon_array_url/generalPokemonArrayUrlConstants";
import GeneralsPokemonsData from "../../../../../../types/pokemon/raw_pokemon_information_from_server/general_pokemons_data/GeneralPokemonsData";

class GeneralArrayOfPokemonDataFetcher {
  private constructor() {}

  public static async getAllPokemonsFromFirstGenerationWithGeneralData(): Promise<GeneralsPokemonsData> {
    const fetchResult: GeneralsPokemonsData = (
      await axios.get(GENERAL_POKEMON_ARRAY_URL)
    ).data;

    return fetchResult;
  }
}

export default GeneralArrayOfPokemonDataFetcher;
