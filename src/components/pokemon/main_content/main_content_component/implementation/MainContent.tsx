"use client";

import { JSX } from "react";
import Link from "next/link";
import { MAIN_CONTAINER_DESCRIPTION_ELEMENT_TEST_ID } from "../../../../../__test__/constants/pages/pokemon/pageElementsTestIdsConstants";
import PokemonEntity from "../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import styles from "../styles/styles.module.css";
import Loading from "../../loading/implementation/Loading";
import ShowcasePokemonCard from "../../showcase_pokemon_card/implementation/ShowcasePokemonCard";
import isPokemonDataNull from "../infrastructure/specifications/is_pokemon_data_null/isPokemonDataNull";

function MainContent(props: {
  pokemonData: PokemonEntity | null;
}): JSX.Element {
  const { pokemonData } = props;

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        {isPokemonDataNull(pokemonData) ? (
          <Loading />
        ) : (
          <ShowcasePokemonCard
            pokemonId={pokemonData?.pokemonId}
            pokemonImage={pokemonData?.pokemonImage}
            pokemonName={pokemonData?.pokemonName}
            pokemonTypes={pokemonData?.pokemonTypes}
          />
        )}
        <p
          data-testid={MAIN_CONTAINER_DESCRIPTION_ELEMENT_TEST_ID}
          className={styles.description}>
          This is an educational project made with{" "}
          <span className={styles.emphasis}>next js</span>, that uses
          technologies like server side rendering and server side rendering with
          static site generation, styled-components and react paginate. Powered
          by <span className={styles.emphasis}>pokeapi.co</span>
        </p>
        <Link
          href="/"
          className={styles.link}>
          Back To Home {"->"}
        </Link>
      </div>
    </main>
  );
}

export default MainContent;
