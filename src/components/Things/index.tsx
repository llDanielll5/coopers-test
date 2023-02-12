//@ts-nocheck
import React, { useState } from "react";
import styles from "../../styles/Mobile.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { cardsItems } from "./mock";
import CardSwiper from "../CardSwiper";

interface ThingsProps {
  maxWidth: number;
}

const Things = (props: ThingsProps) => {
  const slidesResponsible =
    props.maxWidth < 640 ? 1 : props.maxWidth < 760 ? 2 : 3;
  return (
    <section className={styles["things-section"]}>
      <div className={styles["container-things"]}>
        <h2>good things</h2>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={slidesResponsible}
          pagination={{ clickable: true, enabled: true }}
          style={{
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {cardsItems.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardSwiper image={item.image} title={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Things;
