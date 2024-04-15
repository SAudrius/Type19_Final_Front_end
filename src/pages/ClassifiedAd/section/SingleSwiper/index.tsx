import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import { useState } from "react";
import { type Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper/core"; // Import modules from the correct path
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Ensure that you have SwiperCore modules correctly initialized
SwiperCore.use([Navigation, Thumbs, FreeMode]);

// Define your component
interface SingleSwiperProps {
  images: string[];
}

export const SingleSwiper = ({ images }: SingleSwiperProps) => {
  const breakpoints = {
    // when window width is >= 768px
    1000: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    // when window width is < 768px
    350: {
      slidesPerView: 2,
    },
  };
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <div className="max-h-[600px]">
      <Swiper
        style={{
          height: "420px",
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        loop={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((imageUrl, i) => (
          <SwiperSlide
            key={`${imageUrl}-${i}`}
            style={{
              height: "100%",
            }}
          >
            <img
              src={imageUrl}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        onSwiper={setThumbsSwiper}
        style={{ marginTop: "10px" }}
      >
        {images.map((imageUrl, i) => (
          <SwiperSlide key={`${imageUrl}-second-${i}`}>
            <img src={imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
