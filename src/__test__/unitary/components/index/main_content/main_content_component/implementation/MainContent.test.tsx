import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { BANNER_POKEMON_LOGO_ALT_TEXT } from "../../../../../../constants/pages/index/pageElementsAltTextConstants";
import MainContent from "../../../../../../../components/index/main_content/main_content_component/implementation/MainContent";

describe('Test "MainContent" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByAltText } = render(<MainContent />);

    expect(getByAltText(BANNER_POKEMON_LOGO_ALT_TEXT)).toBeTruthy();
  });
});
