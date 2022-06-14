import React from 'react';
import styled from 'styled-components';
import WorksHistoryUp from './WorksHistoryUp';
import WorksHistoryTitle from './WorksHistoryTitle';

const WorksHistory = () => {
  return (
    <>
      <WorksHistoryUp />
      <HistoryTitleSkill>
        <WorksHistoryTitle historyTitle='SKILL' />
      </HistoryTitleSkill>
      <HistorySkillName>JavaScript</HistorySkillName>
      <HistorySkillLevel>o o o o o</HistorySkillLevel>
      <HistorySkillContent>ES6, Typescript</HistorySkillContent>
      <HistoryTitleQual>
        <WorksHistoryTitle historyTitle='PERSONAL QUALITIES' />
      </HistoryTitleQual>
    </>
  );
};

const HistoryTitleSkill = styled.div`
  position: absolute;
  left: 31px;
  top: 1949px;
  height: 35px;
  width: 547.12px;
`;

const HistoryTitleQual = styled.div`
  position: absolute;
  left: 617px;
  top: 1949px;
  height: 35px;
  width: 547.12px;
`;

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

export default WorksHistory;
