import { ThemeProvider, CssBaseline } from "@mui/material";
import { MultiStepForm } from "./components/MultiStepForm";
import { getTheme, useColorMode } from "./theme/theme";
import "./index.css";

export const App = () => {
  const mode = useColorMode()
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div
        className={`app-container ${mode}`}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          height: "100%",
          paddingBlock: "2.5rem",
        }}
      >
        <MultiStepForm />
      </div>
    </ThemeProvider>
  );
};
