import { describe, test, expect } from "@jest/globals";
import {
  ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_LARGER_THAN_THREE_CHARACTERS,
  ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_OF_ONE_CHARACTER,
  ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_OF_TWO_CHARACTERS,
} from "../../../../../../../constants/pokemon/pokemon_data/formatted_id/idFormattedConstants";
import {
  POKEMON_ID_NUMBER_WITH_LENGTH_OF_ONE_CHARACTER,
  POKEMON_ID_NUMBER_WITH_LENGTH_OF_THREE_CHARACTERS,
  POKEMON_ID_NUMBER_WITH_LENGTH_OF_TWO_CHARACTERS,
} from "../../../../../../constants/pokemons/pokemonsIdNumberConstants";
import addHashSignAtBeginningOfIdNumber from "../../../../../../../utils/formatters/pokemon_pokemon_card/add_hash_sign_at_benning_of_id_number/implementation/addHashSignAtBeginningOfIdNumber";

describe('Test Module "addHashSignAtBeginningOfIdNumber" Behavior', () => {
  test('Test If Function: "addHashSignAtBeginningOfIdNumber()"; Returns Id Formatted With Hash Before Id Correctly', () => {
    expect(
      addHashSignAtBeginningOfIdNumber(
        POKEMON_ID_NUMBER_WITH_LENGTH_OF_ONE_CHARACTER,
      ),
    ).toEqual(
      ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_OF_ONE_CHARACTER(
        POKEMON_ID_NUMBER_WITH_LENGTH_OF_ONE_CHARACTER,
      ),
    );
    expect(
      addHashSignAtBeginningOfIdNumber(
        POKEMON_ID_NUMBER_WITH_LENGTH_OF_TWO_CHARACTERS,
      ),
    ).toEqual(
      ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_OF_TWO_CHARACTERS(
        POKEMON_ID_NUMBER_WITH_LENGTH_OF_TWO_CHARACTERS,
      ),
    );
    expect(
      addHashSignAtBeginningOfIdNumber(
        POKEMON_ID_NUMBER_WITH_LENGTH_OF_THREE_CHARACTERS,
      ),
    ).toEqual(
      ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_LARGER_THAN_THREE_CHARACTERS(
        POKEMON_ID_NUMBER_WITH_LENGTH_OF_THREE_CHARACTERS,
      ),
    );
  });
});
