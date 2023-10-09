import { describe, expect, test } from "@jest/globals";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../../constants/jest/testConfigurationsConstants";
import GeneralArrayOfPokemonDataFetcher from "../../../../../../../domains/pokemon/repositories/infrastructure/pokemon_data_from_server_fetcher/general_pokemon_data/GeneralArrayOfPokemonDataFetcher";
import GeneralsPokemonsData from "../../../../../../../types/pokemon/raw_pokemon_information_from_server/general_pokemons_data/GeneralPokemonsData";
import CompleteDataOfPokemonsFromFirstGenerationAdapter from "../../../../../../../domains/pokemon/repositories/infrastructure/complete data_of_pokemons_form_first_generation_adapter/CompleteDataOfPokemonsFromFirstGenerationAdapter";
import { NUMBER_OF_POKEMONS_FROM_THE_FIRST_GENERATION } from "../../../../../../../constants/pokemon/pokemon_data/server_request/utilitaries/number_of_pokemon_from_the_first_generation/numberOfPokemonsFromTheFirstGenerationConstant";

describe("Test Class CompleteDataOfPokemonsFromFirstGenerationAdapter Behavior", () => {
  test(
    'Test If Method: "getArrayWithCompleteDataOfAllPokemonsFromFirstGeneration()"; Returns All Pokemons Complete Data From The First Generation And Adapt To Pokemon Entity Correctly',
    async () => {
      const generalPokemonData: GeneralsPokemonsData =
        await GeneralArrayOfPokemonDataFetcher.getAllPokemonsFromFirstGenerationWithGeneralData();

      expect(
        (
          await CompleteDataOfPokemonsFromFirstGenerationAdapter.getArrayWithCompleteDataOfAllPokemonsFromFirstGeneration(
            generalPokemonData,
          )
        ).length,
      ).toEqual(NUMBER_OF_POKEMONS_FROM_THE_FIRST_GENERATION);
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
