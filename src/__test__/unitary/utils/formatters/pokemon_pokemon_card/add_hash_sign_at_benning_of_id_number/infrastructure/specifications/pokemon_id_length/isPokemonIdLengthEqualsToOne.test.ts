import { describe, expect, test } from "@jest/globals";
import isPokemonIdLengthEqualsToOne from "../../../../../../../../../utils/formatters/pokemon_pokemon_card/add_hash_sign_at_benning_of_id_number/infrastructure/specifications/pokemon_id_length/isPokemonIdLengthEqualsToOne";
import {
  POKEMON_ID_NUMBER_WITH_LENGTH_OF_ONE_CHARACTER,
  POKEMON_ID_NUMBER_WITH_LENGTH_OF_TWO_CHARACTERS,
} from "../../../../../../../../constants/pokemons/pokemonsIdNumberConstants";

describe("Test Module isPokemonIdLengthEqualsToOne Behavior", () => {
  test('Test If Function: "isPokemonIdLengthEqualsToOne"; Return True If Pokemon Id Casted To String Length Is Equals To One Correctly', () => {
    expect(
      isPokemonIdLengthEqualsToOne(
        POKEMON_ID_NUMBER_WITH_LENGTH_OF_ONE_CHARACTER.toString(),
      ),
    ).toBeTruthy();
    expect(
      isPokemonIdLengthEqualsToOne(
        POKEMON_ID_NUMBER_WITH_LENGTH_OF_TWO_CHARACTERS.toString(),
      ),
    ).toBeFalsy();
  });
});
