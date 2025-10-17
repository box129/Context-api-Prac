import { createContext, useContext } from "react";

// 1. Define typess
export interface step1 {
    name: string;
    email: string;
};

export interface step2 {
    username: string;
    password: string;
};

export interface step3 {
    isComplete: boolean;
};

export type FormData = step1 & step2 & step3;

// Context Type:
export interface FormContextType {
    currentStep: number;
    formData: FormData;
    nextStep: () => void;
    prevStep: () => void;
    updateFormData: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
};

// 2. Create Context
export const FormContext = createContext<FormContextType | null>(null);

// 3. Create Custom Hook
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
};