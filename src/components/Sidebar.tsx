import { useMultiForm } from "../context/MultiFormContext";

export function Siderbar() {
  const { steps, currentStep } = useMultiForm();

  return (
    <aside className="m-4 p-4 bg-[url('/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover w-1/3 max-w-sm">
      <ul className="flex flex-col gap-5 px-5 py-8">
        {steps.map((step, index) => (
          <li key={index} className="text-white flex gap-3">
            <p
              className={`border-1 w-8 h-8 rounded-full mx-2 px-2 py-1.5 ${
                currentStep !== 5 && currentStep === index + 1
                  ? "bg-blue-100 text-blue-900"
                  : ""
              }`}
            >
              {index + 1}
            </p>
            <div>
              <p className="text-gray-400">{`STEP ${index + 1}`}</p>
              <p>{step}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
