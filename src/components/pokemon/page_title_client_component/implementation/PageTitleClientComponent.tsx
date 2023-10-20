"use client";

import { useEffect, JSX } from "react";
import placeTheCurrentPageTitle from "../../../infrastructure/ui/place_the_current_page_title/placeTheCurrentPageTitle";
import INDEX_PAGES_TITLE from "../../../../constants/pages/index/window/page_title/indexPageTitleConstants";
import POKEMON_PAGE_TITLE from "../../../../constants/pages/pokemon/window/page_title/pokemonPageTitleConstants";
import isPokemonNameEqualsToUndefined from "../infrastructure/specifications/is_pokemon_name_equals_to_undefined/isPokemonNameEqualsToUndefined";

function PageTitleClientComponent(props: {
  pokemonName: string | undefined;
}): JSX.Element {
  const { pokemonName } = props;

  useEffect(() => {
    placeTheCurrentPageTitle(
      document,
      isPokemonNameEqualsToUndefined(pokemonName)
        ? INDEX_PAGES_TITLE
        : POKEMON_PAGE_TITLE(pokemonName),
    );

    return () => {
      placeTheCurrentPageTitle(document, INDEX_PAGES_TITLE);
    };
  });

  return <></>;
}

export default PageTitleClientComponent;
