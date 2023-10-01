import axios, { AxiosResponse } from "axios";
import GENERAL_POKEMON_ARRAY_URL from "../../../../constants/pokemon/pokemon_data/server_request/urls/general_pokemon_array_url/generalPokemonArrayUrlConstants";
import GeneralsPokemonsData from "../../../../types/pokemon/raw_pokemon_information_from_server/general_pokemons_data/GeneralPokemonsData";

export const generalArrayOfPokemons: Promise<
  AxiosResponse<GeneralsPokemonsData>
> = axios.get(GENERAL_POKEMON_ARRAY_URL);
