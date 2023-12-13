import SiteSwiper from '@components/Shared/SiteSwiper';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const HeroSlides = Array.from({ length: 6 }).map((item, index) => {
  return (
    <div className=" img-skewd">
      <img src={`/${index + 1}.jpg`} className=" object-contain rounded-md  " />
      <div className=" flex gap-3 items-center py-3">
        <img
          src={`avatar${
            index + 1 === 5 || index + 1 === 6 ? 3 : index + 1
          }.jpg`}
          className="h-10 w-10 rounded-full shadow-md"
        />
        <span className=" font-bold dark:text-white">John Doe</span>
      </div>
    </div>
  );
});

function Hero() {
  return (
    <div className=" bg-white dark:bg-dark">
      <div className=" container py-3 md:py-10 ">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="   px-3 lg:py-32 ">
            <h1 className=" text-[2rem] xl:text-[3rem] font-black pt-10 dark:text-white">
              Discover, collect, and sell
              <span className=" text-primary"> extraordinary NFTs</span>
            </h1>
            <span className=" text-gray-400 text-lg py-2 lg:pl-4">
              on the world's first & largest NFT marketplace
            </span>
            <div className=" flex justify-start py-4 gap-6">
              <button className="bg-primary hover:bg-primaryHover px-10 py-3 cursor-pointer text-white rounded-md flex justify-between items-center gap-5 font-bold">
                Explore
                <Icon icon="mdi:arrow-right" />
              </button>
              <button className=" dark:text-white border-[1px] border-primary px-12 hover:bg-primary hover:text-white py-3 rounded-md font-bold  ">
                Create
              </button>
            </div>
          </div>
          <div className="p-7  flex justify-end  ">
            <div className="lg:w-3/4 w-full">
              <SiteSwiper
                Swiperkey={2}
                loop={true}
                slidesPerView={1}
                creativeMode
                defaultBreakPoints={false}
                slides={HeroSlides}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
