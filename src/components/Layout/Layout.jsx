import About from '../About/About';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Electricity from '../Electricity/Electricity';

import { Wrap } from './Layout.styled';
import Cases from '../Cases/Cases';

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
    </Wrap>
  );
};

export default Layout;
