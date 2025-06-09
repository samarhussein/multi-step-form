import { PersonalInfo } from "./PersonalInfo";
import { PlanSelector } from "./PlanSelector";
import { AddOns } from "./AddOns";
import { Summary } from "./Summary";
import { ThankYou } from "./ThankYou";
import { useMultiForm, type MultiFormData } from "../context/MultiFormContext";
import { useForm, FormProvider } from "react-hook-form";
import { ControlButtons } from "./ControlButtons";
import { Siderbar } from "./Sidebar";

export function FormWrapper() {
  const { currentStep } = useMultiForm();
  const methods = useForm<MultiFormData>({ mode: "onTouched" });

  return (
    <FormProvider {...methods}>
      <div className="flex min-h-screen">
        <Siderbar />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex-1 px-40 pt-15 bg-white flex flex-col justify-between mb-10"
        >
          {currentStep === 1 && <PersonalInfo />}
          {currentStep === 2 && <PlanSelector />}
          {currentStep === 3 && <AddOns />}
          {currentStep === 4 && <Summary />}
          {currentStep === 5 && <ThankYou />}
          <ControlButtons />
        </form>
        {/* <pre>{JSON.stringify(methods.watch(), null, 2)}</pre> */}
      </div>
    </FormProvider>
  );
}
