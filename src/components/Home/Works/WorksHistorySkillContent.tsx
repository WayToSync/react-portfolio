import React from 'react';
import styled from 'styled-components';

const WorksHistorySkillContent = () => {
  return (
    <>
      <HistorySkillName>JavaScript</HistorySkillName>
      <HistorySkillLevel>o o o o o</HistorySkillLevel>
      <HistorySkillContent>ES6, Typescript</HistorySkillContent>
    </>
  );
};

const HistorySkillName = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.large};
  width: 107px;
  height: 322px;
  left: 60px;
  top: 2005px;
`;

const HistorySkillLevel = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.large};
  width: 64px;
  height: 322px;
  left: 232px;
  top: 2016px;
`;

const HistorySkillContent = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.medium};
  width: 272px;
  height: 290px;
  left: 320px;
  top: 2005px;
`;

export default WorksHistorySkillContent;
