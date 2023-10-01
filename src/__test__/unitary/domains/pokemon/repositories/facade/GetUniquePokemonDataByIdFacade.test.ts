import { describe, expect, test } from "@jest/globals";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../constants/jest/testConfigurationsConstants";
import { BULBASAUR_ID } from "../../../../../constants/pokemons/pokemonsIdNumberConstants";
import GetUniquePokemonDataByIdFacade from "../../../../../../domains/pokemon/repositories/facade/GetUniquePokemonDataByIdFacade";
import PokemonEntity from "../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";

describe("Test Class GetUniquePokemonDataByIdFacade Behavior", () => {
  test(
    'Test If Method: "execute()"; Returns Chose Pokemon Data From Repository Correctly',
    async () => {
      const pokemonData: PokemonEntity =
        await GetUniquePokemonDataByIdFacade.execute(BULBASAUR_ID);

      expect(pokemonData).toBeTruthy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
