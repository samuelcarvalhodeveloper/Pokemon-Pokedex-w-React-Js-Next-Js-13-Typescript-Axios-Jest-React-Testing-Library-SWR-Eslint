import { useEffect, useState } from "react";
import PokemonEntity from "../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import getPokemonDataFromServer from "../data_fetching/get_pokemon_data_from_server/getPokemonDataFromServer";

function useUniquePokemonData(pokemonId: number): PokemonEntity | null {
  const [pokemonData, setPokemonData] = useState<PokemonEntity | null>(null);

  useEffect(() => {
    getPokemonDataFromServer(pokemonId).then((requestResult: PokemonEntity) =>
      setPokemonData(requestResult),
    );
  });

  return pokemonData || null;
}

export default useUniquePokemonData;
