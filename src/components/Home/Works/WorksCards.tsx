import React from 'react';
import styled from 'styled-components';
import worksLeft from '../../../assets/home/works-left.png';
import worksMiddle from '../../../assets/home/works-middle.png';
import worksRight from '../../../assets/home/works-right.png';
import WorksCard from './WorksCard';

const WorksCards = () => {
  return (
    <>
      <LeftCard>
        <WorksCard imageUrl={worksLeft} />
      </LeftCard>
      <MiddleCard>
        <WorksCard imageUrl={worksMiddle} />
      </MiddleCard>
      <RightCard>
        <WorksCard imageUrl={worksRight} />
      </RightCard>
    </>
  );
};

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
