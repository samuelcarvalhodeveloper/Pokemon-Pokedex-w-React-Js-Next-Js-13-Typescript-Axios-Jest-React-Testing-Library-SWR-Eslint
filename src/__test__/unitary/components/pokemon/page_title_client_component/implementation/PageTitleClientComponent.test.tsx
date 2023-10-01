import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import POKEMON_PAGE_TITLE from "../../../../../../constants/pages/pokemon/window/page_title/pokemonPageTitleConstants";
import { BULBASAUR_NAME } from "../../../../../constants/pokemons/pokemonNamesConstants";
import PageTitleClientComponent from "../../../../../../components/pokemon/page_title_client_component/implementation/PageTitleClientComponent";

describe("Test Component PageTitleClientComponent Behavior", () => {
  test("Test If Component Places The Current Page Title Correctly", () => {
    render(<PageTitleClientComponent pokemonName={BULBASAUR_NAME} />);

    expect(window.document.title).toEqual(POKEMON_PAGE_TITLE(BULBASAUR_NAME));
  });
});
