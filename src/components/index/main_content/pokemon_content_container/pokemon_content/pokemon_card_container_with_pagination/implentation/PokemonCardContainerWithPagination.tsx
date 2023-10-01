import { JSX, useEffect } from "react";
import { NUMBER_OF_POKEMON_PER_PAGINATION_PAGE } from "../../../../../../../constants/pages/index/pagination_component/numberOfPokemonPerPaginationPageConstants";
import { EMPTY_STRING } from "../../../../../../../constants/string_utilities/empty_string/emptyStringConstant";
import isSearchBarInputValueEmpty from "../../infrastructure/specifications/is_search_bar_input_value_empty/isSearchBarInputValueEmpty";
import PokemonEntity from "../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonCardWithLink from "../../pokemon_card_with_link/component_implementation/PokemonCardWithLink";

function PokemonCardContainerWithPagination(props: {
  pokemonsArrayOfData: Array<PokemonEntity> | null | undefined;
  searchBarInputValue: string;
  currentPaginationSelectedIndex: number;
}): JSX.Element {
  const {
    pokemonsArrayOfData,
    searchBarInputValue,
    currentPaginationSelectedIndex,
  } = props;

  useEffect(() => {}, [searchBarInputValue]);

  return (
    <>
      {isSearchBarInputValueEmpty(searchBarInputValue)
        ? pokemonsArrayOfData
            ?.slice(
              currentPaginationSelectedIndex,
              currentPaginationSelectedIndex +
                NUMBER_OF_POKEMON_PER_PAGINATION_PAGE,
            )
            .map((pokemonItemData, index) => (
              <PokemonCardWithLink
                pokemonId={pokemonItemData.pokemonId}
                pokemonImage={pokemonItemData.pokemonImage}
                pokemonName={pokemonItemData.pokemonName}
                pokemonTypes={pokemonItemData.pokemonTypes}
                key={index}
              />
            ))
        : EMPTY_STRING}
    </>
  );
}

export default PokemonCardContainerWithPagination;
