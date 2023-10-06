import POKEMON_ID_WITH_ONE_NUMBERS_LENGTH from "../../../../../../../../../constants/pokemon/pokemon_data/pokemon_id_length/pokemonIdWithOneNumberLengthConstants";

function isPokemonIdLengthEqualsToOne(id: string | undefined): boolean {
  return id?.length === POKEMON_ID_WITH_ONE_NUMBERS_LENGTH;
}

export default isPokemonIdLengthEqualsToOne;
