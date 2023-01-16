import "./App.css";
import MuiButtons from "./components/MuiButtons";
import MuiSelect from "./components/MuiSelect";
import MuiTextField from "./components/MuiTextField";
import MuiTypography from "./components/MuiTypography";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButtons />
      <MuiTextField />
      <MuiSelect />
    </div>
  );
}

export default App;
