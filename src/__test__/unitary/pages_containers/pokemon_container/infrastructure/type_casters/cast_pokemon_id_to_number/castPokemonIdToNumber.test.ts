import { BULBASAUR_ID } from "@/__test__/constants/pokemons/pokemonsIdNumberConstants";
import { describe, expect, test } from "@jest/globals";
import castPokemonIdToNumber from "../../../../../../../pages_containers/pokemon_container/infrastructure/type_casters/cast_pokemon_id_to_number/castPokemonIdToNumber";

describe("Test Module castPokemonIdToNumber Behavior", () => {
  test('Test If Function: "castPokemonIdToNumber()"; Cast Type Of String From Pokemon Id To Number Correctly', () => {
    expect(typeof castPokemonIdToNumber(BULBASAUR_ID.toString())).toEqual(
      typeof BULBASAUR_ID,
    );
  });
});
