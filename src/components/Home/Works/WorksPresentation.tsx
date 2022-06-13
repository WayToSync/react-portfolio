import React from 'react';
import styled from 'styled-components';
import works1 from '../../../assets/home/works1.png';
import works2 from '../../../assets/home/works2.png';
import works3 from '../../../assets/home/works3.png';
import WorkCard from './WorkCard';

const WorksPresentation = () => {
  return (
    <WorksWrapper>
      <WorksTitle>Works</WorksTitle>
      <WorksSubTitle>制作実績など</WorksSubTitle>
      <LeftCard>
        <WorkCard imageUrl={works1} />
      </LeftCard>
      <MiddleCard>
        <WorkCard imageUrl={works2} />
      </MiddleCard>
      <RightCard>
        <WorkCard imageUrl={works3} />
      </RightCard>
    </WorksWrapper>
  );
};

const WorksWrapper = styled.div`
  height: 805px;
  width: 1200px;
`;

const WorksTitle = styled.div`
  position: absolute;
  font-size: ${props => props.theme.fonts.sizes.extra};
  font-weight: ${props => props.theme.fonts.weight.large};
  color: ${props => props.theme.colors.matterhorn};
  width: 1200px;
  height: 28px;
  left: 0px;
  top: 550px;
  text-align: center;
`;

const WorksSubTitle = styled.div`
  position: absolute;
  font-size: ${props => props.theme.fonts.sizes.medium};
  font-weight: ${props => props.theme.fonts.weight.medium};
  color: ${props => props.theme.colors.matterhorn};
  width: 1200px;
  height: 26px;
  left: 0px;
  top: 592px;
  text-align: center;
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

export default WorksPresentation;
