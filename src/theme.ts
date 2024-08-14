const colors = {
  primary: "#402039",
  secondary: "#9B287B",
  light: "#F5F5F5",
} as const;

const spacing = {
  small: 8,
  medium: 16,
  large: 24,
} as const;

const fonts = {
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
  p: {
    fontSize: 16,
    fontWeight: "normal",
    color: colors.secondary,
  },
} as const;

const shadows = {
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
} as const;

export const theme = {
  colors,
  spacing,
  fonts,
  shadows,
} as const;
