import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { SMOOTH_SCROLL_ICON_ALT_TEXT } from "../../../../../constants/pages/index/pageElementsAltTextConstants";
import SmoothScroll from "../../../../../../components/index/smooth_scroll/implementation/SmoothScroll";

describe('Test "SmoothScroll" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByAltText } = render(<SmoothScroll />);

    expect(getByAltText(SMOOTH_SCROLL_ICON_ALT_TEXT)).toBeTruthy();
  });
});
