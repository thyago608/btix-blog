import { Hero } from "components/Hero";
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
        <header className={styles.heading}>
          <h2>
            Fique por dentro sobre as últimas novidades da
            Btix
          </h2>
        </header>
        <p className={styles.text}>
          Nosso blog é atualizado toda semana
        </p>
        <Link href="/posts" className={styles.clickHere}>
          Ver posts
        </Link>
      </section>
      <div className={styles.hero}>
        <Hero />
      </div>
    </main>
  );
}
