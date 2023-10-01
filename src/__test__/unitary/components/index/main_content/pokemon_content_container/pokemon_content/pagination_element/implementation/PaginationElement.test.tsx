import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "@/__test__/constants/jest/testConfigurationsConstants";
import { PAGINATION_COMPONENT_ELEMENT_ROLE } from "@/__test__/constants/pages/index/pageElementsRoleTextConstants";
import { EMPTY_STRING } from "../../../../../../../../../constants/string_utilities/empty_string/emptyStringConstant";
import PokemonEntity from "../../../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import GetAllFirstGenerationPokemonsFacade from "../../../../../../../../../domains/pokemon/repositories/facade/GetAllFirstGenerationPokemonsFacade";
import PaginationElement from "../../../../../../../../../components/index/main_content/pokemon_content_container/pokemon_content/pagination_element/implementation/PaginationElement";

describe("Test Component PaginationElement Behavior", () => {
  test(
    "Test If Elements Were Rendered Correctly",
    async () => {
      const arrayOfPokemonData: Array<PokemonEntity> =
        await GetAllFirstGenerationPokemonsFacade.execute();
      const { getByRole } = render(
        <PaginationElement
          pokemonsArrayOfData={arrayOfPokemonData}
          searchBarInputValue={EMPTY_STRING}
          setCurrentPaginationSelectedIndex={() => {}}
        />,
      );

      expect(getByRole(PAGINATION_COMPONENT_ELEMENT_ROLE)).toBeTruthy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
