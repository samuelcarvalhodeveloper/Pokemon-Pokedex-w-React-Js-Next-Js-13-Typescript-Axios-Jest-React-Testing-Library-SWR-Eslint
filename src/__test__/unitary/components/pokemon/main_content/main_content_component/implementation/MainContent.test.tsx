import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import GetUniquePokemonDataByIdFacade from "../../../../../../../domains/pokemon/repositories/facade/GetUniquePokemonDataByIdFacade";
import { BULBASAUR_ID } from "../../../../../../constants/pokemons/pokemonsIdNumberConstants";
import { BULBASAUR_NAME } from "../../../../../../constants/pokemons/pokemonNamesConstants";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../../constants/jest/testConfigurationsConstants";
import MainContent from "../../../../../../../components/pokemon/main_content/main_content_component/implementation/MainContent";

describe('Test "MainContent" Component Behavior', () => {
  test(
    "Test If Elements Were Placed Correctly",
    async () => {
      const { findByText } = render(
        <MainContent
          pokemonData={await GetUniquePokemonDataByIdFacade.execute(
            BULBASAUR_ID,
          )}
        />,
      );

      expect(await findByText(BULBASAUR_NAME)).toBeTruthy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
