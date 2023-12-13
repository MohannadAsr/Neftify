import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/effect-creative';

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCreative,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowLeft from '@iconify-icons/mdi/arrow-left';
import ArrowRight from '@iconify-icons/mdi/arrow-right';
import { Icon } from '@iconify/react/dist/iconify.js';

type SiteSwiperT = {
  Swiperkey: number;
  slides: JSX.Element[];
  slidesPerView?: number;
  spaceBetween?: number;
  loop: boolean;
  defaultBreakPoints?: boolean;
  title?: string;
  breakpoints?: Record<any, { slidesPerView: number }>;
  showNavigation?: boolean;
  creativeMode?: boolean;
};

function SiteSwiper(props: SiteSwiperT) {
  const {
    Swiperkey,
    slidesPerView,
    loop = true,
    spaceBetween,
    defaultBreakPoints = false,
    breakpoints,
    title,
    slides,
    showNavigation = false,
    creativeMode = false,
  } = props;
  const swiperRef = React.useRef(null);
  const breakpointsAlt = {
    // When window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-3 swiper-nav-btns my-10 px-4">
        {title && (
          <h1 className=" dark:text-white text-2xl lg:text-4xl font-bold">
            {title}
          </h1>
        )}
        {showNavigation && (
          <>
            {' '}
            <div className=" flex items-center gap-4">
              <button
                className={`swiper-button-prev${Swiperkey} cursor-pointer h-10 w-10 font-bold  flex items-center justify-center text-white bg-primary hover:bg-primaryHover rounded-full`}
              >
                <Icon icon={ArrowLeft} fontSize={23} />
              </button>
              <button
                className={`swiper-button-next${Swiperkey} cursor-pointer  font-bold h-10 w-10 flex items-center justify-center text-white bg-primary hover:bg-primaryHover rounded-full`}
              >
                <Icon icon={ArrowRight} fontSize={23} />
              </button>
            </div>
          </>
        )}
      </div>
      <Swiper
        ref={swiperRef}
        navigation={{
          nextEl: `.swiper-button-next${Swiperkey}`,
          prevEl: `.swiper-button-prev${Swiperkey}`,
        }}
        slidesPerView={slidesPerView ? slidesPerView : 4}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        spaceBetween={spaceBetween ? spaceBetween : 7}
        effect={creativeMode ? 'creative' : 'fade'}
        creativeEffect={
          creativeMode
            ? {
                prev: {
                  shadow: true,
                  translate: [0, 0, -800],
                  rotate: [180, 0, 0],
                },
                next: {
                  shadow: true,
                  translate: [0, 0, -800],
                  rotate: [-180, 0, 0],
                },
              }
            : {}
        }
        loop={loop}
        breakpoints={
          defaultBreakPoints ? breakpointsAlt : breakpoints ? breakpoints : {}
        }
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide className=" px-3 my-2" key={index}>
              {item}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SiteSwiper;
