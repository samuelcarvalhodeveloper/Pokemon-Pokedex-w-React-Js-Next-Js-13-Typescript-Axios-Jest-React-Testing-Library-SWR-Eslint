import { EMPTY_STRING } from "../../../../../../constants/string_utilities/empty_string/emptyStringConstant";
import { STRING_FIRST_INDEX } from "../../../../../../constants/string_utilities/string_manipulation/first_string_index/stringFirstIndexConstant";

function getCapitalizedPokemonName(stringToBeCapitalized: string): string {
  const firstStringLetterCapitalized: string = stringToBeCapitalized
    .at(STRING_FIRST_INDEX)
    ?.toUpperCase()!;
  const stringToBeCapitalizedWithoutFirstLetter: string =
    stringToBeCapitalized.replace(
      stringToBeCapitalized.at(STRING_FIRST_INDEX)!,
      EMPTY_STRING,
    );

  return firstStringLetterCapitalized + stringToBeCapitalizedWithoutFirstLetter;
}

export default getCapitalizedPokemonName;
