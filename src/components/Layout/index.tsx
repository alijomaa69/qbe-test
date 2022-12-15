import { useState } from 'react';
import { QBEHeader } from '../../components/QBEHeader';
import { VehicleForm } from '../../components/VehicleForm';

const steps = [
  'Confirm your details',
  'Consent'
]

export function MainLayout () {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <div>
      <header>
        <QBEHeader steps={steps} activeStep={currentStep}/>
      </header>
      <main>
        <VehicleForm setNextStep={() => setCurrentStep(0)}/>
      </main>
    </div>
  );
}
