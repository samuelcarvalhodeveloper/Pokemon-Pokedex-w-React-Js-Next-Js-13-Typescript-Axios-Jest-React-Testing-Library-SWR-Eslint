import axios, { AxiosResponse } from "axios";
import UNIQUE_POKEMON_URL_BY_ID from "../../../../constants/pokemon/pokemon_data/server_request/urls/unique_pokemon_url/by_id/uniquePokemonsUrlByIdConstants";
import RawCompletePokemonDataFromServer from "../../../../types/pokemon/raw_pokemon_information_from_server/raw_complete_pokemon_data_from_server/RawCompletePokemonDataFromServer";
import { BULBASAUR_ID } from "../../../constants/pokemons/pokemonsIdNumberConstants";

export const uniqueCompletePokemonDataFromServer: Promise<
  AxiosResponse<RawCompletePokemonDataFromServer>
> = axios.get(UNIQUE_POKEMON_URL_BY_ID(BULBASAUR_ID));
