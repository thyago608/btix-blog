import * as HoverCard from "@radix-ui/react-hover-card";
import styles from "./styles.module.scss";
import Link from "next/link";
import { IUser } from "types/User";

interface AuthorProps {
  data: IUser;
}
export function Author({ data }: AuthorProps) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Link className={styles.author} href="/">
          Author:
          <span>{data?.name}</span>
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className={styles.cardContent}
          sideOffset={5}>
          <div>
            <div className={styles.information}>
              <span className={styles.title}>name:</span>
              <span className={styles.value}>
                {data?.name}
              </span>
            </div>

            <div className={styles.information}>
              <span className={styles.title}>email:</span>
              <span className={styles.value}>
                {data?.email}
              </span>
            </div>

            <div className={styles.information}>
              <span className={styles.title}>phone:</span>
              <span className={styles.value}>
                {data?.phone}
              </span>
            </div>

            <div className={styles.information}>
              <span className={styles.title}>city:</span>
              <span className={styles.value}>
                {data?.address?.city}
              </span>
            </div>

            <div className={styles.social}>
              <div className={styles.category}>
                <span>0</span>
                <span>Following</span>
              </div>
              <div className={styles.category}>
                <span>2,900</span>
                <span>Followers</span>
              </div>
            </div>
          </div>

          <HoverCard.Arrow
            className={styles.HoverCardArrow}
          />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
