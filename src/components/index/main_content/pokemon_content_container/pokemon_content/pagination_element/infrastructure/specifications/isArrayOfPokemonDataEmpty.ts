import EMPTY_ARRAY_LENGTH from "../../../../../../../../constants/array_utilities/empty_array/emptyArray";
import PokemonEntity from "../../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";

function isArrayOfPokemonDataEmpty(
  arrayOfPokemonData: Array<PokemonEntity> | null | undefined,
): boolean {
  return arrayOfPokemonData?.length === EMPTY_ARRAY_LENGTH;
}

export default isArrayOfPokemonDataEmpty;
