import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo}>
          btix
          <span className={styles.emphasis}>blog</span>
        </Link>
        <nav className={styles.navigation}>
          <Link href="/" className={styles.active}>
            Home
          </Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </div>
    </header>
  );
}
