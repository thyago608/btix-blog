import Head from "next/head";
import { Post } from "components/Post";
import { Comment } from "components/Comment";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <main className={styles.container}>
      <Head>
        <title>btix.blog | post</title>
      </Head>
      <div className={styles.postSelected}>
        {/* <Post /> */}
      </div>
      <section className={styles.comments}>
        <header>
          <h2 className={styles.heading}>Comentários</h2>
        </header>
        <div className={styles.list}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </section>
    </main>
  );
}
