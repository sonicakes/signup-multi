import { createTheme, responsiveFontSizes, type ThemeOptions } from "@mui/material/styles";
import { useEffect, useState } from "react";

const typography: ThemeOptions["typography"] = {
  fontFamily: '"Merriweather", serif',
  h1: {
    fontSize: "2.5rem",
    fontFamily: "Barrio"
  },
  h2: {
    fontSize: "1.25rem",
    fontWeight: '600',
    letterSpacing: '0.02rem'
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

const lightPalettePrimary = { //defining darker main color for light palette to meet AA & AAA standards- against #fff white paper
  main: "#7A3A00",
  light: "#946132",
  dark: "#692700",
  contrastText: "#FFFFFF",
};

const darkPalettePrimary = { //same here, going lighter to meet AAA on dark grey paper bg 
  main: "#FFA566",
  light: "#FFDEC1",
  dark: "#FF781F",
  contrastText: "#000000",
};

const lightPaletteSecondary = {
  main: "#0F6600",
  light: "#3e8432",
  dark: "#0a4700",
  contrastText: "#FFFFFF",
};

const darkPaletteSecondary = {
  main: "#55C70D",
  light: "#88d755",
  dark: "#449F0A",
  contrastText: "#000000",
};

//NOTE: only using .main for primary & secondary colors in the app so far - they have been checked here https://webaim.org/resources/contrastchecker/
//.light, .dark varieties have not been tested yet, so here as a placeholder for further development
//primary txt, secondary txt used in the input - also checked for compliance

const lightPalette: ThemeOptions["palette"] = {
  mode: "light",
  primary: lightPalettePrimary,
  secondary: lightPaletteSecondary,
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
  primary: darkPalettePrimary,
  secondary: darkPaletteSecondary,
  background: {
    default: "#0D0D0D",
    paper: "#1F1F1F",
  },
  text: {
    primary: "#F0F0F0",
    secondary: "#B0B0B0",
  },
};

const getInitialMode = (): "light" | "dark" => {
  if (typeof window !== "undefined" && window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery && typeof mediaQuery.matches === "boolean") {
      return mediaQuery.matches ? "dark" : "light";
    }
  }
  return "light";
};

export const useColorMode = () => {
  //Init state using the sync getInitialMode func
  const [mode, setMode] = useState<"light" | "dark">(getInitialMode);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (event: MediaQueryListEvent) => {
      setMode(event.matches ? "dark" : "light");
    };

    mediaQueryList.addEventListener("change", handler);

    return () => mediaQueryList.removeEventListener("change", handler);
  }, []);

  return mode;
};

export const getTheme = (mode: "light" | "dark") => {
   const palette = mode === "dark" ? darkPalette : lightPalette;

  let theme = createTheme({
    palette,
    typography,
    components,
    transitions: {
      duration: {
        enteringScreen: 500,
        leavingScreen: 500,
      },
    },
  });

  //responsive typography scaling - auto
  theme = responsiveFontSizes(theme, {
    breakpoints: ["sm", "md", "lg"], //which breakpoints to scale across
  });

  return theme;
};
