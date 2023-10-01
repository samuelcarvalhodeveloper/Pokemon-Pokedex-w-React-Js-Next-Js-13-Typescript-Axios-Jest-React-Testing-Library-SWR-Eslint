import { describe, expect, test } from "@jest/globals";
import axios from "axios";
import capitalizeFirstLetterOfString from "../../../../../../../utils/formatters/strings/capitalize_first_letter_of_string/capitalizeFirstLetterOfString";
import FIRST_INDEX_OF_THE_ARRAY from "../../../../../../../constants/array_utilities/first_index_of_the_array/firstIndexOfTheArrayConstants";
import UNIQUE_POKEMON_URL_BY_ID from "../../../../../../../constants/pokemon/pokemon_data/server_request/urls/unique_pokemon_url/by_id/uniquePokemonsUrlByIdConstants";
import getPokemonTypesArrayCasted from "../../../../../../../domains/pokemon/infrastructure/pokemon_entity/factory/infrastructure/type_casters/get_pokemon_types_array_casted/getPokemonTypesArrayCasted";
import PokemonEntity from "../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import RawCompletePokemonDataFromServer from "../../../../../../../types/pokemon/raw_pokemon_information_from_server/raw_complete_pokemon_data_from_server/RawCompletePokemonDataFromServer";
import { BULBASAUR_ID } from "../../../../../../constants/pokemons/pokemonsIdNumberConstants";
import { BULBASAUR_NAME } from "../../../../../../constants/pokemons/pokemonNamesConstants";

describe("Test Class PokemonEntity Behavior", () => {
  test("Test If Entity Describes How Pokemon Data Should Be Displayed In Ui Correctly", async () => {
    const rawPokemonDataFromServer: RawCompletePokemonDataFromServer = (
      await axios.get<RawCompletePokemonDataFromServer>(
        UNIQUE_POKEMON_URL_BY_ID(BULBASAUR_ID),
      )
    ).data;
    const pokemonEntityInstance: PokemonEntity = new PokemonEntity(
      rawPokemonDataFromServer.id,
      capitalizeFirstLetterOfString(
        rawPokemonDataFromServer.forms[FIRST_INDEX_OF_THE_ARRAY].name,
      ),
      rawPokemonDataFromServer.sprites.versions["generation-v"][
        "black-white"
      ].animated.front_default,
      getPokemonTypesArrayCasted(rawPokemonDataFromServer.types),
    );

    expect(pokemonEntityInstance).toBeTruthy();
    expect(pokemonEntityInstance.pokemonId).toEqual(BULBASAUR_ID);
    expect(pokemonEntityInstance.pokemonName).toEqual(BULBASAUR_NAME);
  });
});
