import { useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Post } from "components/Post";
import { IPost } from "types/Post";
import styles from "./styles.module.scss";

interface PostsProps {
  postsList: IPost[];
}

const POSTS_PER_PAGE = 10;

let postsInterval = {
  start: 0,
  end: POSTS_PER_PAGE,
};

export default function Posts({ postsList }: PostsProps) {
  const [posts, setPosts] = useState<IPost[]>(() =>
    postsList.slice(postsInterval.start, postsInterval.end)
  );

  function handleDisplayingMorePosts() {
    if (postsInterval.end < postsList.length) {
      postsInterval = {
        start: postsInterval.start + POSTS_PER_PAGE,
        end: postsInterval.end + POSTS_PER_PAGE,
      };

      const postsSlice = postsList.slice(
        postsInterval.start,
        postsInterval.end
      );

      setPosts((oldState) => [...oldState, ...postsSlice]);
    }
  }

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
          {posts?.map((post) => (
            <div key={post.id} className={styles.postItem}>
              <Post data={post} />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleDisplayingMorePosts}
          disabled={posts.length === postsList.length}
          className={styles.morePosts}>
          Mais posts
        </button>
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps =
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const postsList = await response.json();

    return {
      props: {
        postsList,
      },
    };
  };
