import GeneralPokemonsData from "../../../../types/pokemon/raw_pokemon_information_from_server/general_pokemons_data/GeneralPokemonsData";
import PokemonEntity from "../../infrastructure/pokemon_entity/implementation/PokemonEntity";
import RawCompletePokemonDataFromServer from "../../../../types/pokemon/raw_pokemon_information_from_server/raw_complete_pokemon_data_from_server/RawCompletePokemonDataFromServer";
import FIRST_INDEX_OF_THE_ARRAY from "../../../../constants/array_utilities/first_index_of_the_array/firstIndexOfTheArrayConstants";
import PokemonEntityFactory from "../../infrastructure/pokemon_entity/factory/implementation/PokemonEntityFactory";
import UniquePokemonCompleteDataByIdFetcher from "../infrastructure/pokemon_data_from_server_fetcher/pokemon_complete_data/UniquePokemonCompleteDataByIdFetcher";
import GeneralArrayOfPokemonDataFetcher from "../infrastructure/pokemon_data_from_server_fetcher/general_pokemon_data/GeneralArrayOfPokemonDataFetcher";
import CompleteDataOfPokemonsFromFirstGenerationAdapter from "../infrastructure/complete data_of_pokemons_form_first_generation_adapter/CompleteDataOfPokemonsFromFirstGenerationAdapter";

class PokemonRepository {
  public async getUniquePokemonDataById(
    pokemonId: number,
  ): Promise<PokemonEntity> {
    const rawPokemonDataFromServer: RawCompletePokemonDataFromServer =
      await UniquePokemonCompleteDataByIdFetcher.getUniquePokemonCompleteDataById(
        pokemonId,
      );

    return PokemonEntityFactory.getPokemonEntity(
      rawPokemonDataFromServer.id,
      rawPokemonDataFromServer.forms[FIRST_INDEX_OF_THE_ARRAY].name,
      rawPokemonDataFromServer.sprites.versions["generation-v"]["black-white"]
        .animated.front_default,
      rawPokemonDataFromServer.types,
    );
  }

  public async getAllFirstGenerationPokemonsData(): Promise<
    Array<PokemonEntity>
  > {
    const allGeneralPokemonDataFromFirstGeneration: GeneralPokemonsData =
      await GeneralArrayOfPokemonDataFetcher.getAllPokemonsFromFirstGenerationWithGeneralData();
    const completeDataOfAllPokemonsFromFirstGeneration: Array<PokemonEntity> =
      await CompleteDataOfPokemonsFromFirstGenerationAdapter.getArrayWithCompleteDataOfAllPokemonsFromFirstGeneration(
        allGeneralPokemonDataFromFirstGeneration,
      );
    return completeDataOfAllPokemonsFromFirstGeneration;
  }
}

export default PokemonRepository;
