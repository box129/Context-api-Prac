import { useFormContext } from "../typesAndHooks/FormTypesAndHooks";
import type { step1 } from "../typesAndHooks/FormTypesAndHooks";
const PersonalInfo = ( ) => {
    const { formData, updateFormData, nextStep } = useFormContext();

    const handleNextStep = () => {
        if (formData.name && formData.email) {
            nextStep();
        } else {
            alert('Some shi are missing!')
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const fieldName = name as keyof step1;

        updateFormData(fieldName, value);
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleNextStep();
    };

    return (
        <>
            <h3>Step 1: Personal Info</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                name={"name"}
                value={formData.name} 
                onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                name={"email"}
                value={formData.email} 
                onChange={handleChange}
                />
                <button type="submit">
                    Next
                </button>
            </form>
        </>
    );
};

export default PersonalInfo;