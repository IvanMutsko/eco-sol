import { useState, useEffect } from 'react';
import formatNumber from '../../utils/formatNumber';

import { Wrap, Unit, Value } from './Counter.styled';

const Counter = () => {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <Wrap>
      <Value>{formatNumber(count)}</Value>
      <Unit>kWh</Unit>
    </Wrap>
  );
};

export default Counter;
