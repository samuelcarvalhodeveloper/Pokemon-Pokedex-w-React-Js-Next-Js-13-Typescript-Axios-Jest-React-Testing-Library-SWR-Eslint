import { JSX } from "react";
import Banner from "../../banner/implementation/Banner";
import PokemonContentContainer from "../../pokemon_content_container/pokemon_content_container_component/implementation/PokemonContentContainer";
import styles from "../styles/styles.module.css";

function MainContent(): JSX.Element {
  return (
    <>
      <Banner />
      <PokemonContentContainer />
      <div className={styles.bottom_gap} />
    </>
  );
}

export default MainContent;
