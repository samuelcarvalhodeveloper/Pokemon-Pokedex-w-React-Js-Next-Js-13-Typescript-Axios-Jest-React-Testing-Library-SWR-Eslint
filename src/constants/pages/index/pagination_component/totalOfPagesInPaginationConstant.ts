import { NUMBER_OF_POKEMON_PER_PAGINATION_PAGE } from "./numberOfPokemonPerPaginationPageConstants";

export function TOTAL_OF_PAGES_IN_PAGINATION(data: number): number {
  return Math.ceil(data / NUMBER_OF_POKEMON_PER_PAGINATION_PAGE);
}

export const TOTAL_OF_PAGES_IN_PAGINATION_PLACEHOLDER: number = 0;
