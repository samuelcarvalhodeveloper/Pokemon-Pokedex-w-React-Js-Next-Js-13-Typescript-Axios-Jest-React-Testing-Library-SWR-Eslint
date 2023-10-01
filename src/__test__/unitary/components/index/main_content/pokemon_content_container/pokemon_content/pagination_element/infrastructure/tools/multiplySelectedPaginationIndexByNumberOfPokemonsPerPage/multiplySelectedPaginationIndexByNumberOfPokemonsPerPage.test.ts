import { describe, expect, test } from "@jest/globals";
import multiplySelectedPaginationIndexByNumberOfPokemonsPerPage from "../../../../../../../../../../../components/index/main_content/pokemon_content_container/pokemon_content/pagination_element/infrastructure/tools/multiplySelectedPaginationIndexByNumberOfPokemonsPerPage/multiplySelectedPaginationIndexByNumberOfPokemonsPerPage";
import { FIRST_PAGINATION_SELECTED_INDEX } from "../../../../../../../../../../../constants/pages/index/pagination_component/firstPaginationSelectedIndexConstants";

describe("Test Module multiplySelectedPaginationIndexByNumberOfPokemonsPerPage Behavior", () => {
  test('Test If Function: "multiplySelectedPaginationIndexByNumberOfPokemonsPerPage"; Multiplies Number Passed By Parameter By Number Of Pokemons Per Page In Pagination Correctly', () => {
    expect(
      multiplySelectedPaginationIndexByNumberOfPokemonsPerPage(
        FIRST_PAGINATION_SELECTED_INDEX,
      ),
    ).toEqual(FIRST_PAGINATION_SELECTED_INDEX);
  });
});
