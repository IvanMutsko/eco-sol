import Header from '../Header/Header';
import Main from '../Main/Main';

import { Wrap } from './Layout.styled';

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Main />
    </Wrap>
  );
};

export default Layout;
