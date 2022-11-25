import { Post } from "components/Post";
import Head from "next/head";

export default function Posts() {
  return (
    <main>
      <Head>
        <title>btix.blog | posts</title>
      </Head>
      <Post />
    </main>
  );
}
