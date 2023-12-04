import SimpleSlider from '../SimpleSlider/SimpleSlider';
import { customers } from '../../assets/data/customers';

import { Section, Title, Wrap, Text, Subwrap, Image } from './Customers.styled';

const Customers = () => {
  return (
    <Section>
      <Title>
        our satisfied
        <br />
        customers
      </Title>
      <SimpleSlider>
        {customers.map(customer => (
          <Wrap key={customer.id}>
            <Text>{customer.name}</Text>
            <Subwrap>
              <Image src={customer.image} alt={customer.name} />
            </Subwrap>
          </Wrap>
        ))}
      </SimpleSlider>
    </Section>
  );
};

export default Customers;
