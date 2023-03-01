import "./App.css";
import Form3 from "./components/Form3.tsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Form3/>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
