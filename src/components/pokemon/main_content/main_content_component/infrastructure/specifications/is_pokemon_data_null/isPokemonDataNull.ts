import PokemonEntity from "../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";

function isPokemonDataNull(pokemonData: PokemonEntity | null): boolean {
  return pokemonData === null;
}

export default isPokemonDataNull;
