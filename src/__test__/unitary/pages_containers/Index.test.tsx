import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { POKEMON_CONTENT_CONTAINER_DESCRIPTION_TEXT } from "../../constants/pages/index/pageElementsInnerTextConstants";
import Index from "../../../pages_containers/Index";

describe("Test Index Domain Behavior", () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText } = render(<Index />);

    expect(getByText(POKEMON_CONTENT_CONTAINER_DESCRIPTION_TEXT)).toBeTruthy();
  });
});
