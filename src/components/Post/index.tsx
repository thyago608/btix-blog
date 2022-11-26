import { Author } from "components/Author";
import Link from "next/link";
import { Hash } from "phosphor-react";
import { IPost } from "types/Post";
import styles from "./styles.module.scss";

interface PostProps {
  data: IPost;
}

export function Post({ data }: PostProps) {
  return (
    <div>
      <Link
        href={`/post/${data.id}`}
        className={styles.post}>
        <strong className={styles.title}>
          <Hash size={20} weight="bold" />
          {data.title}
        </strong>
        <p className={styles.content}>{data.body}</p>
      </Link>
      <Author data={data.author} />
    </div>
  );
}
