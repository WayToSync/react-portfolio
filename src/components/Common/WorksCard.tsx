import styled from 'styled-components';
import chevronRight from '../../assets/common/chevron-right.svg';

type WorksImageProps = {
  imageUrl: string;
  worksTitle: string;
  worksSubTitle: string;
};

const WorksCard = ({ imageUrl, worksTitle, worksSubTitle }: WorksImageProps) => {
  return (
    <>
      <WorksWrapper>
        <img src={imageUrl} alt='Work 1' />
      </WorksWrapper>
      <WorkTitle>{worksTitle}</WorkTitle>
      <WorkContent>{worksSubTitle}</WorkContent>
      <NextChevronButton />
    </>
  );
};

const WorksWrapper = styled.div`
  width: 100%;
  height: 275px;
  margin-bottom: 24px;
`;

const WorkTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: ${props => props.theme.fonts.weight.large};
  font-size: ${props => props.theme.fonts.sizes.medium};
  color: ${props => props.theme.colors.black};
`;

const WorkContent = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.black};
`;

const NextChevronButton = styled.div`
  position: absolute;
  left: 47%;
  bottom: 7.11px;
  background-image: url(${chevronRight});
  width: 12.91px;
  height: 20.89px;
`;

export default WorksCard;
