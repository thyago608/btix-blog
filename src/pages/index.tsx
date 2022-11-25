import Link from "next/link";
import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>btix.blog | Home</title>
      </Head>
      <section className={styles.informativeSection}>
        <header>
          <h2 className={styles.heading}>
            Confira as últimas novidades da{" "}
            <span>btix</span>
          </h2>
        </header>
        <p className={styles.updateFrequency}>
          Nosso blog é atualizado toda semana
        </p>
        <Link href="/posts" className={styles.seePosts}>
          Ver posts
        </Link>
      </section>
    </main>
  );
}
