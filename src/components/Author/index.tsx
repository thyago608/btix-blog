import React, { useEffect, useState } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import styles from "./styles.module.scss";
import Link from "next/link";

interface AuthorProps {
  userId: number;
}

interface IUser {
  name: string;
  phone: string;
  email: string;
  address: {
    city: string;
  };
}

export function Author({ userId }: AuthorProps) {
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const user = await response.json();

      setUser(user);
    };

    fetchUserData();
  }, [userId]);

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Link className={styles.author} href="/">
          Author:
          <span>{user.name}</span>
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
                {user.name}
              </span>
            </div>

            <div className={styles.information}>
              <span className={styles.title}>email:</span>
              <span className={styles.value}>
                {user.email}
              </span>
            </div>

            <div className={styles.information}>
              <span className={styles.title}>phone:</span>
              <span className={styles.value}>
                {user.phone}
              </span>
            </div>

            <div className={styles.information}>
              <span className={styles.title}>city:</span>
              <span className={styles.value}>
                {user.address?.city}
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
