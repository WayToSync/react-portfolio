import React from 'react';
import styled from 'styled-components';
import header from '../../../assets/home/header.png';
import profile from '../../../assets/home/profile.png';

const HeaderHome = () => {
  return (
    <HeaderWrapper>
      <Overview>
        <Picture />
        <FullName>Guillaume MORVAN</FullName>
        <Job>Front End Engineer</Job>
      </Overview>
      <Presentation>
        デザイン、コーディング、UI/UXなど、WEB周辺の業務に20年。コーディング大好き。
        <br />
        現在、サービスベンダー・ベンチャーにて、自立分散協調型のデザインチームと、デザイン文化醸成にチャレンジ中。
      </Presentation>
      <Line />
      <KatakanaName>モルバン ギヨーン</KatakanaName>
      <InfoLeft>
        性別
        <br />
        生年月日
        <br />
        現住所
      </InfoLeft>
      <InfoRight>
        男性
        <br />
        1989年11月13日
        <br />
        大阪市
      </InfoRight>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  height: 430px;
  width: 1200px;
  left: 0px;
  top: 0px;
  mix-blend-mode: multiply;
  background-image: url(${header});
`;

const Overview = styled.div`
  position: absolute;
  left: 93px;
  top: 74px;
  width: 275px;
  height: 276px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const Picture = styled.div`
  margin: 30px auto;
  width: 128px;
  height: 128px;
  border-radius: ${props => props.theme.borderRadius};
  background-image: url(${profile});
`;

const FullName = styled.div`
  width: 100%;
  height: 26px;
  text-align: center;
  font-size: ${props => props.theme.fonts.sizes.large};
`;

const Job = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 26px;
  line-height: ${props => props.theme.lineHeight.small};
  text-align: center;
`;

const Presentation = styled.div`
  position: absolute;
  left: 441px;
  top: 74px;
  width: 612px;
  height: 86px;
  text-align: left;
`;

const Line = styled.div`
  z-index: -1;
  position: absolute;
  width: 960px;
  height: 0px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  transform: rotate(0deg);
  left: 93px;
  top: 169px;
`;

const KatakanaName = styled.div`
  position: absolute;
  font-size: ${props => props.theme.fonts.sizes.small};
  line-height: ${props => props.theme.lineHeight.medium};
  font-weight: ${props => props.theme.fonts.weight.medium};
  width: 611px;
  height: 25px;
  left: 441px;
  top: 189px;
  text-align: left;
`;

const InfoLeft = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.large};
  width: 147px;
  height: 126px;
  left: 442px;
  top: 224px;
  text-align: left;
`;

const InfoRight = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.medium};
  width: 569px;
  height: 126px;
  left: 609px;
  top: 224px;
  text-align: left;
`;

export default HeaderHome;
