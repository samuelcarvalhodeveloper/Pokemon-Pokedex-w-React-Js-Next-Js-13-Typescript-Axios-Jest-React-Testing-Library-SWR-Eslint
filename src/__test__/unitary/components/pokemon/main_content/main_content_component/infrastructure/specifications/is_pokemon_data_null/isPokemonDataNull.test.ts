import { describe, expect, test } from "@jest/globals";
import GetUniquePokemonDataByIdFacade from "../../../../../../../../../domains/pokemon/repositories/facade/GetUniquePokemonDataByIdFacade";
import PokemonEntity from "../../../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import isPokemonDataNull from "../../../../../../../../../components/pokemon/main_content/main_content_component/infrastructure/specifications/is_pokemon_data_null/isPokemonDataNull";
import { BULBASAUR_ID } from "../../../../../../../../constants/pokemons/pokemonsIdNumberConstants";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../../../../constants/jest/testConfigurationsConstants";

describe("Test Module isPokemonDataNull Behavior", () => {
  test(
    'Test If Function: "isPokemonDataNull()"; Returns Null If Data From Server Is Equal To Null Correctly',
    async () => {
      const requestResult: PokemonEntity =
        await GetUniquePokemonDataByIdFacade.execute(BULBASAUR_ID);

      expect(isPokemonDataNull(requestResult)).toBeFalsy();
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
