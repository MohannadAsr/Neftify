import { useTranslation } from 'react-i18next';
import LangSwitcher from '../LangSwitcher';
import { Icon } from '@iconify/react/dist/iconify.js';
import Light from '@iconify-icons/mdi/lightbulb-on';
import dark from '@iconify-icons/mdi/weather-night';
import { useAppContext } from '@/App/AppProvider';

function NavBar() {
  const { AppStore, AppDispatch } = useAppContext();
  const navLinks = [
    'Home',
    'Explore',
    'item',
    'Collection',
    'Profile',
    'Upload',
    'Dashboard',
  ];

  // const navigate = useNavigate();

  // !! get the id pararms if the route have params
  // const { id } = useParams();

  // Here how to use the navigate   navigate({pathName : "..." , search : "...[?something=3000]"})

  // !! Access the pathname property to get the current route
  // const location = useLocation();
  // const currentRoute = React.useMemo(() => location.pathname, [location]);

  return (
    <div className=" w-full shadow-sm sticky  top-0 z-50 bg-white dark:bg-dark">
      <div className=" flex justify-between items-center   py-6 flex-wrap container px-3">
        <img src="/logo.png" />
        <div className="  items-center flex-wrap gap-8 hidden lg:flex">
          {navLinks.map((item, index) => {
            return (
              <span
                className=" text-md text-gray-400 font-extrabold capitalize cursor-pointer"
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className=" flex items-center gap-4">
          <div
            className=" p-2 cursor-pointer rounded-full bg-primary hover:bg-primaryHover"
            onClick={() =>
              AppDispatch({
                type: 'SwitchMode',
                payload: AppStore.mode === 'dark' ? 'light' : 'dark',
              })
            }
          >
            <Icon
              icon={AppStore.mode == 'dark' ? dark : Light}
              fontSize={18}
              color="#fff"
            />
          </div>
          <button className="  bg-primary hover:bg-primaryHover px-5 py-2 cursor-pointer text-white rounded-md outline-none">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
