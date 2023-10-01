import { useEffect, useState } from "react";
import PokemonEntity from "../../../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import getPokemonDataFromServer from "../data_fetching/get_pokemon_data_from_server/getPokemonDataFromServer";

function useAllPokemonsData(): Array<PokemonEntity> | null {
  const [arrayOfPokemonData, setArrayOfPokemonData] =
    useState<Array<PokemonEntity> | null>(null);

  useEffect(() => {
    getPokemonDataFromServer().then((requestResult: Array<PokemonEntity>) =>
      setArrayOfPokemonData(requestResult),
    );
  }, [arrayOfPokemonData]);

  return arrayOfPokemonData || null;
}

export default useAllPokemonsData;
