import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mouse from '../../../assets/common/mouse.svg';
import worksOtherLeft from '../../../assets/works/work-other-left.png';
import worksOtherRight from '../../../assets/works/work-other-right.png';
import WorksCard from '../../Common/WorksCard';

const OtherWorksContent = () => {
  return (
    <WorksContentLower>
      <NextLink to='/'>
        <LeftCard>
          <WorksCard imageUrl={worksOtherLeft} worksTitle='Musubu' worksSubTitle='Coding / React + Redux' />
        </LeftCard>
      </NextLink>
      <NextLink to='/'>
        <MiddleCard>
          <WorksCard imageUrl={worksOtherRight} worksTitle='Musubu' worksSubTitle='Coding / React + Redux' />
        </MiddleCard>
      </NextLink>
    </WorksContentLower>
  );
};

const WorksContentLower = styled.div`
  height: 705px;
  width: 1200px;
  background-color: ${props => props.theme.colors.whiteSmoke};
`;

const NextLink = styled(Link)`
  text-decoration: none;
  cursor: url(${mouse}), auto;
`;

const LeftCard = styled.div`
  position: absolute;
  width: 275px;
  height: 427px;
  left: 309px;
  top: 1469px;
`;

const MiddleCard = styled.div`
  position: absolute;
  width: 275px;
  height: 427px;
  left: 614px;
  top: 1469px;
`;

export default OtherWorksContent;
