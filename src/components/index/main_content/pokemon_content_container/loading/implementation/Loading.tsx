import { JSX } from "react";
import { LOADING_COMPONENT_CONTAINER_ELEMENT_TEST_ID } from "../../../../../../__test__/constants/pages/index/pageElementsTestIdConstants";
import styles from "../styles/styles.module.css";

function Loading(): JSX.Element {
  return (
    <div
      data-testid={LOADING_COMPONENT_CONTAINER_ELEMENT_TEST_ID}
      className={styles.loading_container}>
      <div className={styles.loading} />
    </div>
  );
}

export default Loading;
