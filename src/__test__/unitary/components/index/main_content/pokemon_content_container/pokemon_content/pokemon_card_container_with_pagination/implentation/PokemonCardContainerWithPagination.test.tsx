import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { EMPTY_STRING } from "../../../../../../../../../constants/string_utilities/empty_string/emptyStringConstant";
import PokemonEntity from "../../../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../../../../constants/jest/testConfigurationsConstants";
import GetAllFirstGenerationPokemonsFacade from "../../../../../../../../../domains/pokemon/repositories/facade/GetAllFirstGenerationPokemonsFacade";
import { FIRST_PAGINATION_SELECTED_INDEX } from "../../../../../../../../../constants/pages/index/pagination_component/firstPaginationSelectedIndexConstants";
import { BULBASAUR_NAME } from "../../../../../../../../constants/pokemons/pokemonNamesConstants";
import PokemonCardContainerWithPagination from "../../../../../../../../../components/index/main_content/pokemon_content_container/pokemon_content/pokemon_card_container_with_pagination/implentation/PokemonCardContainerWithPagination";

describe("Test Component PokemonCardContainerWithPagination Behavior", () => {
  test(
    "Test If Element Were Rendered Correctly",
    async () => {
      const arrayOfPokemonsData: Array<PokemonEntity> =
        await GetAllFirstGenerationPokemonsFacade.execute();

      const { getByText } = render(
        <PokemonCardContainerWithPagination
          currentPaginationSelectedIndex={FIRST_PAGINATION_SELECTED_INDEX}
          pokemonsArrayOfData={arrayOfPokemonsData}
          searchBarInputValue={EMPTY_STRING}
        />,
      );

      expect(getByText(BULBASAUR_NAME)).toBeTruthy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
