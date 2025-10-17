import { useFormContext } from "../typesAndHooks/FormTypesAndHooks";
// import type { step3 } from "../context/FormContext";
const Summary = () => {
    const { formData, prevStep } = useFormContext();

    const handlePrevStep = () => {
        prevStep();
    };

    return (
        <>
            <form >
                <h1>Summary</h1>
                <pre>{JSON.stringify(formData, null, 2)}</pre>

                <button type="button" onClick={handlePrevStep}>
                    Back
                </button>
                <button type="submit">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Summary;