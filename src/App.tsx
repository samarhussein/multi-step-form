import { MultiFormProvider } from "./context/MultiFormContext";
import { FormWrapper } from "./components/FormWrapper";

function App() {
  return (
    <MultiFormProvider>
      <FormWrapper />
    </MultiFormProvider>
  );
}

export default App;
