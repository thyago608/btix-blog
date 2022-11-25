import Link from "next/link";
import styles from "./styles.module.scss";

export function Post() {
  return (
    <Link href="/post/sunt" className={styles.post}>
      <strong className={styles.title}>
        sunt aut facere repellat provident occaecati
        excepturi optio reprehenderit
      </strong>
      <p className={styles.content}>
        quia et suscipit\nsuscipit recusandae consequuntur
        expedita et cum\nreprehenderit molestiae ut ut quas
        totam\nnostrum rerum est autem sunt rem eveniet
        architecto
      </p>
    </Link>
  );
}
