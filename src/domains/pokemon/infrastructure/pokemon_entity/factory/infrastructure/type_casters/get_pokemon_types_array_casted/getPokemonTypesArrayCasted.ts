import capitalizeFirstLetterOfString from "../../../../../../../../utils/formatters/strings/capitalize_first_letter_of_string/capitalizeFirstLetterOfString";

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
