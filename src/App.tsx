import Login from "./pages/login";
import { GlobalStyles } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";

const themePrimary = createTheme({
  palette: {
    primary: {
      main: "#00274e",
    },
    secondary: {
      main: "#003e63",
    },
    info: {
      main: "#fbc70c",
    },
    text: {
      primary: "#020d18",
      secondary: "#020d18",
    },
    background: {
      default: "#020d18",
    },
  },
  typography: {
    fontFamily: "monospace",
  },
});

function App() {
  return (
    <ThemeProvider theme={themePrimary}>
      <GlobalStyles
        styles={{ body: { backgroundColor: "white" } }}
      ></GlobalStyles>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
