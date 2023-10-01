import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { BANNER_POKEMON_LOGO_ALT_TEXT } from "../../../../../../constants/pages/index/pageElementsAltTextConstants";
import Banner from "../../../../../../../components/index/main_content/banner/implementation/Banner";

describe('Test "Banner" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByAltText } = render(<Banner />);

    expect(getByAltText(BANNER_POKEMON_LOGO_ALT_TEXT)).toBeTruthy();
  });
});
