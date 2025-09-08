import { useFormContext } from "react-hook-form";
import { type MultiFormData, useMultiForm } from "../context/MultiFormContext";

export function ControlButtons() {
  const { currentStep, handleNext, handlePrev } = useMultiForm();
  const {
    formState: { isValid },
    handleSubmit,
  } = useFormContext<MultiFormData>();

  const onSubmit = (data: MultiFormData) => {
    console.log("Final submission:", data);
    handleNext();
  };

  const handleConfirm = handleSubmit(onSubmit);

  if (currentStep > 4) return undefined;
  return (
    <footer className="">
      {currentStep > 1 && (
        <button type="button" onClick={handlePrev} className="">
          Go back
        </button>
      )}

      {currentStep === 4 ? (
        <button
          disabled={!isValid}
          type="button"
          onClick={handleConfirm}
          className=""
        >
          Confirm
        </button>
      ) : (
        <button
          disabled={!isValid}
          type="button"
          onClick={handleNext}
          className=""
        >
          Next step
        </button>
      )}
    </footer>
  );
}
