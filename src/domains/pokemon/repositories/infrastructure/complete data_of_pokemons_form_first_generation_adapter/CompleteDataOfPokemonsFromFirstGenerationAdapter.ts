import FIRST_INDEX_OF_THE_ARRAY from "../../../../../constants/array_utilities/first_index_of_the_array/firstIndexOfTheArrayConstants";
import PokemonEntity from "../../../infrastructure/pokemon_entity/implementation/PokemonEntity";
import GeneralsPokemonsData from "../../../../../types/pokemon/raw_pokemon_information_from_server/general_pokemons_data/GeneralPokemonsData";
import RawCompletePokemonDataFromServer from "../../../../../types/pokemon/raw_pokemon_information_from_server/raw_complete_pokemon_data_from_server/RawCompletePokemonDataFromServer";
import PokemonEntityFactory from "../../../infrastructure/pokemon_entity/factory/implementation/PokemonEntityFactory";
import UniquePokemonCompleteDataByNameFetcher from "../pokemon_data_from_server_fetcher/pokemon_complete_data/UniquePokemonCompleteDataByNameFetcher";

class CompleteDataOfPokemonsFromFirstGenerationAdapter {
  private constructor() {}

  public static async getArrayWithCompleteDataOfAllPokemonsFromFirstGeneration(
    allGeneralPokemonDataFromFirstGeneration: GeneralsPokemonsData,
  ): Promise<Array<PokemonEntity>> {
    const completeDataOfAllPokemonFromFirstGeneration: Array<PokemonEntity> =
      [];

    for (
      let i = FIRST_INDEX_OF_THE_ARRAY;
      i < allGeneralPokemonDataFromFirstGeneration.results.length;
      i++
    ) {
      const { name } = allGeneralPokemonDataFromFirstGeneration.results[i];
      const rawCompletePokemonDataFromServer: RawCompletePokemonDataFromServer =
        await UniquePokemonCompleteDataByNameFetcher.getCompletePokemonDataByName(
          name,
        );
      const pokemonDataFormattedToPokemonEntity: PokemonEntity =
        PokemonEntityFactory.getPokemonEntity(
          rawCompletePokemonDataFromServer.id,
          rawCompletePokemonDataFromServer.forms[FIRST_INDEX_OF_THE_ARRAY].name,
          rawCompletePokemonDataFromServer.sprites.versions["generation-v"][
            "black-white"
          ].animated.front_default,
          rawCompletePokemonDataFromServer.types,
        );
      completeDataOfAllPokemonFromFirstGeneration.push(
        pokemonDataFormattedToPokemonEntity,
      );
    }

    return completeDataOfAllPokemonFromFirstGeneration;
  }
}

export default CompleteDataOfPokemonsFromFirstGenerationAdapter;
