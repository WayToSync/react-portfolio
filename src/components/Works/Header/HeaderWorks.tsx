import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mouse from '../../../assets/common/mouse.svg';
import chevronRight from '../../../assets/common/chevron-right.svg';

const HeaderWorks = () => {
  return (
    <HeaderWorksWrapper>
      <ReturnLink to='/'>
        <ReturnZone>
          <ReturnChevronButton />
        </ReturnZone>
      </ReturnLink>
      <HeaderWorksContent>Guillaume MORVAN</HeaderWorksContent>
    </HeaderWorksWrapper>
  );
};

const HeaderWorksWrapper = styled.div`
  width: 1200px;
  height: 65px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

const ReturnLink = styled(Link)`
  text-decoration: none;
  cursor: url(${mouse}), auto;
`;

const ReturnZone = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 65px;
  height: 65px;
`;

const ReturnChevronButton = styled.div`
  position: absolute;
  left: 31px;
  top: 22px;
  background-image: url(${chevronRight});
  width: 12.91px;
  height: 20.89px;
  transform: rotate(180deg);
`;

const HeaderWorksContent = styled.div`
  position: absolute;
  width: 185px;
  height: 26px;
  left: 67px;
  top: 21px;
  font-size: ${props => props.theme.fonts.sizes.mediumInter};
  line-height: ${props => props.theme.lineHeight.largeInter};
`;

export default HeaderWorks;
