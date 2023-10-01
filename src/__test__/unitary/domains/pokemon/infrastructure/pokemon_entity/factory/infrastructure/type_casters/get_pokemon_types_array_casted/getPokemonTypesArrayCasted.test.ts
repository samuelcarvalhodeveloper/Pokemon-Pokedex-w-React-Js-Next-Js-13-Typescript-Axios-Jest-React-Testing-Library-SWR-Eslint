import { describe, test, expect } from "@jest/globals";
import axios from "axios";
import UNIQUE_POKEMON_URL_BY_ID from "../../../../../../../../../../constants/pokemon/pokemon_data/server_request/urls/unique_pokemon_url/by_id/uniquePokemonsUrlByIdConstants";
import RawCompletePokemonDataFromServer from "../../../../../../../../../../types/pokemon/raw_pokemon_information_from_server/raw_complete_pokemon_data_from_server/RawCompletePokemonDataFromServer";
import generatePokemonTypeArray from "../../../../../../../../../../domains/pokemon/infrastructure/pokemon_entity/factory/infrastructure/type_casters/get_pokemon_types_array_casted/getPokemonTypesArrayCasted";
import { BULBASAUR_ID } from "../../../../../../../../../constants/pokemons/pokemonsIdNumberConstants";
import { NUMBER_OF_TYPES_THAT_BELONG_TO_BULBASAUR } from "../../../../../../../../../constants/pokemons/pokemonsTypesNumberConstants";

describe('Test Module "getPokemonTypesArrayCasted" Behavior', () => {
  test('Test If Function: "getPokemonTypesArrayCasted()"; Casts Raw Array Of Pokemons Types From Server To The Type Acceptable In Pokemon Entity Correctly', async () => {
    const { types } = (
      await axios.get<RawCompletePokemonDataFromServer>(
        UNIQUE_POKEMON_URL_BY_ID(BULBASAUR_ID),
      )
    ).data;

    expect(generatePokemonTypeArray(types).length).toEqual(
      NUMBER_OF_TYPES_THAT_BELONG_TO_BULBASAUR,
    );
  });
});
