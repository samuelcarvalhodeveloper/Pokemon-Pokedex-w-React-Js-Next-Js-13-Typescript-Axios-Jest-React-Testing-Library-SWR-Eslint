import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import {
  POKEMON_CONTENT_CONTAINER_DESCRIPTION_TEXT,
  POKEMON_CONTENT_CONTAINER_SEARCH_BAR_LABEL_TEXT,
} from "../../../../../../../constants/pages/index/pageElementsInnerTextConstants";
import PokemonContentContainer from "../../../../../../../../components/index/main_content/pokemon_content_container/pokemon_content_container_component/implementation/PokemonContentContainer";

describe('Test "PokemonContentContainer" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText } = render(<PokemonContentContainer />);

    expect(getByText(POKEMON_CONTENT_CONTAINER_DESCRIPTION_TEXT)).toBeTruthy();
    expect(
      getByText(POKEMON_CONTENT_CONTAINER_SEARCH_BAR_LABEL_TEXT),
    ).toBeTruthy();
  });
});
