import { createContext, useContext, useState, type ReactNode } from "react";

type FormData = {
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
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  currentStep: number;
  handleNext: () => void;
  handlePrev: () => void;
};

const MultiFormContext = createContext({} as MultiFormContextProps);

export const useMultiForm = () => {
  const context = useContext(MultiFormContext);
  if (!context)
    throw new Error("useFormContext must be used within FormProvider");
  return context;
};

const defaultValues: FormData = {
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
  const [formData, setFormDataState] = useState<FormData>(defaultValues);

  const steps = [
    "personalinfo",
    "planselector",
    "addons",
    "summary",
    "thankyou",
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
    if (currentStep === 4) console.log({ formData });
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const setFormData = (data: Partial<FormData>) =>
    setFormDataState((prev) => ({ ...prev, ...data }));

  return (
    <MultiFormContext.Provider
      value={{ formData, setFormData, currentStep, handleNext, handlePrev }}
    >
      {children}
    </MultiFormContext.Provider>
  );
};
