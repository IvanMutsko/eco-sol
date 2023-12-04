import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  color: #173d33;
  font-family: 'AllRoundGothicThick';
  font-size: 33px;
  line-height: normal;
  letter-spacing: -1.32px;

  & p {
    & span {
      color: #97d28b;
    }
    margin-top: 3px;
    margin-left: 4px;
    color: #173d33;
    font-family: 'CASaygonText';
    font-size: 10px;
    line-height: 9px;
    letter-spacing: -0.4px;
  }
`;
