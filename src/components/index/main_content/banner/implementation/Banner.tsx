import { JSX } from "react";
import Image from "next/image";
import { ARBITRARY_DIMENSIONS_TO_AVOID_NEXT_IMAGE_HEIGHT_AND_WIDTH_ERROR } from "../../../../../constants/next/images/sizes/page_agnostic/arbitraryDimensionsToAvoidNextImageHeightAndWidthErrorConstants";
import PokemonLogo from "../../../../../assets/images/index/pokemon_logo.svg";
import styles from "../styles/styles.module.css";

function Banner(): JSX.Element {
  return (
    <div className={styles.banner}>
      <Image
        className={styles.logo}
        width={ARBITRARY_DIMENSIONS_TO_AVOID_NEXT_IMAGE_HEIGHT_AND_WIDTH_ERROR}
        height={ARBITRARY_DIMENSIONS_TO_AVOID_NEXT_IMAGE_HEIGHT_AND_WIDTH_ERROR}
        alt="Pokemon's Logo"
        src={PokemonLogo}
      />
    </div>
  );
}

export default Banner;
