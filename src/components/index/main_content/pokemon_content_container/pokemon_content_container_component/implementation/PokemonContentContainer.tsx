"use client";

import React, { JSX, useState } from "react";
import { INDEX_PAGE_SEARCH_BAR_INPUT_ELEMENT_TEST_ID } from "../../../../../../__test__/constants/pages/index/pageElementsTestIdConstants";
import { EMPTY_STRING } from "../../../../../../constants/string_utilities/empty_string/emptyStringConstant";
import styles from "../styles/styles.module.css";
import PokemonContent from "../../pokemon_content/pokemon_content_component/implementation/PokemonContent";
import Loading from "../../loading/implementation/Loading";
import useAllPokemonsData from "../infrastructure/custom_hooks/use_unique_pokemon_data/implementation/useUniquePokemonData";
import isPokemonArrayOfDataNull from "../infrastructure/specifications/isPokemonArrayOfDataNull";

function PokemonContentContainer(): JSX.Element {
  const [searchBarInputValue, setSearchBarInputValue] = useState(EMPTY_STRING);
  const arrayOfPokemonData = useAllPokemonsData();

  return (
    <main className={styles.container}>
      <section className={styles.center}>
        <p className={styles.description}>
          Samuel Carvalho's Pokédex: Where the pokémons shine.
        </p>
        <div className={styles.search_bar}>
          <span className={styles.search_bar_label}>Search</span>
          <input
            className={styles.search_bar_input}
            type="text"
            data-testid={INDEX_PAGE_SEARCH_BAR_INPUT_ELEMENT_TEST_ID}
            value={searchBarInputValue}
            onChange={(e) => {
              setSearchBarInputValue(e.target.value);
            }}
          />
        </div>
        {isPokemonArrayOfDataNull(arrayOfPokemonData) ? (
          <Loading />
        ) : (
          <PokemonContent
            pokemonsArrayOfData={arrayOfPokemonData}
            searchBarInputValue={searchBarInputValue}
          />
        )}
      </section>
    </main>
  );
}

export default PokemonContentContainer;
