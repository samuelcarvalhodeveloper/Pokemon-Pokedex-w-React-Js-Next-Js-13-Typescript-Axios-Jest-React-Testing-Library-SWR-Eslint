import { describe, expect, test } from "@jest/globals";
import { NUMBER_OF_POKEMONS_FROM_THE_FIRST_GENERATION } from "../../../../../../../../constants/pokemon/pokemon_data/server_request/utilitaries/number_of_pokemon_from_the_first_generation/numberOfPokemonsFromTheFirstGenerationConstant";
import GeneralArrayOfPokemonDataFetcher from "../../../../../../../../domains/pokemon/repositories/infrastructure/pokemon_data_from_server_fetcher/general_pokemon_data/GeneralArrayOfPokemonDataFetcher";

describe("Test Class GeneralArrayOfPokemonDataFetcher Behavior", () => {
  test('Test If Method: "getAllPokemonsFromFirstGenerationWithGeneralData()"; Fetches Data From Server Of Pokemon General Data Correctly', async () => {
    expect(
      (
        await GeneralArrayOfPokemonDataFetcher.getAllPokemonsFromFirstGenerationWithGeneralData()
      ).results.length,
    ).toEqual(NUMBER_OF_POKEMONS_FROM_THE_FIRST_GENERATION);
  });
});
