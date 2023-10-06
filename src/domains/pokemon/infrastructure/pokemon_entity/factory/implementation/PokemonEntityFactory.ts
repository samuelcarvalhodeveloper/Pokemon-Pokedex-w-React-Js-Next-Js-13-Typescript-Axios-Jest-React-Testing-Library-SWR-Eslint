import capitalizeFirstLetterOfString from "../../../formatters/pokemon_pokemon_card/get_captalized_pokemon_name/getCapitalizedPokemonName";
import getPokemonTypesArrayCasted from "../infrastructure/type_casters/get_pokemon_types_array_casted/getPokemonTypesArrayCasted";
import { UnpatchedPokemonArrayOfTypes } from "../../../../../../types/pokemon/raw_pokemon_information_from_server/unpatched_pokemon_array_of_types/UnpatchedPokemonArrayOfTypes";
import PokemonEntity from "../../implementation/PokemonEntity";

class PokemonEntityFactory {
  constructor() {}

  public getPokemonEntity(
    pokemonId: number,
    pokemonName: string,
    pokemonImage: string,
    pokemonTypeArrayUnPatchedCameFromServer: UnpatchedPokemonArrayOfTypes,
  ): PokemonEntity {
    return new PokemonEntity(
      pokemonId,
      capitalizeFirstLetterOfString(pokemonName),
      pokemonImage,
      getPokemonTypesArrayCasted(pokemonTypeArrayUnPatchedCameFromServer),
    );
  }
}

export default new PokemonEntityFactory();
