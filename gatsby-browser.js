/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { Provider as ProviderRedux } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import configureStore from './src/reduxStore';
import appTheme from './src/styles/appTheme';
import { ParallaxProvider } from 'react-scroll-parallax';
import './static/fonts.css'

const baseTheme = createMuiTheme();

export const wrapRootElement = ({ element }) => {
  return (
    // <ProviderRedux store={configureStore}>
    <ParallaxProvider>
      <ThemeProvider theme={appTheme}>
        {element}
      </ThemeProvider>
    </ParallaxProvider>
    // </ProviderRedux>
  );
}