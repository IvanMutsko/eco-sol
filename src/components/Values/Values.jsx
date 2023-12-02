import icons from '../../assets/icons/sprite.svg';

import { Wrap, Line, Card, Value, Text } from './Values.styled';

const Values = () => {
  return (
    <Wrap>
      <Card className="div1">
        <Value>
          <svg className={`icon`}>
            <use href={`${icons}#icon-maximize`}></use>
          </svg>
          Openness
        </Value>
        <Line></Line>
        <Text>to the world, people, new ideas and projects</Text>
      </Card>
      <Card className="div2">
        <Value>
          <svg className={`icon`}>
            <use href={`${icons}#icon-global`}></use>
          </svg>
          Responsibility
        </Value>
        <Line></Line>
        <Text>
          we are aware that the results of our work have an impact on our lives
          and the lives of future generations
        </Text>
      </Card>
      <div className="div3"></div>
      <div className="div4"></div>
      <Card className="div5">
        <Value>
          <svg className={`icon`}>
            <use href={`${icons}#icon-cpu`}></use>
          </svg>
          Innovation
        </Value>
        <Line></Line>
        <Text>
          we use the latest technology to implement non-standard solutions
        </Text>
      </Card>
      <Card className="div6">
        <Value>
          <svg className={`icon`}>
            <use href={`${icons}#icon-ranking`}></use>
          </svg>
          Quality
        </Value>
        <Line></Line>
        <Text>
          we do not strive to be the first among others, but we want to be the
          best in our business
        </Text>
      </Card>
    </Wrap>
  );
};

export default Values;
