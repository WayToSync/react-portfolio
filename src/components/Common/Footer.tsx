import styled from 'styled-components';
import chevronTop from '../../assets/common/chevron-top.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterContainer>
      <ReturnTopButton onClick={scrollToTop}>
        <ChevronTopIcon />
      </ReturnTopButton>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background: ${props => props.theme.colors.matterhorn};
  width: 1200px;
  height: 64px;
`;

const ReturnTopButton = styled.div`
  position: relative;
  left: 1083px;
  top: -32px;
  background-color: ${props => props.theme.colors.persian};
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ChevronTopIcon = styled.div`
  background-image: url(${chevronTop});
  width: 27.88px;
  height: 18.8px;
`;

export default Footer;
