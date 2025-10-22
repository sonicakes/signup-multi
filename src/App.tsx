import { ThemeProvider, CssBaseline } from "@mui/material";
import { MultiStepForm } from "./components/MultiStepForm";
import { getTheme } from "./theme/theme";
import "./index.css";

export const App = () => {
  // const mode = useColorMode();TODO
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
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <MultiStepForm />
      </div>
    </ThemeProvider>
  );
};
