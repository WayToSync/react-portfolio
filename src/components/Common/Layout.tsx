import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyles from '../../styles/globalStyle';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
