import Login from "./pages/login";
import { GlobalStyles} from "@mui/material"
import { createTheme, ThemeProvider} from '@mui/material/styles';
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
      secondary: "#020d18"
    },
    background:{
      default:  "#020d18",
    }
  }

});

function App() {

  return (
    <ThemeProvider theme={themePrimary} >
    <GlobalStyles styles={{body:{backgroundColor:"#88a0c8"}}}></GlobalStyles>
      <Login></Login>
    </ThemeProvider>

  )
}

export default App
