import { NUMBER_OF_POKEMON_PER_PAGINATION_PAGE } from "@/constants/pages/index/pagination_component/numberOfPokemonPerPaginationPageConstants";

function multiplySelectedPaginationIndexByNumberOfPokemonsPerPage(
  selectedPaginationIndex: number,
): number {
  return selectedPaginationIndex * NUMBER_OF_POKEMON_PER_PAGINATION_PAGE;
}

export default multiplySelectedPaginationIndexByNumberOfPokemonsPerPage;
