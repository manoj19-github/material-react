import "./App.css";
import MuiButtons from "./components/MuiButtons";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiRadio from "./components/MuiRadio";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import MuiTextField from "./components/MuiTextField";
import MuiTypography from "./components/MuiTypography";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButtons />
      <MuiTextField />
      <MuiSelect />
      <MuiRadio />
      <MuiCheckbox />
      <MuiSwitch />
      <MuiRating />
    </div>
  );
}

export default App;
