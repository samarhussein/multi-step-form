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
    <>
      {currentStep > 1 && (
        <button type="button" onClick={handlePrev}>
          Go back
        </button>
      )}

      {currentStep === 4 ? (
        <button disabled={!isValid} type="button" onClick={handleConfirm}>
          Confirm
        </button>
      ) : (
        <button disabled={!isValid} type="button" onClick={handleNext}>
          Next step
        </button>
      )}
    </>
  );
}
