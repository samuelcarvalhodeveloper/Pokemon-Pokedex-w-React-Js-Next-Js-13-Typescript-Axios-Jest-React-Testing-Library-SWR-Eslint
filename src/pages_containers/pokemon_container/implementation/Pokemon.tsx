"use client";

import { JSX } from "react";
import PageTitleClientComponent from "../../../components/pokemon/page_title_client_component/implementation/PageTitleClientComponent";
import MainContent from "../../../components/pokemon/main_content/main_content_component/implementation/MainContent";
import castPokemonIdToNumber from "../infrastructure/type_casters/cast_pokemon_id_to_number/castPokemonIdToNumber";
import useUniquePokemonData from "../infrastructure/custom_hooks/use_unique_pokemon_data/implementation/useUniquePokemonData";

function Pokemon(props: { pokemonId: string }): JSX.Element {
  const { pokemonId } = props;
  const pokemonIdCastedToNumber: number = castPokemonIdToNumber(pokemonId);
  const pokemonData = useUniquePokemonData(pokemonIdCastedToNumber);

  return (
    <>
      <PageTitleClientComponent pokemonName={pokemonData?.pokemonName} />
      <MainContent pokemonData={pokemonData} />
    </>
  );
}

export default Pokemon;
