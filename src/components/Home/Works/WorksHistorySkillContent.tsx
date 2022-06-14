import React from 'react';
import styled from 'styled-components';
import { useSkillsQuery } from '../../../features/skillData/skilApi';

const WorksHistorySkillContent = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useSkillsQuery();
  return (
    <HistorySkillWrapper>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <>
          {data?.map((skill, index) => {
            return (
              <HistorySkillLine key={index}>
                <HistorySkillName>{skill.name}</HistorySkillName>
                <HistorySkillLevel>
                  {skill.level.map((level, index) => (level ? <DarkCyanCircle key={index} /> : <SilverCircle key={index} />))}
                </HistorySkillLevel>
                <HistorySkillContent>{skill.content}</HistorySkillContent>
              </HistorySkillLine>
            );
          })}
        </>
      )}
    </HistorySkillWrapper>
  );
};

const HistorySkillWrapper = styled.div`
  position: absolute;
  width: 532px;
  height: 322px;
  left: 60px;
  top: 2005px;
`;

const HistorySkillLine = styled.div`
  width: 100%;
  height: 28px;
`;

const HistorySkillName = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.large};
  width: 107px;
  left: 0px;
`;

const HistorySkillLevel = styled.div`
  position: absolute;
  width: 64px;
  height: 28px;
  left: 172px;
  display: flex;
  justify-content: space-between;
`;

const DarkCyanCircle = styled.div`
  width: 8px;
  height: 8px;
  margin-top: 10px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.darkCyan};
`;

const SilverCircle = styled.div`
  width: 8px;
  height: 8px;
  margin-top: 10px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.silver};
`;

const HistorySkillContent = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.medium};
  width: 272px;
  height: 28px;
  left: 260px;
`;

export default WorksHistorySkillContent;
