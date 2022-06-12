import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <FooterContent />;
};

const FooterContent = styled.div`
  background: ${props => props.theme.colors.matterhorn};
  width: 100%;
  height: 64px;
`;

export default Footer;
