import SiteSwiper from '@components/Shared/SiteSwiper';
import { Icon } from '@iconify/react/dist/iconify.js';
import ArrowRight from '@iconify-icons/mdi/arrow-right';
import SkewTop from '@components/Shared/SkewTop';
import { useAppContext } from '@/App/AppProvider';

const ProductsCards = Array.from({ length: 6 }).map((_item, index) => {
  return (
    <div className=" dark:bg-darkCard bg-white shadow-md rounded-md pb-3 overflow-hidden">
      <img src={`${index + 1}.jpg`} />
      <h2 className=" px-4 py-3 text-lg font-bold dark:text-white">
        Chito x Givenchy
      </h2>
      <h3 className=" px-4 py-2 text-lg text-gray-400">
        Make your offers before 12pm EST Nov 29th
      </h3>
      <p className=" px-4 py-2 text-primary hover:text-primaryHover cursor-pointer w-fit flex gap-3 items-center">
        Explore
        <Icon icon={ArrowRight} fontSize={20} />
      </p>
    </div>
  );
});

function Products() {
  const { AppStore } = useAppContext();
  return (
    <div className=" bg-grayBg  py-4 pb-20  relative dark:bg-darkBg">
      <SkewTop color={AppStore.mode == 'dark' ? '#1f2d3d' : '#fff'} />
      <div className="container">
        <SiteSwiper
          Swiperkey={4}
          showNavigation
          loop={true}
          slides={ProductsCards}
          title="Notable Drops"
          defaultBreakPoints
        />
      </div>
    </div>
  );
}

export default Products;
