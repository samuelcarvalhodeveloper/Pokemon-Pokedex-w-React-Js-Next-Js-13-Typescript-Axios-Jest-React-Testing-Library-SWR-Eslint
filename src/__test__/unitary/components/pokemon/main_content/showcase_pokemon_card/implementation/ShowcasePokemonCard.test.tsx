import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import GetUniquePokemonDataByIdFacade from "../../../../../../../domains/pokemon/repositories/facade/GetUniquePokemonDataByIdFacade";
import ShowcasePokemonCard from "../../../../../../../components/pokemon/main_content/showcase_pokemon_card/implementation/ShowcasePokemonCard";
import { BULBASAUR_NAME } from "../../../../../../constants/pokemons/pokemonNamesConstants";
import { BULBASAUR_ID } from "../../../../../../constants/pokemons/pokemonsIdNumberConstants";
import PokemonEntity from "../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../../constants/jest/testConfigurationsConstants";

describe('Test "ShowcasePokemonCard" Component Behavior', () => {
  test(
    "Test If Elements Were Placed Correctly",
    async () => {
      const { pokemonId, pokemonImage, pokemonName, pokemonTypes } =
        (await GetUniquePokemonDataByIdFacade.execute(
          BULBASAUR_ID,
        )) as PokemonEntity;

      const { findByText } = render(
        <ShowcasePokemonCard
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
