import Image from "next/image";
import { JSX } from "react";
import SmoothScrollIcon from "../../../../assets/images/index/smooth_scroll_icon.svg";
import styles from "../styles/styles.module.css";

function SmoothScroll(): JSX.Element {
  return (
    <a
      href="#"
      className={styles.smooth_scroll}>
      <Image
        width={30.2}
        height={24.431}
        src={SmoothScrollIcon.src}
        alt="Smooth Scroll Icon"
      />
    </a>
  );
}

export default SmoothScroll;
