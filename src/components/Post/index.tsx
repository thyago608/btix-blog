import Link from "next/link";
import { IPost } from "types/Post";
import styles from "./styles.module.scss";

interface PostProps {
  data: IPost;
}

export function Post({ data }: PostProps) {
  return (
    <Link href={`/post/${data.id}`} className={styles.post}>
      <strong className={styles.title}>{data.title}</strong>
      <p className={styles.content}>{data.body}</p>
    </Link>
  );
}
