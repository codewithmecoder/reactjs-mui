import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Add, Feed, Navbar, Rightbar, Sidebar } from "./components";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode as PaletteMode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
