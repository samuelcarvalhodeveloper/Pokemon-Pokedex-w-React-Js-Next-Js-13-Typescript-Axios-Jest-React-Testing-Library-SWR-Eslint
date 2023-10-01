import { describe, test, expect } from "@jest/globals";
import {
  POKEMON_NAME_STRING_WITH_FIRST_LETTER_CAPITALIZED,
  POKEMON_POKEMON_STRING_WITH_FIRST_LETTER_NOT_CAPITALIZED,
} from "../../../../../constants/pokemons/pokemonNamesConstants";
import capitalizeFirstLetterOfPokemonName from "../../../../../../utils/formatters/strings/capitalize_first_letter_of_string/capitalizeFirstLetterOfString";

describe('Test Module "capitalizeFirstLetterOfString" Behavior', () => {
  test('Test If Function: "capitalizeFirstLetterOfString()"; Turn First Letter Of String To Upper Case Correctly', () => {
    expect(
      capitalizeFirstLetterOfPokemonName(
        POKEMON_POKEMON_STRING_WITH_FIRST_LETTER_NOT_CAPITALIZED,
      ),
    ).toEqual(POKEMON_NAME_STRING_WITH_FIRST_LETTER_CAPITALIZED);
  });
});
