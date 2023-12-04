import Counter from '../Counter/Counter';
import { Section, Title, Line, Text, List, Item } from './Electricity.styled';

const typesEnergy = ['Solar', 'Wind', 'Hydro', 'Thermal', 'Nuclear'];

const Electricity = () => {
  return (
    <Section>
      <Title>Electricity we produced for all time</Title>
      <Line />
      <Counter />
      <Line />
      <Title>The services we provide</Title>
      <Text>
        Development and implementation of renewable enviroMentally friendly
        energy sources
      </Text>
      <List>
        {typesEnergy.map(type => (
          <Item key={type}>{type}</Item>
        ))}
      </List>
    </Section>
  );
};

export default Electricity;
