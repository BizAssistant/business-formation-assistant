import React, { useState, useEffect } from 'react';
import './styles/base.scss';
import './styles/components.scss';

// Import all step components
import ConceptStep from './components/ConceptStep';
import EntityStep from './components/EntityStep';
import RegistrationStep from './components/RegistrationStep';
import MarketingStep from './components/MarketingStep';
import FinanceStep from './components/FinanceStep';
import WebsiteStep from './components/WebsiteStep';

const steps = [
  { id: 0, name: 'Concept', component: ConceptStep },
  { id: 1, name: 'Entity', component: EntityStep },
  { id: 2, name: 'Registration', component: RegistrationStep },
  { id: 3, name: 'Marketing', component: MarketingStep },
  { id: 4, name: 'Finance', component: FinanceStep },
  { id: 5, name: 'Website', component: WebsiteStep }
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [businessData, setBusinessData] = useState({
    concept: {},
    entity: {},
    registration: {},
    marketing: {},
    finance: {},
    website: {}
  });

  const updateBusinessData = (step, data) => {
    setBusinessData(prev => ({
      ...prev,
      [step]: { ...prev[step], ...data }
    }));
  };

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const downloadReport = () => {
    const report = `BUSINESS FORMATION PLAN

Generated: ${new Date().toLocaleDateString()}

=== BUSINESS CONCEPT ===
Name: ${businessData.concept.name || 'N/A'}
Industry: ${businessData.concept.industry || 'N/A'}
Description: ${businessData.concept.description || 'N/A'}
Target Market: ${businessData.concept.target || 'N/A'}

=== ENTITY SELECTION ===
Type: ${businessData.entity.type || 'N/A'}
State: ${businessData.entity.state || 'N/A'}

=== REGISTRATION ===
${businessData.registration.notes || 'No notes yet'}

=== MARKETING STRATEGY ===
Value Proposition: ${businessData.marketing.uvp || 'N/A'}
Budget: $${businessData.marketing.budget || '0'}/month
90-Day Plan: ${businessData.marketing.plan90 || 'N/A'}

=== FINANCIAL SETUP ===
Startup Costs: $${businessData.finance.startupCosts || '0'}
Funding Source: ${businessData.finance.fundingSource || 'N/A'}
Pricing Strategy: ${businessData.finance.pricing || 'N/A'}

=== WEBSITE & HOSTING ===
Domain: ${businessData.website.domain || 'N/A'}
Platform: ${businessData.website.platform || 'N/A'}
Hosting: ${businessData.website.hosting || 'N/A'}
`;
    const blob = new Blob([report], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "business-formation-plan.txt";
    a.click();
  };

  const renderStep = () => {
    const StepComponent = steps[currentStep].component;
    return (
      <StepComponent
        businessData={businessData}
        updateBusinessData={updateBusinessData}
        nextStep={goToNextStep}
        prevStep={goToPreviousStep}
        downloadReport={downloadReport}
      />
    );
  };

  return (
    <div className="min-h-screen bg-hunter flex flex-col">
      <header className="p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-emerald-glow">BizForm</h1>
        <div className="flex space-x-2">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                currentStep === step.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-600 text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </header>
      <main className="flex-1 p-4">
        {renderStep()}
      </main>
    </div>
  );
};

export default App;
