import { createStitches } from '@stitches/react'

export const { css, styled } = createStitches({
  media: {
    'iPadLandscape': '(max-width: 1024px)',
    'iPadPortrait': '(max-width: 768px)',
  },
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',

      'grey100': '#F5F5F5',
      'grey300': '#E0E0E0',
      'grey500': '#9E9E9E',
      'grey600': '#757575',
      'grey900': '#212121',

      'red500': '#F44336',
    },
    space: {
      'xxl': '24px',
      'xl': '18px',
      'l': '16px',
      's': '12px',
      'xs': '6px',
    },
    fontSizes: {
      'body1': '1rem',
      'body2': '0.875rem',
      'body3': '0.75rem',
    },
    fonts: {
      'mono': 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      'system': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
    fontWeights: {
      'normal': 400,
      'bold': 600,
    },
    lineHeights: {
      'body1': '1.5rem',
      'body2': '1.25rem',
      'body3': '1.125rem',
    },
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      's': '4px',
    },
    shadows: {
      'basic': '0 2px 4px rgba(0, 0, 0, 0.15)',
    },
    zIndices: {},
    transitions: {},
  },

})
