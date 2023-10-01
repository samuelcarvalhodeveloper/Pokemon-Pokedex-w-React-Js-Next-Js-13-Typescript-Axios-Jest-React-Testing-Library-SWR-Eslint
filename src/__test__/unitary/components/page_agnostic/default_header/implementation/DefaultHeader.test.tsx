import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { HOME_BUTTON_ALT_TEXT } from "../../../../../constants/pages/agnostic/header/pageElementsAltTextConstants";
import DefaultHeader from "../../../../../../components/page_agnostic/default_header/implementation/DefaultHeader";

describe('Test "DefaultHeader" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByAltText } = render(<DefaultHeader />);

    expect(getByAltText(HOME_BUTTON_ALT_TEXT)).toBeTruthy();
  });
});
