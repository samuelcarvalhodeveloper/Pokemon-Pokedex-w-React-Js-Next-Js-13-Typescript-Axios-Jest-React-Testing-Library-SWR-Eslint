import { describe, expect, test } from "@jest/globals";
import UniquePokemonCompleteDataByIdFetcher from "../../../../../../../../domains/pokemon/repositories/infrastructure/pokemon_data_from_server_fetcher/pokemon_complete_data/UniquePokemonCompleteDataByIdFetcher";
import { BULBASAUR_ID } from "../../../../../../../constants/pokemons/pokemonsIdNumberConstants";

describe("Test Class UniquePokemonCompleteDataByIdFetcher Behavior", () => {
  test('Test If Method: "getUniquePokemonCompleteDataById()"; Fetches Data From Server Based By Pokemon Id Correctly', async () => {
    expect(
      await UniquePokemonCompleteDataByIdFetcher.getUniquePokemonCompleteDataById(
        BULBASAUR_ID,
      ),
    ).toBeTruthy();
  });
});
