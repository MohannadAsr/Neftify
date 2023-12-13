import { useAppContext } from '@/App/AppProvider';
import SkewTop from '@components/Shared/SkewTop';

function Footer() {
  const { AppStore } = useAppContext();

  const sections = [
    {
      head: 'About us',
      children: ['Explore', 'Item', 'Collection', 'Connect'],
    },
    {
      head: 'Settings',
      children: ['Settings', 'Application', 'Security', 'Activty'],
    },
    {
      head: 'Profile',
      children: ['Created', 'Item', 'Collection', 'Collected'],
    },
  ];

  return (
    <div className=" dark:bg-darkCard bg-secondary text-white relative pt-10">
      <SkewTop color={AppStore.mode === 'light' ? '#fafbfc' : '#1c2836'} />
      <div className=" container px-3">
        <div className=" grid grid-cols-12 gap-3 py-10">
          <div className=" md:col-span-4 col-span-12">
            <img src="/logoh.png" className="py-5" />
            <span className=" text-gray-400">
              Neftify is a unique and beautiful collection of UI elements that
              are all flexible and modular. A complete and customizable solution
              to building the website of your dreams.
            </span>
          </div>
          {sections.map((item, headIndex) => {
            return (
              <div
                className=" md:col-span-2 col-span-6 px-2 md:text-start text-center"
                key={headIndex}
              >
                <h1 className=" font-bold text-lg">{item.head}</h1>
                <div className=" flex flex-col md:items-start items-center py-6 gap-4 ">
                  {item.children.map((child, index) => (
                    <span
                      className=" text-gray-400 cursor-pointer w-fit "
                      key={index}
                    >
                      {' '}
                      {child}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-full h-[1px] bg-gray-600"></div>
      <div className=" flex justify-between items-center py-3 px-3 container">
        <h5 className="text-gray-400 text-sm font-bold">
          © Copyright 2022 <span className=" text-primary">Neftify</span> All
          Rights Reserved
        </h5>
      </div>
    </div>
  );
}

export default Footer;
