import SimpleSlider from '../SimpleSlider/SimpleSlider';
import { owners } from '../../assets/data/owners';

import { CardWrap, Image, Text } from './Owners.styled';

const Owners = () => {
  return (
    <SimpleSlider>
      {owners.map(owner => (
        <CardWrap key={owner.id}>
          <Image src={owner.image} alt={owner.name} />
          <Text>
            <p className="name">{owner.name}</p>
            <p className="position">{owner.position}</p>
          </Text>
        </CardWrap>
      ))}
    </SimpleSlider>
  );
};

export default Owners;
