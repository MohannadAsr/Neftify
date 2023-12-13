import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

function Meet() {
  return (
    <>
      <div className=" py-10 bg-grayBg dark:bg-darkBg dark:text-white">
        <div className=" container">
          <h1 className=" text-4xl text-center font-bold">Meet with Neftify</h1>
          <h2 className=" text-center text-gray-400 py-5">
            Here are a few reasons why you should choose Neftify
          </h2>
          <div className=" flex justify-center items-center py-2 relative">
            <img src="/videoLayer.jpg" />
            <span
              className=" absolute left-1/2 top-1/2 bg-primary p-3 h-14 w-14 rounded-full flex items-center justify-center cursor-pointer hover:bg-primaryHover"
              style={{ transform: 'translate(-50%,-50%)' }}
            >
              <Icon icon="mdi-play" color="white" fontSize={30} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meet;
