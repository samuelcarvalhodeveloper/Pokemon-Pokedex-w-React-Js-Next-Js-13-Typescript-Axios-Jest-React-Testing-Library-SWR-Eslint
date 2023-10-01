import { NUMBER_OF_POKEMON_PER_PAGINATION_PAGE } from "./numberOfPokemonPerPaginationPageConstants";

export function STATING_PAGINATION_SELECTED_INDEX(
  currentPaginationSelectedIndex: number,
): number {
  return currentPaginationSelectedIndex * NUMBER_OF_POKEMON_PER_PAGINATION_PAGE;
}
