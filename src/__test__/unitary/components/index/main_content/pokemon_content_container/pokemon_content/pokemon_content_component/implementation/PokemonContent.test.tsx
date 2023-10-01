import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../../../../constants/jest/testConfigurationsConstants";
import { POKEMON_CONTENT_ELEMENT_TEST_ID } from "../../../../../../../../constants/pages/index/pageElementsTestIdConstants";
import PokemonContent from "../../../../../../../../../components/index/main_content/pokemon_content_container/pokemon_content/pokemon_content_component/implementation/PokemonContent";
import { EMPTY_STRING } from "../../../../../../../../../constants/string_utilities/empty_string/emptyStringConstant";
import PokemonEntity from "../../../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import GetAllFirstGenerationPokemonsFacade from "../../../../../../../../../domains/pokemon/repositories/facade/GetAllFirstGenerationPokemonsFacade";

describe("Test Component PokemonContent Behavior", () => {
  test(
    "Test If Elements Were Rendered Correctly",
    async () => {
      const arrayOfPokemonsData: Array<PokemonEntity> =
        await GetAllFirstGenerationPokemonsFacade.execute();

      const { getByTestId } = render(
        <PokemonContent
          searchBarInputValue={EMPTY_STRING}
          pokemonsArrayOfData={arrayOfPokemonsData}
        />,
      );

      expect(getByTestId(POKEMON_CONTENT_ELEMENT_TEST_ID)).toBeTruthy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
