import styles from "./styles.module.scss";
import { CaretUp } from "phosphor-react";

export function Footer() {
  function handleScrollUp() {
    const htmlTagRoot = document.querySelector("html");
    htmlTagRoot?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className={styles.footer}>
      <p>Btix Blog © Todos os direitos reservados</p>
      <button
        type="button"
        onClick={handleScrollUp}
        className={styles.buttonScrollUp}>
        <CaretUp size={25} />
      </button>
    </footer>
  );
}
