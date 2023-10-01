import PokemonEntity from "../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";

function isPokemonArrayOfDataNull(
  arrayOfPokemonData: Array<PokemonEntity> | null,
): boolean {
  return arrayOfPokemonData === null;
}

export default isPokemonArrayOfDataNull;
