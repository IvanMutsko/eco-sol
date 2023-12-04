import About from '../About/About';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Electricity from '../Electricity/Electricity';
import Cases from '../Cases/Cases';
import Faq from '../Faq/Faq';
import Customers from '../Customers/Customers';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

import { Wrap } from './Layout.styled';

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <Customers />
      <ContactUs />
      <Footer />
    </Wrap>
  );
};

export default Layout;
