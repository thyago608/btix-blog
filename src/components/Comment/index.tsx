import Image from "next/image";
import { IComment } from "types/Comment";
import styles from "./styles.module.scss";

interface CommentProps {
  data: IComment;
}

export function Comment({ data }: CommentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Image
          src="https://www.svgrepo.com/show/415145/avatar-boy-male-3.svg"
          alt=""
          width={50}
          height={50}
          className={styles.avatar}
        />
        <div className={styles.userInformation}>
          <strong>{data.name}</strong>
          <span>{data.email}</span>
        </div>
      </div>
      <p className={styles.comment}>{data.body}</p>
    </div>
  );
}
