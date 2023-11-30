import { IoIosArrowRoundForward } from 'react-icons/io';

import { Button, Circle } from './TranspTextBtn.styled';

const TranspTextBtn = ({ text }) => {
  return (
    <Button>
      {text}
      <Circle>
        <IoIosArrowRoundForward />
      </Circle>
    </Button>
  );
};

export default TranspTextBtn;
