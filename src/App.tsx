import { MultiFormProvider } from "./context/MultiFormContext";
import { FormWrapper } from "./components/FormWrapper";
import { FormSteps } from "./components/FormSteps";

function App() {
  return (
    <MultiFormProvider>
      <FormWrapper />
      <FormSteps />
    </MultiFormProvider>
  );
}

export default App;
