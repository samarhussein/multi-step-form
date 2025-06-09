import { useMultiForm } from "../context/MultiFormContext";

export function FormSteps() {
  const { steps, currentStep } = useMultiForm();
  return (
    <aside>
      {steps.map((step, index) => (
        <p key={index}>
          {index + 1} {step}
          <span>
            {currentStep !== 5 && currentStep === index + 1 ? currentStep : ""}
          </span>
        </p>
      ))}
    </aside>
  );
}
