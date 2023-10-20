import EMPTY_ARRAY_LENGTH from "../../../../../../../constants/array_utilities/empty_array/emptyArray";
import PokemonEntity from "../../../../../infrastructure/pokemon_entity/implementation/PokemonEntity";

function isPokemonsCacheArrayEmpty(
  pokemonsCacheArray: Array<PokemonEntity>,
): boolean {
  return pokemonsCacheArray.length === EMPTY_ARRAY_LENGTH;
}

export default isPokemonsCacheArrayEmpty;
