/* eslint-disable camelcase */
import { JSX } from "react";
import Pokemon from "../../pages_containers/pokemon_container/implementation/Pokemon";

function PokemonPage({
  params,
}: {
  params: { pokemon_id: string };
}): JSX.Element {
  const { pokemon_id } = params;
  return <Pokemon pokemonId={pokemon_id} />;
}

export default PokemonPage;
