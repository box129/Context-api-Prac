import { useFormContext } from "../typesAndHooks/FormTypesAndHooks";
import type { step2 } from "../typesAndHooks/FormTypesAndHooks";
const AccountInfo = () => {
    const { formData, updateFormData, nextStep, prevStep } = useFormContext();

    const handleNextStep = () => {
        if (formData.name && formData.email) {
            nextStep();
        } else {
            alert('Some shi are missing!')
        }
    };

    const handlePrevStep = () => {
        prevStep();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const fieldName = name as keyof step2;
        updateFormData(fieldName, value);
        updateFormData("isComplete", true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleNextStep();
    };


    return (
        <>
            <h3>Step 1: Account Info</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                name={"username"}
                value={formData.username} 
                onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                name={"password"}
                value={formData.password} 
                onChange={handleChange}
                />
                <button type="button" onClick={handlePrevStep}>
                    Back
                </button>
                <button type="submit">
                    Next
                </button>
            </form>
        </>
    );
};

export default AccountInfo;