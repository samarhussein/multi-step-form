import { PersonalInfo } from "./PersonalInfo";
import { PlanSelector } from "./PlanSelector";
import { AddOns } from "./AddOns";
import { Summary } from "./Summary";
import { ThankYou } from "./ThankYou";
import { useMultiForm } from "../context/MultiFormContext";
import { useForm, FormProvider } from "react-hook-form";

export function FormWrapper() {
  const methods = useForm();
  const { currentStep, handleNext, handlePrev } = useMultiForm();

  const handleOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleNext();
  };

  const goBack = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handlePrev();
  };

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Final submission:", data);
    // send to backend or context etc.
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        {currentStep === 1 && <PersonalInfo />}
        {currentStep === 2 && <PlanSelector />}
        {currentStep === 3 && <AddOns />}
        {currentStep === 4 && <Summary />}
        {currentStep === 5 && <ThankYou />}
        {currentStep > 1 && currentStep < 5 && (
          <button onClick={goBack}>Go back</button>
        )}

        {currentStep < 4 && <button onClick={handleOnClick}>Next</button>}
        {currentStep === 4 && <button type="submit">Confirm</button>}
      </form>
    </FormProvider>
  );
}
