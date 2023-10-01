import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { LOADING_COMPONENT_CONTAINER_ELEMENT_TEST_ID } from "../../../../../../../constants/pages/index/pageElementsTestIdConstants";
import Loading from "../../../../../../../../components/index/main_content/pokemon_content_container/loading/implementation/Loading";

describe('Test "Loading" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByTestId } = render(<Loading />);

    expect(
      getByTestId(LOADING_COMPONENT_CONTAINER_ELEMENT_TEST_ID),
    ).toBeTruthy();
  });
});
