import { useState } from 'react';
import { FiMinus, FiPlus, FiCircle } from 'react-icons/fi';

import scrollToSection from '../../utils/scrollToSection';
import data from '../../assets/data/faq.json';

import {
  Section,
  Title,
  Line,
  List,
  ListItem,
  CardTitle,
  CardText,
  CardWrap,
  CardButton,
  Text,
  NavigateLink,
} from './Faq.styled';

const Faq = () => {
  const [isShowAnswer, setIsShowAnswer] = useState(true);
  const [currentCard, setCurrentCard] = useState(1);

  const handleClick = id => {
    if (!isShowAnswer) {
      setIsShowAnswer(true);
      setCurrentCard(id);
      return;
    }
    setIsShowAnswer(false);
    setCurrentCard(null);
  };

  return (
    <Section>
      <Title>
        Frequently Asked
        <br /> Questions
      </Title>

      <List>
        {data.map(el => (
          <ListItem key={el.id}>
            <Line />
            <CardWrap>
              <CardButton
                type="button"
                onClick={() => {
                  handleClick(el.id);
                }}
              >
                {currentCard === el.id ? (
                  <FiMinus style={{ color: '#173D33' }} />
                ) : (
                  <FiPlus style={{ color: '#97d28b' }} />
                )}
              </CardButton>
              <CardTitle>{el.question}</CardTitle>
            </CardWrap>
            <CardText
              className={isShowAnswer && currentCard === el.id ? 'show' : ''}
            >
              {el.answer}
            </CardText>
          </ListItem>
        ))}
      </List>

      <Text>Didn't find the answer to your question?</Text>
      <NavigateLink
        to="#contact-us"
        onClick={() => scrollToSection('contact-us')}
      >
        Contact Us <FiCircle className="icon" />
      </NavigateLink>
    </Section>
  );
};

export default Faq;
