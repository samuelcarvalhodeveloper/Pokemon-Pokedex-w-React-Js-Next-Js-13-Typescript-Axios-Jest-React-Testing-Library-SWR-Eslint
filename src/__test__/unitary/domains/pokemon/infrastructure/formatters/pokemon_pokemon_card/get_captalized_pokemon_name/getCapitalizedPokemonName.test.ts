import { describe, test, expect } from "@jest/globals";
import getCapitalizedPokemonName from "../../../../../../../../domains/pokemon/infrastructure/formatters/pokemon_pokemon_card/get_captalized_pokemon_name/getCapitalizedPokemonName";
import {
  POKEMON_NAME_STRING_WITH_FIRST_LETTER_CAPITALIZED,
  POKEMON_POKEMON_STRING_WITH_FIRST_LETTER_NOT_CAPITALIZED,
} from "../../../../../../../constants/pokemons/pokemonNamesConstants";

describe('Test Module "getCapitalizedPokemonName" Behavior', () => {
  test('Test If Function: "getCapitalizedPokemonName()"; Turn First Letter Of String To Upper Case Correctly', () => {
    expect(
      getCapitalizedPokemonName(
        POKEMON_POKEMON_STRING_WITH_FIRST_LETTER_NOT_CAPITALIZED,
      ),
    ).toEqual(POKEMON_NAME_STRING_WITH_FIRST_LETTER_CAPITALIZED);
  });
});
