import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import NOT_FOUND_PAGE_TITLE from "../../../../../../constants/pages/not_found/window/page_title/notFoundPageTitleConstants";
import PageTitleClientComponent from "../../../../../../components/not_found/page_title_client_component/implementation/PageTitleClientComponent";

describe("Test Component PageTitleClientComponent Behavior", () => {
  test("Test If Component Places The Current Page Title Correctly", () => {
    render(<PageTitleClientComponent />);

    expect(window.document.title).toEqual(NOT_FOUND_PAGE_TITLE);
  });
});
