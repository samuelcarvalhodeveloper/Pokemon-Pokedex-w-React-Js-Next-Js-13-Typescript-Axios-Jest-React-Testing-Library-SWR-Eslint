import { describe, expect, test } from "@jest/globals";
import axios from "axios";
import { BULBASAUR_ID } from "../../../../../../../constants/pokemons/pokemonsIdNumberConstants";
import FIRST_INDEX_OF_THE_ARRAY from "../../../../../../../../constants/array_utilities/first_index_of_the_array/firstIndexOfTheArrayConstants";
import UNIQUE_POKEMON_URL_BY_ID from "../../../../../../../../constants/pokemon/pokemon_data/server_request/urls/unique_pokemon_url/by_id/uniquePokemonsUrlByIdConstants";
import PokemonEntityFactory from "../../../../../../../../domains/pokemon/infrastructure/pokemon_entity/factory/implementation/PokemonEntityFactory";
import RawCompletePokemonDataFromServer from "../../../../../../../../types/pokemon/raw_pokemon_information_from_server/raw_complete_pokemon_data_from_server/RawCompletePokemonDataFromServer";

describe("Test Class PokemonEntityFactory Behavior", () => {
  test('Test If Method: "getPokemonEntity()"; Return An Pokemon Entity Instance Correctly', async () => {
    const rawPokemonDataFromServer: RawCompletePokemonDataFromServer = (
      await axios.get<RawCompletePokemonDataFromServer>(
        UNIQUE_POKEMON_URL_BY_ID(BULBASAUR_ID),
      )
    ).data;

    expect(
      PokemonEntityFactory.getPokemonEntity(
        rawPokemonDataFromServer.id,
        rawPokemonDataFromServer.forms[FIRST_INDEX_OF_THE_ARRAY].name,
        rawPokemonDataFromServer.sprites.versions["generation-v"]["black-white"]
          .animated.front_default,
        rawPokemonDataFromServer.types,
      ),
    ).toBeTruthy();
  });
});
