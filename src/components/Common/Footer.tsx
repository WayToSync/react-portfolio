import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <FooterContainer />;
};

const FooterContainer = styled.div`
  background: ${props => props.theme.colors.matterhorn};
  width: 1200px;
  height: 64px;
`;

export default Footer;
