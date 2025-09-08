import { useMultiForm } from "../context/MultiFormContext";

export function Siderbar() {
  const { steps, currentStep } = useMultiForm();

  return (
    <aside className="sidebar">
      <ul>
        {steps.map((step, index) => (
          <li className="step-list-item" key={index}>
            <span
              className={`${
                currentStep !== 5 && currentStep === index + 1
                  ? "filled"
                  : "outlined"
              }`}
            >
              {index + 1}
            </span>
            <div className="step-description">
              <p className="step-description__number">{`STEP ${index + 1}`}</p>
              <p className="step-description__title">{step}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
