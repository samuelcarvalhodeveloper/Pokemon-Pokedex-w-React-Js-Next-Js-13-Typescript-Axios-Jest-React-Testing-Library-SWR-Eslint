import { describe, expect, test } from "@jest/globals";
import isPokemonNameEqualsToUndefined from "../../../../../../../../components/pokemon/page_title_client_component/infrastructure/specifications/is_pokemon_name_equals_to_undefined/isPokemonNameEqualsToUndefined";
import { BULBASAUR_NAME } from "../../../../../../../constants/pokemons/pokemonNamesConstants";

describe("Test Module isPokemonNameEqualsToUndefined Behavior", () => {
  test('Test If Function: "isPokemonNameEqualsToUndefined()"; Return True If Pokemon Name Is Equals To Undefined Correctly', () => {
    expect(isPokemonNameEqualsToUndefined(undefined)).toBeTruthy();
    expect(isPokemonNameEqualsToUndefined(BULBASAUR_NAME)).toBeFalsy();
  });
});
