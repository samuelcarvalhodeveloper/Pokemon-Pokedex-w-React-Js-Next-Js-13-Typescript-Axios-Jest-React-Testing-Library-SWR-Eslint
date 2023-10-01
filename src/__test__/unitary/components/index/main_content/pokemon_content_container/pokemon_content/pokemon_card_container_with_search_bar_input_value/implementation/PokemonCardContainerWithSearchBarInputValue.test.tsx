import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { BULBASAUR_NAME } from "@/__test__/constants/pokemons/pokemonNamesConstants";
import PokemonEntity from "@/domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import GetAllFirstGenerationPokemonsFacade from "@/domains/pokemon/repositories/facade/GetAllFirstGenerationPokemonsFacade";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "@/__test__/constants/jest/testConfigurationsConstants";
import PokemonCardContainerWithSearchBarInputValue from "../../../../../../../../../components/index/main_content/pokemon_content_container/pokemon_content/pokemon_card_container_with_search_bar_input_value/implementation/PokemonCardContainerWithSearchBarInputValue";

describe("Test Component PokemonCardContainerWithSearchBarInputValue Behavior", () => {
  test(
    "Test If Elements Were Rendered Correctly",
    async () => {
      const arrayOfPokemonsData: Array<PokemonEntity> =
        await GetAllFirstGenerationPokemonsFacade.execute();

      const { getByText } = render(
        <PokemonCardContainerWithSearchBarInputValue
          pokemonsArrayOfData={arrayOfPokemonsData}
          searchBarInputValue={BULBASAUR_NAME}
        />,
      );

      expect(getByText(BULBASAUR_NAME)).toBeTruthy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
