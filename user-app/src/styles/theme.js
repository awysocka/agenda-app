const breakpoints = {
  tablet: '461px',
};

export const theme = {
  colors: {
    primary: '#073B4C',
    primaryLight: '#cdeffa',
    lightGrey: '#F0F0F0',
    grey: '#999999',
    darkGrey: '#3D3D3D',
    white: '#fff',
  },
  device: {
    tablet: `(min-width: ${breakpoints.tablet})`,
    touchable: `(hover)`,
  },
};
