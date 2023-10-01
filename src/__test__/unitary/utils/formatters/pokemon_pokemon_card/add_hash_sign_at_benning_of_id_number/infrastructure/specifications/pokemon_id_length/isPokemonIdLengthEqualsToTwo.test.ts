import { describe, expect, test } from "@jest/globals";
import isPokemonIdLengthEqualsToTwo from "../../../../../../../../../utils/formatters/pokemon_pokemon_card/add_hash_sign_at_benning_of_id_number/infrastructure/specifications/pokemon_id_length/isPokemonIdLengthEqualsToTwo";
import {
  POKEMON_ID_NUMBER_WITH_LENGTH_OF_ONE_CHARACTER,
  POKEMON_ID_NUMBER_WITH_LENGTH_OF_TWO_CHARACTERS,
} from "../../../../../../../../constants/pokemons/pokemonsIdNumberConstants";

describe("Test Module isPokemonIdLengthEqualsToTwo Behavior", () => {
  test('Test If Function: "isPokemonIdLengthEqualsToTwo"; Return True If Pokemon Id Casted To String Length Is Equals To Two Correctly', () => {
    expect(
      isPokemonIdLengthEqualsToTwo(
        POKEMON_ID_NUMBER_WITH_LENGTH_OF_TWO_CHARACTERS.toString(),
      ),
    ).toBeTruthy();
    expect(
      isPokemonIdLengthEqualsToTwo(
        POKEMON_ID_NUMBER_WITH_LENGTH_OF_ONE_CHARACTER.toString(),
      ),
    ).toBeFalsy();
  });
});
