import React from 'react';

function Collections() {
  return (
    <div className=" relative py-10  dark:bg-dark ">
      <div className=" container">
        <h1 className=" text-center text-4xl pt-10 font-bold dark:text-white">
          Top collections over last 7 days
        </h1>
        <h2 className=" text-center text-gray-400 py-5">
          Here are a few reasons why you should choose Neftify
        </h2>

        <div className=" py-6 grid lg:grid-cols-3 xs:grid-cols-1 px-1 gap-6">
          {Array.from({ length: 6 }).map((item, index) => {
            return (
              <div
                className=" shadow-md p-5 flex items-center gap-10 justify-between dark:bg-darkCard dark:text-white"
                key={index}
              >
                <div className=" flex items-center gap-5">
                  <span className=" font-bold">{index + 1}.</span>
                  <img
                    src={`${index + 1}.jpg`}
                    className=" object-contain rounded-full"
                    width={55}
                  />
                  <div className=" flex flex-col gap-1">
                    <h5 className=" font-bold">The Sandbox</h5>
                    <h6 className=" text-gray-400 text-sm font-bold">
                      1300.087
                    </h6>
                  </div>
                </div>
                <div>
                  <h1 className=" text-green-500 font-bold">+104.25</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Collections;
