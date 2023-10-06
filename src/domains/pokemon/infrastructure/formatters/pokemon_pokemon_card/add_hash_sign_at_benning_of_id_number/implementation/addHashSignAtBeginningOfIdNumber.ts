import {
  ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_LARGER_THAN_THREE_CHARACTERS,
  ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_OF_ONE_CHARACTER,
  ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_OF_TWO_CHARACTERS,
} from "../../../../../../../constants/pokemon/pokemon_data/formatted_id/idFormattedConstants";
import isPokemonIdLengthEqualsToOne from "../infrastructure/specifications/pokemon_id_length/isPokemonIdLengthEqualsToOne";
import isPokemonIdLengthEqualsToTwo from "../infrastructure/specifications/pokemon_id_length/isPokemonIdLengthEqualsToTwo";

function addHashSignAtBeginningOfIdNumber(id: number | undefined): string {
  const stringOfId: string | undefined = id?.toString();

  if (isPokemonIdLengthEqualsToOne(stringOfId))
    return ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_OF_ONE_CHARACTER(id);
  if (isPokemonIdLengthEqualsToTwo(stringOfId))
    return ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_OF_TWO_CHARACTERS(id);

  return ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_LARGER_THAN_THREE_CHARACTERS(
    id,
  );
}

export default addHashSignAtBeginningOfIdNumber;
