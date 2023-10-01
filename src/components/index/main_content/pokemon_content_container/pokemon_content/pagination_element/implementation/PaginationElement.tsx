import { JSX, useEffect, Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";
import isSearchBarInputValueEmpty from "../../infrastructure/specifications/is_search_bar_input_value_empty/isSearchBarInputValueEmpty";
import { JUST_THREE_PAGINATION_PAGES_OPTIONS_TO_CHOOSE_NUMBER } from "../../../../../../../constants/pages/index/pagination_component/justThreePaginationPagesOptionsToChooseNumberConstants";
import { NO_MARGINAL_NUMBER_TO_CHOOSE } from "../../../../../../../constants/pages/index/pagination_component/noMarginalNumberToChooseConstants";
import {
  TOTAL_OF_PAGES_IN_PAGINATION,
  TOTAL_OF_PAGES_IN_PAGINATION_PLACEHOLDER,
} from "../../../../../../../constants/pages/index/pagination_component/totalOfPagesInPaginationConstant";
import { EMPTY_STRING } from "../../../../../../../constants/string_utilities/empty_string/emptyStringConstant";
import PokemonEntity from "../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import styles from "../styles/styles.module.css";
import multiplySelectedPaginationIndexByNumberOfPokemonsPerPage from "../infrastructure/tools/multiplySelectedPaginationIndexByNumberOfPokemonsPerPage/multiplySelectedPaginationIndexByNumberOfPokemonsPerPage";
import isArrayOfPokemonDataEmpty from "../infrastructure/specifications/isArrayOfPokemonDataEmpty";

function PaginationElement(props: {
  pokemonsArrayOfData: Array<PokemonEntity> | null | undefined;
  searchBarInputValue: string;
  setCurrentPaginationSelectedIndex: Dispatch<SetStateAction<number>>;
}): JSX.Element {
  const {
    pokemonsArrayOfData,
    searchBarInputValue,
    setCurrentPaginationSelectedIndex,
  } = props;

  useEffect(() => {}, [searchBarInputValue, pokemonsArrayOfData]);

  return (
    <>
      {isSearchBarInputValueEmpty(searchBarInputValue) ? (
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          activeLinkClassName={styles.active}
          pageRangeDisplayed={
            JUST_THREE_PAGINATION_PAGES_OPTIONS_TO_CHOOSE_NUMBER
          }
          breakClassName={styles.break}
          marginPagesDisplayed={NO_MARGINAL_NUMBER_TO_CHOOSE}
          className={styles.pagination}
          onPageChange={(event: { selected: number }) => {
            setCurrentPaginationSelectedIndex(
              multiplySelectedPaginationIndexByNumberOfPokemonsPerPage(
                event.selected,
              ),
            );
          }}
          pageCount={
            isArrayOfPokemonDataEmpty(pokemonsArrayOfData)
              ? TOTAL_OF_PAGES_IN_PAGINATION_PLACEHOLDER
              : TOTAL_OF_PAGES_IN_PAGINATION(pokemonsArrayOfData!.length)
          }
        />
      ) : (
        EMPTY_STRING
      )}
    </>
  );
}

export default PaginationElement;
