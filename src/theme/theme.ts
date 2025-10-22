import { createTheme, type ThemeOptions } from "@mui/material/styles";

const typography: ThemeOptions["typography"] = {
  fontFamily: '"Georgia", serif',
  h1: {
    fontSize: "2.5rem",
  },
  h2: {
    fontSize: "1.5rem",
  },
  body1: {
    fontSize: "1rem",
  },
};

const components: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: "none",
        fontWeight: "bold",
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      // overriding the default auto-fill - blue bg with our custom ones, making it dependent on the dark/light user preferred device theme
      root: ({ theme }) => ({
        "& input:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 1000px ${
            theme.palette.mode === "dark"
              ? theme.palette.grey[900]
              : theme.palette.grey[50]
          } inset`,

          WebkitTextFillColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],

          transition: "background-color 5000s ease-in-out 0s",
        },
        "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root": {
          "&:-webkit-autofill": {
            WebkitTextFillColor:
              theme.palette.mode === "dark"
                ? theme.palette.secondary.main
                : theme.palette.primary.main,
          },
        },
      }),
      input: {
        letterSpacing: "0.05rem",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        letterSpacing: "0.05rem",
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        letterSpacing: "0.05rem",
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      fullWidth: true,
    },
  },
};

const primaryColor = {
  main: "#FF781F",
  light: "#FFA552",
  dark: "#C84D00",
  contrastText: "#000000",
};

const secondaryColor = {
  main: "#39A300",
  light: "#60C32D",
  dark: "#0C7300",
  contrastText: "#FFFFFF",
};

const lightPalette: ThemeOptions["palette"] = {
  mode: "light",
  primary: primaryColor,
  secondary: secondaryColor,
  background: {
    default: "#FCF2E1",
    paper: "#FFFFFF",
  },
  text: {
    primary: "#0D0D0D",
    secondary: "#4A4A4A",
  },
};

const darkPalette: ThemeOptions["palette"] = {
  mode: "dark",
  primary: primaryColor,
  secondary: secondaryColor,
  background: {
    default: "#0D0D0D",
    paper: "#1F1F1F",
  },
  text: {
    primary: "#F0F0F0",
    secondary: "#B0B0B0",
  },
};

export const getTheme = (mode: "light" | "dark") => {
  const palette = mode === "dark" ? darkPalette : lightPalette;

  return createTheme({
    palette: palette,
    typography: typography,
    components: components,
    transitions: {
      duration: {
        enteringScreen: 500,
        leavingScreen: 500,
      },
    },
  });
};
