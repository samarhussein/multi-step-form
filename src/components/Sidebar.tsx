import { useMultiForm } from "../context/MultiFormContext";

export function Siderbar() {
  const { steps, currentStep } = useMultiForm();
  return (
    <aside className="m-4 p-4 bg-[url('/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover w-1/3 max-w-sm">
      <ul className="flex flex-col align-middle">
        {steps.map((step, index) => (
          <li key={index} className="text-white">
            <p key={index}>
              step- {index + 1} {step}
            </p>
            <p>
              {currentStep !== 5 && currentStep === index + 1
                ? currentStep
                : ""}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
