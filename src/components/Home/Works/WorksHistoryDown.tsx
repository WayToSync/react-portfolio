import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../../Common/CategoryTitle';
import WorksHistoryPersonalContent from './WorksHistoryPersonalContent';
import WorksHistorySkillContent from './WorksHistorySkillContent';
import historyIcon from '../../../assets/home/history.svg';

const WorksHistoryDown = () => {
  return (
    <>
      <HistoryTitleSkill>
        <CategoryTitle icon={historyIcon} categoryTitle='SKILL' />
      </HistoryTitleSkill>
      <WorksHistorySkillContent />
      <HistoryTitleQual>
        <CategoryTitle icon={historyIcon} categoryTitle='PERSONAL QUALITIES' />
      </HistoryTitleQual>
      <WorksHistoryPersonalContent />
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

export default WorksHistoryDown;
