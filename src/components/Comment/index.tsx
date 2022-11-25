import Image from "next/image";
import styles from "./styles.module.scss";

export function Comment() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Image
          src="https://github.com/thyago608.png"
          alt=""
          width={50}
          height={50}
          className={styles.avatar}
        />
        <div className={styles.userInformation}>
          <strong>Thyago Ribeiro</strong>
          <span>thyagoribeiro608@gmail.com</span>
        </div>
      </div>
      <p className={styles.comment}>
        Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ad, saepe! Aspernatur, blanditiis explicabo
        delectus accusantium repellendus eius neque ut.
      </p>
    </div>
  );
}
