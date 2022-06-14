import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mouse from '../../../assets/common/mouse.svg';
import worksLeft from '../../../assets/home/works-left.png';
import worksMiddle from '../../../assets/home/works-middle.png';
import worksRight from '../../../assets/home/works-right.png';
import WorksCard from '../../Common/WorksCard';

const WorksCards = () => {
  return (
    <>
      <NextLink to='/works'>
        <LeftCard>
          <WorksCard imageUrl={worksLeft} worksTitle='Musubu LP' worksSubTitle='Coding / Gatsby' />
        </LeftCard>
      </NextLink>
      <NextLink to='/works'>
        <MiddleCard>
          <WorksCard imageUrl={worksMiddle} worksTitle='Musubu LP' worksSubTitle='Coding / Gatsby' />
        </MiddleCard>
      </NextLink>
      <NextLink to='/works'>
        <RightCard>
          <WorksCard imageUrl={worksRight} worksTitle='Musubu LP' worksSubTitle='Coding / Gatsby' />
        </RightCard>
      </NextLink>
    </>
  );
};

const NextLink = styled(Link)`
  text-decoration: none;
  cursor: url(${mouse}), auto;
`;

const LeftCard = styled.div`
  position: absolute;
  width: 275px;
  height: 427px;
  left: 157px;
  top: 693px;
`;

const MiddleCard = styled.div`
  position: absolute;
  width: 275px;
  height: 427px;
  left: 462px;
  top: 693px;
`;

const RightCard = styled.div`
  position: absolute;
  width: 275px;
  height: 427px;
  left: 767px;
  top: 693px;
`;

export default WorksCards;
