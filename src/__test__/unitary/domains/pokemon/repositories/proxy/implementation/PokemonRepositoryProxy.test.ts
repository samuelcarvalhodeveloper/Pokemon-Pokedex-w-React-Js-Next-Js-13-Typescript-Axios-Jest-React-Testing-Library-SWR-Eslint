import { describe, expect, test } from "@jest/globals";
import PokemonRepositoryProxy from "../../../../../../../domains/pokemon/repositories/proxy/implementation/PokemonRepositoryProxy";
import { BULBASAUR_ID } from "../../../../../../constants/pokemons/pokemonsIdNumberConstants";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../../constants/jest/testConfigurationsConstants";

describe("Test PokemonRepositoryProxy Behavior", () => {
  test(
    'Test If Method: "getAllFirstGenerationPokemonsData()"; Return An Array Of Pokemon Data Stored In Cache Correctly',
    async () => {
      expect(
        await new PokemonRepositoryProxy().getAllFirstGenerationPokemonsData(),
      ).toBeTruthy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );

  test(
    'Test If Method: "getUniquePokemonDataById()"; Return Chose By Id Pokemon Data Stored In Cache Correctly',
    async () => {
      expect(
        await new PokemonRepositoryProxy().getUniquePokemonDataById(
          BULBASAUR_ID,
        ),
      ).toBeTruthy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
