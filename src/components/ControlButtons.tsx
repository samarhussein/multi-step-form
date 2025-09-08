import { useFormContext } from "react-hook-form";
import { type MultiFormData, useMultiForm } from "../context/MultiFormContext";
import { Button } from "./UI/Button";

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
    <footer className="form-footer">
      {currentStep > 1 && (
        <Button
          type="button"
          onClick={handlePrev}
          variant="secondary"
          title="Go back"
        ></Button>
      )}

      {currentStep === 4 ? (
        <Button
          disabled={!isValid}
          type="button"
          onClick={handleConfirm}
          title="Confirm"
        ></Button>
      ) : (
        <Button
          title="Next step"
          disabled={!isValid}
          type="button"
          onClick={handleNext}
        ></Button>
      )}
    </footer>
  );
}
