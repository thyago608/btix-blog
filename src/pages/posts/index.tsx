import { Post } from "components/Post";
import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <main className={styles.container}>
      <Head>
        <title>btix.blog | posts</title>
      </Head>
      <section className={styles.postList}>
        <header>
          <h2 className={styles.heading}>Todos os posts</h2>
        </header>
        <div className={styles.list}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </section>
    </main>
  );
}
