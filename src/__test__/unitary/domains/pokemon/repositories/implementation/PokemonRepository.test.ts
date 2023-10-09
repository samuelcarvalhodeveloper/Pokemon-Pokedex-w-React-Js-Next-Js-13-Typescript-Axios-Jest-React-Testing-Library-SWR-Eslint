import { beforeAll, describe, expect, test } from "@jest/globals";
import fillPokemonDataArrayWithDataFromServer from "../../../../../mocks/pokemon/function_mock/fillPokemonDataArrayWithDataFromServer";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../constants/jest/testConfigurationsConstants";
import { NUMBER_OF_POKEMONS_FROM_THE_FIRST_GENERATION } from "../../../../../../constants/pokemon/pokemon_data/server_request/utilitaries/number_of_pokemon_from_the_first_generation/numberOfPokemonsFromTheFirstGenerationConstant";
import { BULBASAUR_NAME } from "../../../../../constants/pokemons/pokemonNamesConstants";
import { BULBASAUR_ID } from "../../../../../constants/pokemons/pokemonsIdNumberConstants";
import FIRST_INDEX_OF_THE_ARRAY from "../../../../../../constants/array_utilities/first_index_of_the_array/firstIndexOfTheArrayConstants";
import PokemonEntity from "../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonRepository from "../../../../../../domains/pokemon/repositories/implementation/PokemonRepository";

describe("Test Class PokemonRepository Behavior", () => {
  const arrayOfAllPokemonFromFirstGenerationWithCompleteInformation: Array<PokemonEntity> =
    [];

  beforeAll(async () => {
    await fillPokemonDataArrayWithDataFromServer(
      arrayOfAllPokemonFromFirstGenerationWithCompleteInformation,
    );
  }, ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER);

  test('Test If Method: "getUniquePokemonById()"; Return Chose Pokemon Complete Information From Server Correctly', async () => {
    expect(
      await new PokemonRepository().getUniquePokemonDataById(BULBASAUR_ID),
    ).toBeTruthy();
  });

  test(
    'Test If Method: "getAllFirstGenerationPokemons()"; Return An Array With All Pokemons From The First Generation Complete Information From Server Correctly',
    async () => {
      expect(
        arrayOfAllPokemonFromFirstGenerationWithCompleteInformation,
      ).toBeTruthy();
      expect(
        arrayOfAllPokemonFromFirstGenerationWithCompleteInformation.length,
      ).toEqual(NUMBER_OF_POKEMONS_FROM_THE_FIRST_GENERATION);
      expect(
        arrayOfAllPokemonFromFirstGenerationWithCompleteInformation[
          FIRST_INDEX_OF_THE_ARRAY
        ].pokemonId,
      ).toEqual(BULBASAUR_ID);
      expect(
        arrayOfAllPokemonFromFirstGenerationWithCompleteInformation[
          FIRST_INDEX_OF_THE_ARRAY
        ].pokemonName,
      ).toEqual(BULBASAUR_NAME);
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
