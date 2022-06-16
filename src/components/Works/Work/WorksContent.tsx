import styled from 'styled-components';
import GeneralTitle from '../../Common/GeneralTitle';
import CategoryTitle from '../../Common/CategoryTitle';
import contentLeft from '../../../assets/works/content-left.png';
import contentRight from '../../../assets/works/content-right.png';

const WorksContent = () => {
  return (
    <WorksContentUpper>
      <GeneralWorksContentTitle>
        <GeneralTitle generalTitle='Works' generalSubTitle='制作実績など' />
      </GeneralWorksContentTitle>
      <WorksLeftContent />
      <WorksRightContent />
      <WorksTitleUp>
        <CategoryTitle icon={''} categoryTitle='Musubu LP' />
      </WorksTitleUp>
      <WorksContentUp>
        説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明
        <br />
        ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダ
        <br />
        ミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミー
        <br />
        テキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキ
        <br />
        スト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト
        <br />
        説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明
        <br />
        ダミーテキスト。
      </WorksContentUp>
      <WorksTitleDown>
        <CategoryTitle icon={''} categoryTitle='担当' />
      </WorksTitleDown>
      <WorksContentDown>
        説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明
        <br />
        ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダ
        <br />
        ミーテキスト説明ダミーテキスト説明ダミーテキスト説明ダミー
        <br />
        テキスト説明ダミーテキスト説明ダミーテキスト説明ダミーテキ
        <br />
        スト説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト
        <br />
        説明ダミーテキスト説明ダミーテキスト説明ダミーテキスト説明
        <br />
        ダミーテキスト。
      </WorksContentDown>
    </WorksContentUpper>
  );
};

const WorksContentUpper = styled.div`
  height: 1284px;
  width: 1200px;
`;

const GeneralWorksContentTitle = styled.div`
  position: absolute;
  width: 866px;
  height: 68px;
  left: 167px;
  top: 187px;
`;

const WorksLeftContent = styled.div`
  position: absolute;
  width: 420px;
  height: 900px;
  left: 30px;
  top: 330px;
  background-image: url(${contentLeft});
`;

const WorksRightContent = styled.div`
  position: absolute;
  width: 260px;
  height: 900px;
  left: 470px;
  top: 330px;
  background-image: url(${contentRight});
`;

const WorksTitleUp = styled.div`
  position: absolute;
  left: 727px;
  top: 322px;
  height: 35px;
  width: 547.12px;
`;

const WorksContentUp = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.medium};
  line-height: ${props => props.theme.lineHeight.large};
  width: 410px;
  height: 147px;
  left: 759px;
  top: 383px;
`;

const WorksTitleDown = styled.div`
  position: absolute;
  left: 727px;
  top: 639px;
  height: 35px;
  width: 547.12px;
`;

const WorksContentDown = styled.div`
  position: absolute;
  font-weight: ${props => props.theme.fonts.weight.medium};
  line-height: ${props => props.theme.lineHeight.large};
  width: 410px;
  height: 147px;
  left: 759px;
  top: 702px;
`;

export default WorksContent;
