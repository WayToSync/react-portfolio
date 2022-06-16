import styled from 'styled-components';

type ActivityInterestProps = {
  image: string;
  interestTitle: string;
  interestContent: string[];
};

const ActivityInterestContent = ({ image, interestTitle, interestContent }: ActivityInterestProps) => {
  return (
    <>
      <ActivityInterestImage>
        <img src={image} alt='Image Interest' />
      </ActivityInterestImage>
      <ActivityInterestContentUp>{interestTitle}</ActivityInterestContentUp>
      <ActivityInterestContentDown>
        {interestContent.map((content, index) => {
          return <div key={index}>{content}</div>;
        })}
      </ActivityInterestContentDown>
    </>
  );
};

const ActivityInterestImage = styled.div`
  width: 128px;
  height: 128px;
`;

const ActivityInterestContentUp = styled.div`
  font-weight: ${props => props.theme.fonts.weight.large};
  font-size: ${props => props.theme.fonts.sizes.medium};
  color: ${props => props.theme.colors.black};
  margin-top: 20px;
  text-align: center;
`;

const ActivityInterestContentDown = styled.div`
  color: ${props => props.theme.colors.black};
  line-height: ${props => props.theme.lineHeight.large};
  text-align: center;
`;

export default ActivityInterestContent;
