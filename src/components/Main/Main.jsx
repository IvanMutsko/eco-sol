import TranspTextBtn from '../TranspTextBtn/TranspTextBtn';
import Owners from '../Owners/Owners';
import photo from '../../assets/images/main-wind-turbine.jpg';

import {
  Section,
  Title,
  Text,
  ButtonWrap,
  Line,
  LinkWrap,
  Link,
  Image,
  Subtitle,
} from './Main.styled';

const Main = () => {
  return (
    <Section id='main'>
      <Title>RENEWABLE ENERGY For any task</Title>
      <Text>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </Text>
      <ButtonWrap>
        <TranspTextBtn text="Learn more" />
      </ButtonWrap>
      <Line></Line>
      <LinkWrap>
        <Link
          href="https://maps.app.goo.gl/NVqvCtdsmYLy8t7s7"
          target="_blank"
          rel="noopener noreferrer"
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Link>
        <Link href="mailto:office@ecosolution.com">office@ecosolution.com</Link>
      </LinkWrap>
      <Image src={photo} alt="wind turbine" />
      <Subtitle>LET’s start with small start with ourselves</Subtitle>
      <Text>
        <span>ECOSOLUTION</span> is the largest group of companies in Western
        Ukraine, which is engaged in the development and implementation of
        renewable environmentally friendly energy sources. We are the first
        privately owned company that received a loan from the European Bank for
        Reconstruction and Development (EBRD) and built the first wind farm in
        Western Ukraine. During the company's work, a number of projects in the
        field of energy were implemented. At the same time, new investment
        projects, in particular small hydropower and biofuels, are constantly
        being developed and developed with existing objects.
      </Text>

      <Owners />
    </Section>
  );
};

export default Main;
