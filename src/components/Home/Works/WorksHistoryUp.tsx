import React from 'react';
import styled from 'styled-components';
import CategoryTitle from '../../Common/CategoryTitle';
import historyIcon from '../../../assets/home/history.svg';
import WorksHistoryLine from './WorksHistoryLine';

const WorksHistoryUp = () => {
  return (
    <>
      <HistoryTitleExp>
        <CategoryTitle icon={historyIcon} categoryTitle='EXPERIENCE' />
      </HistoryTitleExp>
      <HistoryLineLeft1>
        <WorksHistoryLine />
      </HistoryLineLeft1>
      <HistoryLineLeft2>
        <WorksHistoryLine />
      </HistoryLineLeft2>
      <HistoryLineLeft3>
        <WorksHistoryLine />
      </HistoryLineLeft3>
      <HistoryWrapperExp>
        <HistoryBoldContent>
          フロントエンジニア | 2019.01-
          <br />
          ベースコネクト株式会社
        </HistoryBoldContent>
        <br />
        <HistoryBoldContent>
          ウェブデザイナー | 2008.08 - 2018.12
          <br />
          株式会社 クエステトラ
        </HistoryBoldContent>
        <HistoryNormalContent>
          SaaSワークフローシステムのサービス開発ベンチャー。
          <br />
          サービス立ち上げに参画。
          <br />
          UI/UXの改善に取り組んだ。
        </HistoryNormalContent>
        <br />
        <HistoryBoldContent>
          ウェブデザイナー | 2000.04 - 2008.10
          <br />
          株式会社 アートスタッフ
        </HistoryBoldContent>
        <HistoryNormalContent>大学などの教育関連向けに、広報サイト、システムを製作、開発。</HistoryNormalContent>
        <br />
        <HistoryBoldContent>
          デザイナー | 1994.04 - 1998.10
          <br />
          株式会社 タカオ
        </HistoryBoldContent>
        <HistoryNormalContent> 公園遊具メーカー。デザイナーとして従事。</HistoryNormalContent>
      </HistoryWrapperExp>
      <HistoryTitleEduc>
        <CategoryTitle icon={historyIcon} categoryTitle='EDUCATION' />
      </HistoryTitleEduc>
      <HistoryLineRight>
        <WorksHistoryLine />
      </HistoryLineRight>
      <HistoryWrapperEduc>
        <HistoryBoldContent>
          環境デザイン | 2008.08 - 2018.12
          <br />
          宝塚造形芸術大学・大学院
          <br />
          <br />
          インテリアデザイン | 2008.08 - 2018.12
          <br />
          宝塚造形芸術大学・デザインコース
        </HistoryBoldContent>
      </HistoryWrapperEduc>
    </>
  );
};

const HistoryTitleExp = styled.div`
  position: absolute;
  left: 31px;
  top: 1349px;
  height: 35px;
  width: 547.12px;
`;

const HistoryTitleEduc = styled.div`
  position: absolute;
  left: 617px;
  top: 1349px;
  height: 35px;
  width: 547.12px;
`;

const HistoryLineLeft1 = styled.div`
  position: absolute;
  width: 5px;
  height: 89px;
  left: 36px;
  top: 1418px;
`;

const HistoryLineLeft2 = styled.div`
  position: absolute;
  width: 5px;
  height: 159px;
  left: 36px;
  top: 1502px;
`;

const HistoryLineLeft3 = styled.div`
  position: absolute;
  width: 5px;
  height: 116px;
  left: 36px;
  top: 1656px;
`;

const HistoryWrapperExp = styled.div`
  position: absolute;
  width: 533px;
  height: 415px;
  left: 63px;
  top: 1407px;
`;

const HistoryNormalContent = styled.div`
  margin-top: 7px;
  line-height: ${props => props.theme.lineHeight.large};
`;

const HistoryBoldContent = styled.div`
  font-size: ${props => props.theme.fonts.sizes.medium};
  font-weight: ${props => props.theme.fonts.weight.large};
`;

const HistoryLineRight = styled.div`
  position: absolute;
  width: 5px;
  height: 90px;
  left: 623px;
  top: 1420px;
`;

const HistoryWrapperEduc = styled.div`
  position: absolute;
  width: 531px;
  height: 147px;
  left: 648px;
  top: 1410px;
`;

export default WorksHistoryUp;
