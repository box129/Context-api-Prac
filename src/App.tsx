import { useFormContext } from './typesAndHooks/FormTypesAndHooks'
import { FormProvider } from './context/FormContext';
import PersonalInfo from './pages/step1';
import AccountInfo from './pages/step2';
import Summary from './pages/step3';

const FormStepper = () => {
  const { currentStep, formData } = useFormContext();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <AccountInfo />;
      case 3:
        return <Summary />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div style={{ border: '1px solid gray', padding: '20px' }}>
      <h2>Multi-Step Form (Step {currentStep} of 3)</h2>
      {renderStep()}
      <hr />
      <p>Global Form Data Preview:</p>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

function App() {

  return (
    <>
      <FormProvider>
        <FormStepper />
      </FormProvider>
    </>
  )
}

export default App;