"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards } from "swiper/modules";

import { CardSwiperProps } from "@/types/global";

export default function CardSwiper({ data, setState }: CardSwiperProps) {
  return (
    <Swiper
      effect={"cards"}
      centeredSlides={true}
      grabCursor={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectCards]}
      slidesPerView={1}
      className="mySwiper sm:w-[340px] sm:h-[420px] w-[240px] h-[320px]"
      onSlideChange={(e) => setState(e.realIndex)}
    >
      {data.map(({ name, image }) => (
        <SwiperSlide key={name} className="rounded-lg">
          <Image
            className="w-full h-full"
            src={image}
            alt={name}
            width={500}
            height={500}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
