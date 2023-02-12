import React from "react";
import Image from "next/legacy/image";
import styles from "../../styles/Mobile.module.css";

interface CardSwiperProps {
  title: string;
  image: string;
}

const CardSwiper = (props: CardSwiperProps) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["image-card"]}>
        <Image
          alt="Mountains"
          src={props.image}
          layout="fill"
          className={styles["image-card-item"]}
        />
      </div>

      <div className={styles["logo-side"]}>
        <Image
          alt="Mountains"
          src="/images/BGarrow.png"
          width={45}
          height={56}
        />
      </div>

      <div className={styles["inner-card-container"]}>
        <span>function</span>
        <p>{props.title}</p>
        <button>read more</button>
      </div>
    </div>
  );
};

export default CardSwiper;
