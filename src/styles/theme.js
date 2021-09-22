const breakpoints = {
  tablet: '461px',
  desktop: '1024px'
};

export const theme = {
  colors: {
    primary: '#073B4C',
    primaryLight: '#cdeffa',
    primaryDark: '#063140',
    lightGrey: '#F0F0F0',
    grey: '#ABABAB',
    darkGrey: '#3D3D3D',
    white: '#fff',
  },
  device: {
    tablet: `(min-width: ${breakpoints.tablet})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
    touchable: `(hover)`,
  },
};
