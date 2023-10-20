import { describe, expect, test } from "@jest/globals";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../../../../../constants/jest/testConfigurationsConstants";
import GetAllFirstGenerationPokemonsFacade from "../../../../../../../../../../domains/pokemon/repositories/facade/GetAllFirstGenerationPokemonsFacade";
import emptyArrayOfPokemonData from "../../../../../../../../../mocks/pokemon/data_mock/emptyArrayOfPokemonData";
import isArrayOfPokemonDataEmpty from "../../../../../../../../../../components/index/main_content/pokemon_content_container/pokemon_content/pagination_element/infrastructure/specifications/isArrayOfPokemonDataEmpty";

describe("Test Module isArrayOfPokemonDataEmpty Behavior", () => {
  test(
    'Test If Function: "isArrayOfPokemonDataEmpty()"; Return True If Array Is Empty Correctly',
    async () => {
      expect(isArrayOfPokemonDataEmpty(emptyArrayOfPokemonData)).toBeTruthy();
      expect(
        isArrayOfPokemonDataEmpty(
          await GetAllFirstGenerationPokemonsFacade.execute(),
        ),
      ).toBeFalsy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
