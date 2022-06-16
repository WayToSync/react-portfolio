import styled from 'styled-components';
import WorksHistoryBar from './WorksHistoryBar';

const WorksHistoryPersonalContent = () => {
  return (
    <>
      <Circle />
      <HistoryQualText>技術的好奇心が旺盛で「とにかくやってみる」が身上。</HistoryQualText>
      <HistoryQualCircleWrapper data-title='Green 75%'>
        <HistoryQualValue>75%</HistoryQualValue>
        <HistoryQualCircleRight />
        <HistoryQualCircleLeft />
        <HistoryQualCircleBottom />
      </HistoryQualCircleWrapper>
      <HistoryPersonalBar1>
        <WorksHistoryBar text='text' value='80%' />
        <HistoryPersonalProgWrap1>
          <HistoryPersonalProgress />
        </HistoryPersonalProgWrap1>
      </HistoryPersonalBar1>
      <HistoryPersonalBar2>
        <WorksHistoryBar text='text-1' value='70%' />
        <HistoryPersonalProgWrap2>
          <HistoryPersonalProgress />
        </HistoryPersonalProgWrap2>
      </HistoryPersonalBar2>
      <HistoryPersonalBar3>
        <WorksHistoryBar text='text-2' value='65%' />
        <HistoryPersonalProgWrap3>
          <HistoryPersonalProgress />
        </HistoryPersonalProgWrap3>
      </HistoryPersonalBar3>
      <HistoryPersonalBar4>
        <WorksHistoryBar text='text-3' value='50%' />
        <HistoryPersonalProgWrap4>
          <HistoryPersonalProgress />
        </HistoryPersonalProgWrap4>
      </HistoryPersonalBar4>
      <HistoryPersonalBar5>
        <WorksHistoryBar text='text' value='30%' />
        <HistoryPersonalProgWrap5>
          <HistoryPersonalProgress />
        </HistoryPersonalProgWrap5>
      </HistoryPersonalBar5>
    </>
  );
};

const Circle = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.silver};
  width: 5px;
  height: 5px;
  left: 620px;
  top: 2015px;
  border-radius: 50%;
`;

const HistoryQualText = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.medium};
  width: 520px;
  height: 47px;
  left: 648px;
  top: 2005px;
`;

const HistoryQualCircleWrapper = styled.a`
  position: absolute;
  width: 145px;
  height: 145px;
  left: 649px;
  top: 2067px;
  display: flex;
  align-items: center;

  :hover:after {
    position: absolute;
    background-color: ${props => props.theme.colors.matterhorn};
    color: ${props => props.theme.colors.white};
    width: 97px;
    height: 36px;
    content: attr(data-title);
    left: 50%;
    top: 100%;
    border-radius: 4px;
    padding-top: 7px;
    text-align: center;
  }
`;

const HistoryQualValue = styled.div`
  position: absolute;
  font-size: ${props => props.theme.fonts.sizes.largeInter};
  font-weight: ${props => props.theme.fonts.weight.medium};
  color: ${props => props.theme.colors.black};
  width: 100%;
  height: 28px;
  text-align: center;
`;

const HistoryQualCircleRight = styled.div`
  position: absolute;
  width: 72.5px;
  height: 145px;
  border-bottom-right-radius: 145px;
  border-top-right-radius: 145px;
  border: 10px solid ${props => props.theme.colors.lightCyan};
  border-left: 0;
  left: 50%;
`;

const HistoryQualCircleLeft = styled.div`
  position: absolute;
  width: 72.5px;
  height: 145px;
  border-bottom-left-radius: 145px;
  border-top-left-radius: 145px;
  border: 10px solid ${props => props.theme.colors.matterhorn};
  border-right: 0;
`;

const HistoryQualCircleBottom = styled.div`
  position: absolute;
  width: 145px;
  height: 72.5px;
  border-bottom-left-radius: 145px;
  border-bottom-right-radius: 145px;
  border: 10px solid ${props => props.theme.colors.lightCyan};
  border-top: 0;
  top: 50%;
`;

const HistoryPersonalBar1 = styled.div`
  position: absolute;
  width: 284px;
  height: 28px;
  left: 884px;
  top: 2069px;
`;

const HistoryPersonalProgWrap1 = styled.div`
  position: absolute;
  width: 200px;
`;

const HistoryPersonalBar2 = styled.div`
  position: absolute;
  width: 297px;
  height: 29px;
  left: 871px;
  top: 2099px;
`;

const HistoryPersonalProgWrap2 = styled.div`
  position: absolute;
  width: 175px;
  left: 13px;
`;

const HistoryPersonalBar3 = styled.div`
  position: absolute;
  width: 297px;
  height: 29px;
  left: 871px;
  top: 2129px;
`;

const HistoryPersonalProgWrap3 = styled.div`
  position: absolute;
  width: 162px;
  left: 13px;
`;

const HistoryPersonalBar4 = styled.div`
  position: absolute;
  width: 297px;
  height: 29px;
  left: 871px;
  top: 2159px;
`;

const HistoryPersonalProgWrap4 = styled.div`
  position: absolute;
  width: 125px;
  left: 13px;
`;

const HistoryPersonalBar5 = styled.div`
  position: absolute;
  width: 284px;
  height: 29px;
  left: 884px;
  top: 2189px;
`;

const HistoryPersonalProgWrap5 = styled.div`
  position: absolute;
  width: 75px;
`;

const HistoryPersonalProgress = styled.div`
  position: absolute;
  width: 100%;
  height: 14px;
  left: 34px;
  top: 7px;
  background: linear-gradient(90deg, #00a1ab 0%, #61cfc8 100%);
`;

export default WorksHistoryPersonalContent;
