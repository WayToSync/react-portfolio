import styled from 'styled-components';
import GeneralTitle from '../../Common/GeneralTitle';
import CategoryTitle from '../../Common/CategoryTitle';
import ActivityInterestContent from './ActivityInterestContent';
import pen from '../../../assets/home/pen.svg';
import heart from '../../../assets/home/heart.svg';
import bike from '../../../assets/home/bike.png';
import study from '../../../assets/home/study.png';
import iot from '../../../assets/home/iot.png';

type InterestContent = string[];

const ActivityHome = () => {
  const interestBikeData: InterestContent = ['MTB'];
  const interestStudyData: InterestContent = ['GAS', 'GDG Kyoto'];
  const interestIotData: InterestContent = ['VUI', 'Google Home', 'Raspberry Pi'];

  return (
    <ActivityWrapper>
      <GeneralActivityTitle>
        <GeneralTitle generalTitle='ACTIVITY' generalSubTitle='活動' />
      </GeneralActivityTitle>
      <ActivityTitleBlog>
        <CategoryTitle icon={pen} categoryTitle='BLOG' />
      </ActivityTitleBlog>
      <ActivityBlogDate>
        2019.09.21
        <br />
        2019.09.16
        <br />
        2019.02.20
        <br />
        2019.01.01
      </ActivityBlogDate>
      <ActivityBlogContent>
        Google Developer Group ミートアップ in 京都
        <br />
        久しぶりに自転車に乗った
        <br />
        Raspberry Pi でスマートホームハブを構築：Hass.io
        <br />
        新年のご挨拶 と 新天地
      </ActivityBlogContent>
      <ActivityTitleInterest>
        <CategoryTitle icon={heart} categoryTitle='INTEREST' />
      </ActivityTitleInterest>
      <ActivityInterestBike>
        <ActivityInterestContent image={bike} interestTitle='自転車' interestContent={interestBikeData} />
      </ActivityInterestBike>
      <ActivityInterestStudy>
        <ActivityInterestContent image={study} interestTitle='勉強会' interestContent={interestStudyData} />
      </ActivityInterestStudy>
      <ActivityInterestIot>
        <ActivityInterestContent image={iot} interestTitle='IoT' interestContent={interestIotData} />
      </ActivityInterestIot>
    </ActivityWrapper>
  );
};

const ActivityWrapper = styled.div`
  height: 672px;
  width: 1200px;
`;

const GeneralActivityTitle = styled.div`
  position: absolute;
  width: 1199px;
  height: 68px;
  left: 0px;
  top: 2517px;
`;

const ActivityTitleBlog = styled.div`
  position: absolute;
  left: 31px;
  top: 2652px;
  height: 35px;
  width: 547.12px;
`;

const ActivityTitleInterest = styled.div`
  position: absolute;
  left: 617px;
  top: 2652px;
  height: 35px;
  width: 547.12px;
`;

const ActivityBlogDate = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.medium};
  color: ${props => props.theme.colors.black};
  width: 95px;
  height: 128px;
  left: 60px;
  top: 2705px;
`;

const ActivityBlogContent = styled.div`
  color: ${props => props.theme.colors.persian};
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.large};
  width: 401px;
  height: 128px;
  left: 160px;
  top: 2705px;
`;

const ActivityInterestBike = styled.div`
  position: absolute;
  width: 128px;
  height: 276px;
  left: 649px;
  top: 2705px;
`;

const ActivityInterestStudy = styled.div`
  position: absolute;
  width: 128px;
  height: 276px;
  left: 806px;
  top: 2705px;
`;

const ActivityInterestIot = styled.div`
  position: absolute;
  width: 128px;
  height: 276px;
  left: 965px;
  top: 2705px;
`;
export default ActivityHome;
