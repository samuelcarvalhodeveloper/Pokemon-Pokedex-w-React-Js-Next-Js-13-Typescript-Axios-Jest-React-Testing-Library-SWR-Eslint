import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import PokemonCardWithLink from "../../../../../../../../../components/index/main_content/pokemon_content_container/pokemon_content/pokemon_card_with_link/component_implementation/PokemonCardWithLink";
import GetUniquePokemonDataByIdFacade from "../../../../../../../../../domains/pokemon/repositories/facade/GetUniquePokemonDataByIdFacade";
import { BULBASAUR_NAME } from "../../../../../../../../constants/pokemons/pokemonNamesConstants";
import { BULBASAUR_ID } from "../../../../../../../../constants/pokemons/pokemonsIdNumberConstants";
import PokemonEntity from "../../../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../../../../constants/jest/testConfigurationsConstants";

describe('Test "PokemonCardWithLink" Component Behavior', () => {
  test(
    "Test If Elements Were Placed Correctly",
    async () => {
      const { pokemonId, pokemonImage, pokemonName, pokemonTypes } =
        (await GetUniquePokemonDataByIdFacade.execute(
          BULBASAUR_ID,
        )) as PokemonEntity;

      const { findByText } = render(
        <PokemonCardWithLink
          pokemonId={pokemonId}
          pokemonImage={pokemonImage}
          pokemonName={pokemonName}
          pokemonTypes={pokemonTypes}
        />,
      );

      expect(findByText(BULBASAUR_NAME)).toBeTruthy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
