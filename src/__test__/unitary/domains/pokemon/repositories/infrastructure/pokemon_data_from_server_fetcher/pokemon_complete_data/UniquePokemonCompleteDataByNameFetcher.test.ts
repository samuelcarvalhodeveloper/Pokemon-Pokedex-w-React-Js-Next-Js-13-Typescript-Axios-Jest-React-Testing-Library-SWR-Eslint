import { describe, expect, test } from "@jest/globals";
import { BULBASAUR_NAME } from "../../../../../../../constants/pokemons/pokemonNamesConstants";
import UniquePokemonCompleteDataByNameFetcher from "../../../../../../../../domains/pokemon/repositories/infrastructure/pokemon_data_from_server_fetcher/pokemon_complete_data/UniquePokemonCompleteDataByNameFetcher";

describe("Test Class UniquePokemonCompleteDataByNameFetcher Behavior", () => {
  test('Test If Method: "getCompletePokemonDataByName()"; Fetches Data From Server Based By Pokemon Name Correctly', async () => {
    expect(
      await UniquePokemonCompleteDataByNameFetcher.getCompletePokemonDataByName(
        BULBASAUR_NAME.toLowerCase(),
      ),
    ).toBeTruthy();
  });
});
