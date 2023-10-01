import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { CTA_TITLE_TEXT } from "../../../../../constants/pages/not_found/pageElementsInnerTextConstants";
import ErrorMessageCTA from "../../../../../../components/not_found/error_message_cta/implementation/ErrorMessageCTA";

describe('Test "ErrorMessageCTA" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText } = render(<ErrorMessageCTA />);

    expect(getByText(CTA_TITLE_TEXT)).toBeTruthy();
  });
});
