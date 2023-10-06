import capitalizeFirstLetterOfString from "../../../../../formatters/pokemon_pokemon_card/get_captalized_pokemon_name/getCapitalizedPokemonName";

function getPokemonTypesArrayCasted(
  pokemonTypesArrayUnpatchedCameFromServer: Array<{ type: { name: string } }>,
): Array<string> {
  const arrayOfPokemonTypes: Array<string> = [];

  pokemonTypesArrayUnpatchedCameFromServer.forEach((typeItem) => {
    arrayOfPokemonTypes.push(capitalizeFirstLetterOfString(typeItem.type.name));
  });

  return arrayOfPokemonTypes;
}

export default getPokemonTypesArrayCasted;
