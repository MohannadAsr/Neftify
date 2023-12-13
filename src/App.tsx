// import { useTranslation } from 'react-i18next';
import NavBar from './components/NavBar';
import './styles/global.scss';
import Hero from '@components/Hero';
import Products from '@components/Products';
import Collections from '@components/Collections';
import Tranding from '@components/Trending';
import Browse from '@components/Browse';
import Meet from '@components/Meet';
import Footer from '@components/Footer';

function App() {
  // const { t, i18n } = useTranslation();

  return (
    <>
      <NavBar />
      <Hero />
      <Products />
      <Collections />
      <Tranding />
      <Browse />
      <Meet />
      <Footer />
    </>
  );
}

export default App;
