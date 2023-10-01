import POKEMON_ID_WITH_TWO_NUMBERS_LENGTH from "../../../../../../../constants/pokemon/pokemon_data/pokemon_id_length/pokemonIdWithTwoNumberLengthConstants";

function isPokemonIdLengthEqualsToTwo(id: string | undefined): boolean {
  return id?.length === POKEMON_ID_WITH_TWO_NUMBERS_LENGTH;
}

export default isPokemonIdLengthEqualsToTwo;
