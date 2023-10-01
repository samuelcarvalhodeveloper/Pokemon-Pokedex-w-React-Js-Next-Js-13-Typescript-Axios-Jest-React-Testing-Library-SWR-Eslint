import INDEX_PAGES_TITLE from "../../../index/window/page_title/indexPageTitleConstants";

export function POKEMON_PAGE_TITLE(
  pokemonName: string | null | undefined,
): string {
  return `${INDEX_PAGES_TITLE} - ${pokemonName}`;
}

export default POKEMON_PAGE_TITLE;
