import React from 'react';
import styled from 'styled-components';
import mouse from '../../../assets/common/mouse.svg';
import worksOtherLeft from '../../../assets/works/work-other-left.png';
import worksOtherRight from '../../../assets/works/work-other-right.png';
import WorksCard from '../../Common/WorksCard';

const OtherWorksContent = () => {
  return (
    <WorksContentLower>
      <a target='_blank' rel='noreferrer' href='https://github.com/WayToSync/react-portfolio/'>
        <LeftCard>
          <WorksCard imageUrl={worksOtherLeft} worksTitle='Musubu' worksSubTitle='Coding / React + Redux' />
        </LeftCard>
      </a>
      <a target='_blank' rel='noreferrer' href='https://github.com/WayToSync/json-server'>
        <RightCard>
          <WorksCard imageUrl={worksOtherRight} worksTitle='Musubu' worksSubTitle='Coding / React + Redux' />
        </RightCard>
      </a>
    </WorksContentLower>
  );
};

const WorksContentLower = styled.div`
  height: 705px;
  width: 1200px;
  background-color: ${props => props.theme.colors.whiteSmoke};
`;

const LeftCard = styled.div`
  position: absolute;
  width: 275px;
  height: 427px;
  left: 309px;
  top: 1469px;
  cursor: url(${mouse}), auto;
`;

const RightCard = styled.div`
  position: absolute;
  width: 275px;
  height: 427px;
  left: 614px;
  top: 1469px;
  cursor: url(${mouse}), auto;
`;

export default OtherWorksContent;
