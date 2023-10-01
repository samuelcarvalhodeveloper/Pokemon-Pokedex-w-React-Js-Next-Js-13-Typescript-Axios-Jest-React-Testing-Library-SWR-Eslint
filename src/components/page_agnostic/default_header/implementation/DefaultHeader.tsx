import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";
import styles from "../styles/styles.module.css";
import icon from "../../../../assets/images/agnostic_agnostic_images/icon.svg";

function DefaultHeader(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.center}>
          <Link
            title="Home Button"
            className={styles.link}
            href="/">
            <Image
              priority
              src={icon}
              alt="Home Button"
            />
          </Link>
        </div>
      </header>
      <div className={styles.space} />
    </>
  );
}

export default DefaultHeader;
