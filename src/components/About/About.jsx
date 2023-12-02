import Values from '../Values/Values';

import { Section, Title, Text } from './About.styled';

const About = () => {
  return (
    <Section>
      <Title>Main values of our company</Title>
      <Text>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </Text>
      <Values />
    </Section>
  );
};

export default About;
