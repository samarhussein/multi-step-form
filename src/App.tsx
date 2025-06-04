import { useState } from "react";
import { PersonalInfo } from "./components/PersonalInfo";
import { PlanSelector } from "./components/PlanSelector";
import { AddOns } from "./components/AddOns";
import { Summary } from "./components/Summary";
import { ThankYou } from "./components/ThankYou";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["personalinfo", "plan selector", "add-ons", "summary"];

  const handleOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goBack = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <form>
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <PlanSelector />}
      {currentStep === 3 && <AddOns />}
      {currentStep === 4 && <Summary />}
      {currentStep === 5 && <ThankYou />}
      {currentStep > 1 && <button onClick={goBack}>Go back</button>}

      <button onClick={handleOnClick}>
        {currentStep < 4 ? "Next" : "Confirm"}
      </button>
    </form>
  );
}

export default App;
