import { describe, expect, test } from "@jest/globals";
import { BULBASAUR_NAME } from "../../../../../../../../../constants/pokemons/pokemonNamesConstants";
import isSearchBarInputValueEmpty from "../../../../../../../../../../components/index/main_content/pokemon_content_container/pokemon_content/infrastructure/specifications/is_search_bar_input_value_empty/isSearchBarInputValueEmpty";
import { EMPTY_STRING } from "../../../../../../../../../../constants/string_utilities/empty_string/emptyStringConstant";

describe("Test Module isSearchBarInputValueEmpty Correctly", () => {
  test('Test If Function: "isSearchBarInputValueEmpty()"; Returns True If Search Bar Input Value Is Equal To Empty String Correctly', () => {
    expect(isSearchBarInputValueEmpty(EMPTY_STRING)).toBeTruthy();
    expect(isSearchBarInputValueEmpty(BULBASAUR_NAME)).toBeFalsy();
  });
});
