import { useState, type ReactNode } from "react";
import type { FormData, FormContextType } from "../typesAndHooks/FormTypesAndHooks";
import { FormContext } from "../typesAndHooks/FormTypesAndHooks";

const INITIAL_DATA: FormData = {
    name: "",
    email: "",
    username: "",
    password: "",
    isComplete: false,
};


// 4. Create Provider Component
interface FormProviderProps {
    children: ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
    const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
    const [currentStep, setCurrentStep] = useState(1);
    const MAX_STEP = 3;

    const updateFormData = <K extends keyof FormData>(field: K, value: FormData[K]) => {
        setFormData( prevData => ({
            ...prevData,
            [field]: value,
        }));
    };

    const nextStep = () => {
        setCurrentStep( prev => (prev < MAX_STEP ? prev + 1 : prev));
    };

    const prevStep = () => {
        setCurrentStep( prev => (prev > 1 ? prev -1 : prev));
    };

    const contextValue: FormContextType = {
        currentStep,
        formData,
        nextStep,
        prevStep,
        updateFormData,
    };

    return (
        <FormContext.Provider value={contextValue}>
            { children }
        </FormContext.Provider>
    );
};