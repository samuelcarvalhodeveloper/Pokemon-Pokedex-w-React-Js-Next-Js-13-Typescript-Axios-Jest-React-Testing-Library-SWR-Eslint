import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { CTA_TITLE_TEXT } from "../../constants/pages/not_found/pageElementsInnerTextConstants";
import NotFound from "../../../pages_containers/NotFound";

describe("Test Not Found Domain Behavior", () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText } = render(<NotFound />);

    expect(getByText(CTA_TITLE_TEXT)).toBeTruthy();
  });
});
