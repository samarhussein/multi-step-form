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
    <footer className="flex justify-between">
      {currentStep > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          className="px-4 py-2 text-gray-700 cursor-pointer"
        >
          Go back
        </button>
      )}

      {currentStep === 4 ? (
        <button
          disabled={!isValid}
          type="button"
          onClick={handleConfirm}
          className="px-4 py-2 bg-blue-900 text-white border rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
        >
          Confirm
        </button>
      ) : (
        <button
          disabled={!isValid}
          type="button"
          onClick={handleNext}
          className="px-4 py-2 bg-blue-900 text-white border rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer  float-end"
        >
          Next step
        </button>
      )}
    </footer>
  );
}
