import { type ThemeOptions } from "@mui/material/styles";

const typography: ThemeOptions["typography"] = {
  fontFamily: '"Georgia", serif',
  h1: {
    fontSize: "2.5rem"
  },
  h2: {
    fontSize: "1.5rem"
  },
  body1: { 
    fontSize: "1rem" 
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

