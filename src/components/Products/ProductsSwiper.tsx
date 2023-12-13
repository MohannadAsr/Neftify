import { Icon } from '@iconify/react/dist/iconify.js';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowRight from '@iconify-icons/mdi/arrow-right';
// import ArrowLeft from '@iconify-icons/mdi/arrow-right';

function ProductsSwiper() {
  const breakpoints = {
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
        <h1 className=" text-2xl lg:text-4xl font-bold">Notable Drops</h1>
        <div className=" flex items-center gap-4">
          <button className=" swiper-button-prev cursor-pointer p-5 font-bold w-[30px] h-[30px] flex items-center justify-center text-white bg-primary rounded-full">
            {'<'}
          </button>
          <button className=" swiper-button-next cursor-pointer p-5 font-bold w-[30px] h-[30px] flex items-center justify-center text-white bg-primary rounded-full">
            {'>'}
          </button>
        </div>
      </div>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        slidesPerView={4}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={7}
        effect="fade"
        loop={true}
        breakpoints={breakpoints}
      >
        {Array.from({ length: 6 }).map((_item, index) => {
          return (
            <SwiperSlide className=" px-3 my-2" key={index}>
              <div className=" bg-white shadow-md rounded-md pb-3 overflow-hidden">
                <img src={`${index + 1}.jpg`} />
                <h2 className=" px-4 py-3 text-lg font-bold">
                  Chito x Givenchy
                </h2>
                <h3 className=" px-4 py-2 text-lg text-gray-500">
                  Make your offers before 12pm EST Nov 29th
                </h3>
                <p className=" px-4 py-2 text-primary hover:text-primaryHover cursor-pointer w-fit flex gap-3 items-center">
                  Explore
                  <Icon icon={ArrowRight} fontSize={20} />
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProductsSwiper;
