import { EMPTY_STRING } from "../../../../../../../../constants/string_utilities/empty_string/emptyStringConstant";

function isSearchBarInputValueEmpty(searchBarInputValue: string): boolean {
  return searchBarInputValue === EMPTY_STRING;
}

export default isSearchBarInputValueEmpty;
