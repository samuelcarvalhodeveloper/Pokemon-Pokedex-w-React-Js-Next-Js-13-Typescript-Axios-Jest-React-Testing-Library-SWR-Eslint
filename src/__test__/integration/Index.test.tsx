import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Index from "../../pages_containers/Index";
import { POKEMON_CONTENT_CONTAINER_DESCRIPTION_TEXT } from "../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Index Domain Behavior", () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText } = render(<Index />);

    expect(getByText(POKEMON_CONTENT_CONTAINER_DESCRIPTION_TEXT)).toBeTruthy();
  });
});
