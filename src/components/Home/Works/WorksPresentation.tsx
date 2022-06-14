import React from 'react';
import styled from 'styled-components';
import WorksCards from './WorksCards';
import WorksHistory from './WorksHistory';

const WorksPresentation = () => {
  return (
    <>
      <WorksUpper>
        <WorksTitle>Works</WorksTitle>
        <WorksSubTitle>制作実績など</WorksSubTitle>
        <WorksCards />
      </WorksUpper>
      <WorksLower>
        <WorksHistory />
      </WorksLower>
    </>
  );
};

const WorksUpper = styled.div`
  height: 805px;
  width: 1200px;
`;

const WorksTitle = styled.div`
  position: absolute;
  font-size: ${props => props.theme.fonts.sizes.extra};
  font-weight: ${props => props.theme.fonts.weight.large};
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
  width: 1200px;
  height: 26px;
  left: 0px;
  top: 592px;
  text-align: center;
`;

const WorksLower = styled.div`
  height: 1160px;
  width: 1200px;
  background-color: ${props => props.theme.colors.whiteSmoke};
`;

export default WorksPresentation;
