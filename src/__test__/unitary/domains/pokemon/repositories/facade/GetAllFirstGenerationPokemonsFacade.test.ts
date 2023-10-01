import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "@/__test__/constants/jest/testConfigurationsConstants";
import GetAllFirstGenerationPokemonsFacade from "@/domains/pokemon/repositories/facade/GetAllFirstGenerationPokemonsFacade";
import { describe, expect, test } from "@jest/globals";

describe("Test Class GetAllFirstGenerationPokemonsFacade Behavior", () => {
  test(
    'Test If Method: "execute()"; Returns An Array With All Pokemons From The First Generation From Repository Correctly',
    async () => {
      expect(await GetAllFirstGenerationPokemonsFacade.execute()).toBeTruthy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
