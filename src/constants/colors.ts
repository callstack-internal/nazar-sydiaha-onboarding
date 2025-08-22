const palette = {
  white: '#F5F5F5',
  black: '#000',
  dark: '#333',
  violet: '#7837f4',
  gray: '#666',
  red: '#FF3B30',
};

export const colors = {
  background: {
    primary: palette.violet,
    secondary: palette.white,
  },
  text: {
    primary: palette.dark,
    secondary: palette.gray,
    tertiary: palette.violet,
    quaternary: palette.white,
    error: palette.red,
  },
  shadow: {
    primary: palette.black,
  },
} as const;
