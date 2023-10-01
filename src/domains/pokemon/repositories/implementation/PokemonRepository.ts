import axios from "axios";
import UNIQUE_POKEMON_URL_BY_NAME from "../../../../constants/pokemon/pokemon_data/server_request/urls/unique_pokemon_url/by_name/uniquePokemonsUrlByNameConstants";
import GeneralPokemonsData from "../../../../types/pokemon/raw_pokemon_information_from_server/general_pokemons_data/GeneralPokemonsData";
import UNIQUE_POKEMON_URL_BY_ID from "../../../../constants/pokemon/pokemon_data/server_request/urls/unique_pokemon_url/by_id/uniquePokemonsUrlByIdConstants";
import GENERAL_POKEMON_ARRAY_URL from "../../../../constants/pokemon/pokemon_data/server_request/urls/general_pokemon_array_url/generalPokemonArrayUrlConstants";
import PokemonEntity from "../../infrastructure/pokemon_entity/implementation/PokemonEntity";
import RawCompletePokemonDataFromServer from "../../../../types/pokemon/raw_pokemon_information_from_server/raw_complete_pokemon_data_from_server/RawCompletePokemonDataFromServer";
import FIRST_INDEX_OF_THE_ARRAY from "../../../../constants/array_utilities/first_index_of_the_array/firstIndexOfTheArrayConstants";
import PokemonEntityFactory from "../../infrastructure/pokemon_entity/factory/implementation/PokemonEntityFactory";

class PokemonRepository {
  public async getUniquePokemonDataById(
    pokemonId: number,
  ): Promise<PokemonEntity> {
    const rawPokemonDataFromServer: RawCompletePokemonDataFromServer =
      await this.fetchUniquePokemonCompleteDataById(pokemonId);
    return this.createPokemonEntityWithRawDataFromServer(
      rawPokemonDataFromServer,
    );
  }

  private async fetchUniquePokemonCompleteDataById(
    pokemonId: number,
  ): Promise<RawCompletePokemonDataFromServer> {
    const requestResult = (
      await axios.get<RawCompletePokemonDataFromServer>(
        UNIQUE_POKEMON_URL_BY_ID(pokemonId),
      )
    ).data;

    return requestResult;
  }

  private createPokemonEntityWithRawDataFromServer(
    rawPokemonDataFromServer: RawCompletePokemonDataFromServer,
  ): PokemonEntity {
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
      await this.fetchAllPokemonsFromFirstGenerationWithGeneralData();
    const completeDataOfAllPokemonsFromFirstGeneration: Array<PokemonEntity> =
      await this.getArrayWithCompleteDataOfAllPokemonsFromFirstGeneration(
        allGeneralPokemonDataFromFirstGeneration,
      );
    return completeDataOfAllPokemonsFromFirstGeneration;
  }

  private async fetchAllPokemonsFromFirstGenerationWithGeneralData(): Promise<GeneralPokemonsData> {
    const fetchResult: GeneralPokemonsData = (
      await axios.get(GENERAL_POKEMON_ARRAY_URL)
    ).data;
    return fetchResult;
  }

  private async getArrayWithCompleteDataOfAllPokemonsFromFirstGeneration(
    allGeneralPokemonDataFromFirstGeneration: GeneralPokemonsData,
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
        await this.fetchCompletePokemonDataByName(name);
      const pokemonDataFormattedToPokemonEntity: PokemonEntity =
        this.createPokemonEntityWithRawDataFromServer(
          rawCompletePokemonDataFromServer,
        );
      completeDataOfAllPokemonFromFirstGeneration.push(
        pokemonDataFormattedToPokemonEntity,
      );
    }

    return completeDataOfAllPokemonFromFirstGeneration;
  }

  private async fetchCompletePokemonDataByName(pokemonName: string) {
    const pokemonFetchedDataResult: RawCompletePokemonDataFromServer = (
      await axios.get<RawCompletePokemonDataFromServer>(
        UNIQUE_POKEMON_URL_BY_NAME(pokemonName),
      )
    ).data;

    return pokemonFetchedDataResult;
  }
}

export default PokemonRepository;
