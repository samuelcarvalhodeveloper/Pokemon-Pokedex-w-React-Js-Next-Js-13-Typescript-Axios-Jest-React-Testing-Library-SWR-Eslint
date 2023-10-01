import Link from "next/link";
import { JSX } from "react";
import styles from "../styles/styles.module.css";

function ErrorMessageCTA(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={styles.h1}>Page 404: Not Found.</h1>
        <Link
          href="/"
          className={styles.link}>
          Back To Home {"->"}
        </Link>
      </div>
    </main>
  );
}

export default ErrorMessageCTA;
