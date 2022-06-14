import React from 'react';
import styled from 'styled-components';

type WorksHistoryBarProps = {
  text: string;
  value: string;
};

const WorksHistoryBar = ({ text, value }: WorksHistoryBarProps) => {
  return (
    <>
      <HistoryPersonalText>{text}</HistoryPersonalText>
      <HistoryPersonalBar>
        <HistoryPersonalBarText>{value}</HistoryPersonalBarText>
      </HistoryPersonalBar>
    </>
  );
};

const HistoryPersonalText = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.medium};
  color: ${props => props.theme.colors.black};
  height: 28px;
`;

const HistoryPersonalBar = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.matterhorn};
  right: 0px;
  margin-left: 10px;
  top: 7px;
  width: 250px;
  height: 14px;
`;

const HistoryPersonalBarText = styled.div`
  position: absolute;
  font-size: ${props => props.theme.fonts.sizes.verySmall};
  font-weight: ${props => props.theme.fonts.weight.medium};
  color: ${props => props.theme.colors.white};
  width: 19px;
  height: 28px;
  right: 6px;
  bottom: -7px;
`;

export default WorksHistoryBar;
