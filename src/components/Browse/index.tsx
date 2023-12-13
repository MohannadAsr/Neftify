import { useAppContext } from '@/App/AppProvider';
import SkewTop from '@components/Shared/SkewTop';
import React from 'react';

function Browse() {
  const { AppStore } = useAppContext();

  return (
    <div className=" bg-white py-10 relative dark:bg-dark dark:text-white">
      <SkewTop color={AppStore.mode == 'light' ? '#fafbfc' : '#1c2836'} />

      <div className=" container">
        <h1 className=" text-4xl text-center font-bold">Browse by category</h1>
        <h2 className=" text-center text-gray-400 py-5">
          Here are a few reasons why you should choose Neftify
        </h2>
        <div className=" grid lg:grid-cols-4 grid-cols-2 gap-5 px-1 ">
          {Array.from({ length: 6 }).map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-sm rounded-md pb-3 overflow-hidden dark:bg-darkCard "
              >
                <img src={`${index + 1}.jpg`} />
                <h1 className=" text-center py-3 text-xl font-semibold ">
                  Category
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Browse;
