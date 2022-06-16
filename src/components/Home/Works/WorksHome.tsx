import styled from 'styled-components';
import GeneralTitle from '../../Common/GeneralTitle';
import WorksCards from './WorksCards';
import WorksHistory from './WorksHistory';

const WorksHome = () => {
  return (
    <>
      <WorksUpper>
        <GeneralWorksTitle>
          <GeneralTitle generalTitle='Works' generalSubTitle='制作実績など' />
        </GeneralWorksTitle>
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

const GeneralWorksTitle = styled.div`
  position: absolute;
  width: 1198px;
  height: 68px;
  left: 0px;
  top: 550px;
`;

const WorksLower = styled.div`
  height: 1160px;
  width: 1200px;
  background-color: ${props => props.theme.colors.whiteSmoke};
`;

export default WorksHome;
