import Head from "next/head";
import { GetServerSideProps } from "next";
import { Post as PostComponent } from "components/Post";
import { Comment } from "components/Comment";
import { IPost } from "types/Post";
import { IComment } from "types/Comment";
import { ArrowLeft } from "phosphor-react";
import styles from "./styles.module.scss";
import Link from "next/link";

interface PostProps {
  post: IPost;
  comments: IComment[];
}

export default function Post({
  post,
  comments,
}: PostProps) {
  return (
    <main className={styles.container}>
      <Head>
        <title>btix.blog | post</title>
      </Head>
      <Link href="/posts" className={styles.prevPage}>
        <ArrowLeft size={20} />
        Voltar
      </Link>
      <div className={styles.postSelected}>
        <PostComponent data={post} />
      </div>
      <section className={styles.comments}>
        <header>
          <h2 className={styles.heading}>Comentários</h2>
        </header>
        <div className={styles.list}>
          {comments.map((comment) => (
            <Comment key={comment.id} data={comment} />
          ))}
        </div>
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps =
  async (request) => {
    const { params } = request;

    const postFetch = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params?.id}`
    );

    const commentsFetch = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params?.id}/comments`
    );

    const post = await postFetch.json();
    const comments = await commentsFetch.json();

    console.log(comments);

    return {
      props: {
        post,
        comments,
      },
    };
  };
