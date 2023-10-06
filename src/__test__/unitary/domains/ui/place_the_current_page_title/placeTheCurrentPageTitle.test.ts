import { describe, test, expect } from "@jest/globals";
import { CUSTOM_ARBITRARY_PAGE_TITLE_TEXT_MOCK } from "../../../../mocks/next/data_mock/customArbitraryPageTitleTextMock";
import placeTheCurrentPageTitle from "../../../../../domains/ui/place_the_current_page_title/placeTheCurrentPageTitle";

describe('Test Module "placeTheCurrentPageTitle" Behavior', () => {
  test('Test If Function: "placeTheCurrentPageTitle()"; Places The Title To Document Passed Through Parameter Correctly', async () => {
    const documentMockToHaveTheTitleChanged: Document = document;

    placeTheCurrentPageTitle(
      documentMockToHaveTheTitleChanged,
      CUSTOM_ARBITRARY_PAGE_TITLE_TEXT_MOCK,
    );

    expect(documentMockToHaveTheTitleChanged.title).toEqual(
      CUSTOM_ARBITRARY_PAGE_TITLE_TEXT_MOCK,
    );
  });
});
