import { JSX, useState } from "react";
import { POKEMON_CONTENT_ELEMENT_TEST_ID } from "../../../../../../../__test__/constants/pages/index/pageElementsTestIdConstants";
import { FIRST_PAGINATION_SELECTED_INDEX } from "../../../../../../../constants/pages/index/pagination_component/firstPaginationSelectedIndexConstants";
import PokemonEntity from "../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonCardContainerWithSearchBarInputValue from "../../pokemon_card_container_with_search_bar_input_value/implementation/PokemonCardContainerWithSearchBarInputValue";
import PokemonCardContainerWithPagination from "../../pokemon_card_container_with_pagination/implentation/PokemonCardContainerWithPagination";
import PaginationElement from "../../pagination_element/implementation/PaginationElement";
import styles from "../styles/styles.module.css";

function PokemonContent(props: {
  pokemonsArrayOfData: Array<PokemonEntity> | null | undefined;
  searchBarInputValue: string;
}): JSX.Element {
  const [currentPaginationSelectedIndex, setCurrentPaginationSelectedIndex] =
    useState(FIRST_PAGINATION_SELECTED_INDEX);
  const { pokemonsArrayOfData, searchBarInputValue } = props;

  return (
    <>
      <div
        data-testid={POKEMON_CONTENT_ELEMENT_TEST_ID}
        className={styles.pokemon_container}>
        <PokemonCardContainerWithSearchBarInputValue
          pokemonsArrayOfData={pokemonsArrayOfData}
          searchBarInputValue={searchBarInputValue}
        />
        <PokemonCardContainerWithPagination
          pokemonsArrayOfData={pokemonsArrayOfData}
          searchBarInputValue={searchBarInputValue}
          currentPaginationSelectedIndex={currentPaginationSelectedIndex}
        />
      </div>
      <PaginationElement
        pokemonsArrayOfData={pokemonsArrayOfData}
        searchBarInputValue={searchBarInputValue}
        setCurrentPaginationSelectedIndex={setCurrentPaginationSelectedIndex}
      />
    </>
  );
}

export default PokemonContent;
