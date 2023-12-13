import SiteSwiper from '@components/Shared/SiteSwiper';

const TrendingCards = Array.from({ length: 6 }).map((_item, index) => {
  return (
    <div className=" bg-white shadow-md rounded-md pb-3 overflow-hidden dark:bg-darkCard dark:text-white">
      <div className=" relative">
        <img src={`${index + 1}.jpg`} />
        <img
          src={`avatar${
            index + 1 === 5 || index + 1 === 6 ? 3 : index + 1
          }.jpg`}
          className=" absolute -bottom-10 right-2 w-20 h-20 rounded-full shadow-lg "
        />
      </div>
      <h2 className=" px-4 py-3 text-lg font-bold">Liguid Wave</h2>
      <div className=" flex justify-between px-4 py-1">
        <h2 className=" font-bold text-gray-400">Auction</h2>
        <h3 className=" font-bold text-gray-400">
          Bid: <span className=" text-primary">0.55 ETH</span>
        </h3>
      </div>
      <div className=" flex justify-between px-4 py-1">
        <h2 className=" font-bold text-gray-400">3h 1m 50s</h2>
        <h3 className=" font-bold text-gray-400">0.55 ETH</h3>
      </div>
      <div className=" px-3 w-full py-4">
        <button className=" w-full py-3 bg-primary hover:bg-primaryHover text-white rounded-md ">
          Place a Bid
        </button>
      </div>
    </div>
  );
});

function Tranding() {
  return (
    <div className="  bg-grayBg  py-4 pb-20  relative dark:bg-darkBg ">
      <div className="container">
        <SiteSwiper
          Swiperkey={10}
          showNavigation
          slidesPerView={2}
          loop={true}
          title="Trending Items"
          spaceBetween={5}
          slides={TrendingCards}
          defaultBreakPoints
        />
      </div>
    </div>
  );
}

export default Tranding;
