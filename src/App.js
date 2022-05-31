import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Addbtn from "./components/Addbtn";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [mode, setMode] = useState("light");
  const darkThem = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkThem}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar></Navbar>
        <Stack direction="row" gap={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Addbtn></Addbtn>
      </Box>
    </ThemeProvider>
  );
}

export default App;
