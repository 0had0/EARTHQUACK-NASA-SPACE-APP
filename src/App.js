import { useRoutes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import routes from "./router/router";
import {deepPurple} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: deepPurple[100] },
  },
});
function App() {
  const content = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {content}
    </ThemeProvider>
  );
}

export default App;
