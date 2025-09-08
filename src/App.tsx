import { MultiFormProvider } from "./context/MultiFormContext";
import { FormWrapper } from "./components/FormWrapper";
import "./styles/main.scss";

function App() {
  return (
    <MultiFormProvider>
      <FormWrapper />
    </MultiFormProvider>
  );
}

export default App;
