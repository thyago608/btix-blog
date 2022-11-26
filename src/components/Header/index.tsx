import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.root}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo}>
          btix
          <span className={styles.emphasis}>blog</span>
        </Link>
        <nav className={styles.navigation}>
          <Link
            href="/"
            className={asPath === "/" ? styles.active : ""}>
            home
          </Link>
          <Link
            href="/posts"
            className={asPath !== "/" ? styles.active : ""}>
            posts
          </Link>
        </nav>
      </div>
    </header>
  );
}
