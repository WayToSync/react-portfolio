import React from 'react';
import styled from 'styled-components';

const WorksHistoryLine = () => {
  return (
    <>
      <CircleTop />
      <LineHistory />
      <CircleBottom />
    </>
  );
};

const CircleTop = styled.div`
  position: absolute;
  top: 0px;
  background-color: ${props => props.theme.colors.silver};
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

const LineHistory = styled.div`
  position: absolute;
  left: 40%;
  top: 7px;
  bottom: 7px;
  width: 0px;
  border-left: 1px solid ${props => props.theme.colors.silver};
`;

const CircleBottom = styled.div`
  position: absolute;
  bottom: 0px;
  background-color: ${props => props.theme.colors.silver};
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export default WorksHistoryLine;
