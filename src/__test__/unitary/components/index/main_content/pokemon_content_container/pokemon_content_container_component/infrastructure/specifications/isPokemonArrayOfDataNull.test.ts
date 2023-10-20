import { describe, expect, test } from "@jest/globals";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../../../../constants/jest/testConfigurationsConstants";
import GetAllFirstGenerationPokemonsFacade from "../../../../../../../../../domains/pokemon/repositories/facade/GetAllFirstGenerationPokemonsFacade";
import isPokemonArrayOfDataNull from "../../../../../../../../../components/index/main_content/pokemon_content_container/pokemon_content_container_component/infrastructure/specifications/isPokemonArrayOfDataNull";

describe("Test Module isPokemonArrayOfDataNull Behavior", () => {
  test(
    'Test If Function: "isPokemonArrayOfDataNull()"; Correctly',
    async () => {
      expect(isPokemonArrayOfDataNull(null)).toBeTruthy();
      expect(
        isPokemonArrayOfDataNull(
          await GetAllFirstGenerationPokemonsFacade.execute(),
        ),
      ).toBeFalsy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
