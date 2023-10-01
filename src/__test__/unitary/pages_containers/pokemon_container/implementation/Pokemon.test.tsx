import { describe, test, expect, beforeAll } from "@jest/globals";
import { render } from "@testing-library/react";
import { MAIN_CONTAINER_DESCRIPTION_ELEMENT_TEST_ID } from "../../../../constants/pages/pokemon/pageElementsTestIdsConstants";
import { BULBASAUR_ID } from "../../../../constants/pokemons/pokemonsIdNumberConstants";
import { mockConsoleErrorToNotDisplayAnyErrorInConsoleOnTestExecution } from "../../../../mocks/jest/function_mock/mockConsoleErrorToNotDisplayAnyErrorInConsoleOnTestExecution";
import Pokemon from "../../../../../pages_containers/pokemon_container/implementation/Pokemon";

describe("Test Pokemon Domain Behavior", () => {
  beforeAll(() => {
    mockConsoleErrorToNotDisplayAnyErrorInConsoleOnTestExecution(console);
  });

  test("Test If Elements Were Placed Correctly", async () => {
    const { getByTestId } = render(
      <Pokemon pokemonId={BULBASAUR_ID.toString()} />,
    );

    expect(
      getByTestId(MAIN_CONTAINER_DESCRIPTION_ELEMENT_TEST_ID),
    ).toBeTruthy();
  });
});
