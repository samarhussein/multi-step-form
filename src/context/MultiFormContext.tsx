import { createContext, useContext, useState, type ReactNode } from "react";

export type MultiFormData = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  selectedPlan: {
    plan: "arcade" | "advanced" | "pro";
    option: "montly" | "yearly";
  };
  addOns: {
    experience?: "online-service" | "larger-storage" | "customizable-profile";
  };
};

type MultiFormContextProps = {
  formData: MultiFormData;
  setFormData: (data: Partial<MultiFormData>) => void;
  currentStep: number;
  handleNext: () => void;
  handlePrev: () => void;
  defaultValues: MultiFormData;
  maxSteps: number;
  steps: string[];
};

const MultiFormContext = createContext({} as MultiFormContextProps);

export const useMultiForm = () => {
  const context = useContext(MultiFormContext);
  if (!context)
    throw new Error("useFormContext must be used within FormProvider");
  return context;
};

const defaultValues: MultiFormData = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  selectedPlan: {
    plan: "arcade",
    option: "montly",
  },
  addOns: {},
};

type MultiFormProviderProps = {
  children: ReactNode;
};

export const MultiFormProvider = ({ children }: MultiFormProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormDataState] = useState<MultiFormData>(defaultValues);

  const steps = [
    "personalinfo",
    "planselector",
    "addons",
    "summary",
    "thankyou",
  ];
  const MAX_STEPS = 5;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
      setFormData({ ...formData });
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const setFormData = (data: Partial<MultiFormData>) =>
    setFormDataState((prev) => ({ ...prev, ...data }));

  return (
    <MultiFormContext.Provider
      value={{
        formData,
        setFormData,
        currentStep,
        handleNext,
        handlePrev,
        defaultValues,
        maxSteps: MAX_STEPS,
        steps,
      }}
    >
      {children}
    </MultiFormContext.Provider>
  );
};
