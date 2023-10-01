import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { LOADING_COMPONENT_CONTAINER_ELEMENT_TEST_ID } from "../../../../../../constants/pages/pokemon/pageElementsTestIdsConstants";
import Loading from "../../../../../../../components/pokemon/main_content/loading/implementation/Loading";

describe('Test "Loading" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByTestId } = render(<Loading />);

    expect(
      getByTestId(LOADING_COMPONENT_CONTAINER_ELEMENT_TEST_ID),
    ).toBeTruthy();
  });
});
