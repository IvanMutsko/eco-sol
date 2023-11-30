import ceo from '../../assets/images/owners/AndriiDuda.jpg';
import techOfficer from '../../assets/images/owners/YuriiTurchenko.jpg';
import director from '../../assets/images/owners/VitaliiShevchenko.jpg';
import engineer from '../../assets/images/owners/VictorDunaev.jpg';

import { Wrap, CardWrap, Image, Text } from './Owners.styled';

const Owners = () => {
  return (
    <Wrap>
      <CardWrap>
        <Image src={ceo} alt="Andrii Duda" />
        <Text>
          <p className="name">Andrii Duda</p>
          <p className="position">CEO</p>
        </Text>
      </CardWrap>
      <CardWrap>
        <Image src={techOfficer} alt="Yurii Turchenko" />
        <Text>
          <p className="name">Yurii Turchenko</p>
          <p className="position">Technology officer</p>
        </Text>
      </CardWrap>
      <CardWrap>
        <Image src={director} alt="Vitalii Shevchenko" />
        <Text>
          <p className="name">Vitalii Shevchenko</p>
          <p className="position">Director</p>
        </Text>
      </CardWrap>
      <CardWrap>
        <Image src={engineer} alt="Victor Dunaev" />
        <Text>
          <p className="name">Victor Dunaev</p>
          <p className="position">Senior engineer</p>
        </Text>
      </CardWrap>
    </Wrap>
  );
};

export default Owners;
