import { Theme } from '@emotion/react';

export const dark: Theme = {
  mode: 'dark',
  palette: {
    primary: {
      main: '#3C89FF',
      sub1: '#67A4FF',
      sub2: '#1F6BDE',
      sub3: '#B7D4FF',
      bg1: 'rgba(59, 137, 255, 0.15)',
      bg2: 'rgba(59, 137, 255, 0.13)',
      bg3: 'rgba(59, 137, 255, 0.07)'
    },
    secondary: {
      red: {
        main: '#FC4F4F',
        sub1: '#FF8585',
        sub2: '#DE3838',
        sub3: '#FFC6C6',
        bg: 'rgba(252, 79, 79, 0.15)'
      },
      green: {
        main: '#4AD871',
        sub1: '#84D89C',
        sub2: '#28B14E',
        sub3: '#C0DEC9',
        bg: 'rgba(74, 216, 113, 0.15)'
      },
      yellow: {
        main: '#FFBF44',
        sub1: '#FFD687',
        sub2: '#E5AD3F',
        sub3: '#FFE9BD',
        bg: 'rgba(255, 191, 68, 0.15)'
      }
    },
    text: {
      light: {
        main: '#232A3D',
        text1: 'rgba(35, 42, 61, 0.7)',
        text2: 'rgba(35, 42, 61, 0.5)',
        text3: 'rgba(35, 42, 61, 0.3)'
      },
      dark: {
        main: '#EEF3FF',
        text1: 'rgba(238, 243, 255, 0.7)',
        text2: 'rgba(238, 243, 255, 0.5)',
        text3: 'rgba(238, 243, 255, 0.3)'
      }
    },
    box: {
      filled: {
        normal: 'rgba(238, 243, 255, 0.08)',
        focused: 'rgba(238, 243, 255, 0.04)',
        pressed: 'rgba(238, 243, 255, 0.11)',
        disabled: 'rgba(204, 218, 255, 0.03)'
      },
      stroked: {
        normal: 'rgba(238, 243, 255, 0.15)'
      }
    },
    background: {
      bg: '#1D1F27',
      fg1: '#282B33',
      fg2: '#343740'
    },
    gradation: {
      first: '#63DAFF',
      second: '#4891FF',
      third: '#717EFF'
    },
    common: {
      white: '#FFFFFF',
      black: '#000000'
    },
    others: {
      visited: '#95B7E9'
    }
  },
  breakpoints: {
    xs: 0,
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1440
  },
  typography: {
    h1: {
      component: 'h1',
      size: '24px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: '32px',
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    h2: {
      component: 'h2',
      size: '22px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: '30px',
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    h3: {
      component: 'h3',
      size: '18px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: '24px',
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    h4: {
      component: 'h4',
      size: '15px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: '20px',
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    p1: {
      component: 'div',
      size: '15px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: '20px',
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    p2: {
      component: 'div',
      size: '14px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: '18px',
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    s1: {
      component: 'span',
      size: '12px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: '16px',
        main: 1.75
      },
      letterSpacing: '-0.04em'
    },
    s2: {
      component: 'span',
      size: '10.5px',
      weight: {
        bold: 700,
        medium: 500,
        regular: 400
      },
      lineHeight: {
        default: '14px',
        main: 1.75
      },
      letterSpacing: '-0.04em'
    }
  },
  zIndex: {
    header: 10,
    bottomNavigation: 10,
    dialog: 22,
    bottomSheet: 21,
    backdrop: 22,
    tooltip: 23,
    overlay: 20
  }
};
