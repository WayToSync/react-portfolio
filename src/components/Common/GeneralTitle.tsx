import styled from 'styled-components';

type GeneralTitleProps = {
  generalTitle: string;
  generalSubTitle: string;
};

const GeneralTitle = ({ generalTitle, generalSubTitle }: GeneralTitleProps) => {
  return (
    <>
      <WorksTitle>{generalTitle}</WorksTitle>
      <WorksSubTitle>{generalSubTitle}</WorksSubTitle>
    </>
  );
};

const WorksTitle = styled.div`
  position: absolute;
  font-size: ${props => props.theme.fonts.sizes.extra};
  font-weight: ${props => props.theme.fonts.weight.large};
  width: 100%;
  height: 28px;
  text-align: center;
`;

const WorksSubTitle = styled.div`
  position: absolute;
  font-size: ${props => props.theme.fonts.sizes.medium};
  font-weight: ${props => props.theme.fonts.weight.medium};
  width: 100%;
  height: 26px;
  top: 42px;
  text-align: center;
`;

export default GeneralTitle;
