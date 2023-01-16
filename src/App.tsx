import "./App.css";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiButtons from "./components/MuiButtons";
import MuiCard from "./components/MuiCard";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiLayouts from "./components/MuiLayouts";
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
      <MuiAutoComplete />
      <MuiLayouts />
      <MuiCard />
    </div>
  );
}

export default App;
