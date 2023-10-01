import { JSX, useEffect } from "react";
import { EMPTY_STRING } from "../../../../../../../constants/string_utilities/empty_string/emptyStringConstant";
import isSearchBarInputValueEmpty from "../../infrastructure/specifications/is_search_bar_input_value_empty/isSearchBarInputValueEmpty";
import PokemonEntity from "../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonCardWithNoLink from "../../pokemon_card_with_link/component_implementation/PokemonCardWithLink";

function PokemonCardContainerWithSearchBarInputValue(props: {
  searchBarInputValue: string;
  pokemonsArrayOfData: Array<PokemonEntity> | null | undefined;
}): JSX.Element {
  const { searchBarInputValue, pokemonsArrayOfData } = props;

  useEffect(() => {}, [searchBarInputValue]);

  return (
    <>
      {isSearchBarInputValueEmpty(searchBarInputValue)
        ? EMPTY_STRING
        : pokemonsArrayOfData
            ?.filter((pokemonItemData) =>
              pokemonItemData.pokemonName
                .toLowerCase()
                .includes(searchBarInputValue.toLowerCase()),
            )
            .map((pokemonItemData, index) => (
              <PokemonCardWithNoLink
                pokemonId={pokemonItemData.pokemonId}
                pokemonImage={pokemonItemData.pokemonImage}
                pokemonName={pokemonItemData.pokemonName}
                pokemonTypes={pokemonItemData.pokemonTypes}
                key={index}
              />
            ))}
    </>
  );
}

export default PokemonCardContainerWithSearchBarInputValue;
