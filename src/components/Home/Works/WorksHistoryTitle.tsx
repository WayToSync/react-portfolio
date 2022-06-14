import React from 'react';
import styled from 'styled-components';
import historyIcon from '../../../assets/home/history.svg';

type WorksHistoryTitleProps = {
  historyTitle: string;
};

//TODO: Changer l'icon par quelque chose d'automatique en props ou none pour le reutiliser partout meme page 2

const WorksHistoryTitle = ({ historyTitle }: WorksHistoryTitleProps) => {
  return (
    <>
      <HistoryIcon />
      <HistoryTitleText>{historyTitle}</HistoryTitleText>
      <WorksHorizontalLine />
    </>
  );
};

const HistoryIcon = styled.div`
  position: absolute;
  top: 6px;
  width: 14.12px;
  height: 16px;
  background-image: url(${historyIcon});
`;

const HistoryTitleText = styled.div`
  position: absolute;
  font-size: ${props => props.theme.fonts.sizes.medium};
  font-weight: ${props => props.theme.fonts.weight.large};
  color: ${props => props.theme.colors.darkCyan};
  left: 32px;
  width: 520px;
  text-align: left;
  height: 28px;
`;

const WorksHorizontalLine = styled.div`
  position: absolute;
  width: 520px;
  height: 0px;
  border-top: 1px solid ${props => props.theme.colors.silver};
  transform: rotate(0deg);
  bottom: 0px;
  left: 32px;
`;

export default WorksHistoryTitle;
