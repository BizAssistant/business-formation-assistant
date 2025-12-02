import React, { useState, useEffect } from 'react';
import ConceptStep from './components/ConceptStep';
import EntityStep from './components/EntityStep';
import RegistrationStep from './components/RegistrationStep';
import MarketingStep from './components/MarketingStep';
import FinanceStep from './components/FinanceStep';
import WebsiteStep from './components/WebsiteStep';
import Dashboard from './components/Dashboard';
import Button from "./functions/Button";
import Form from ",/functions/Form";
import Card from "./functions/Card";



const steps = [
  { name: 'Business Concept', component: ConceptStep },
  { name: 'Entity Selection', component: EntityStep },
  { name: 'Registration', component: RegistrationStep },
  { name: 'Marketing Strategy', component: MarketingStep },
  { name: 'Financial Setup', component: FinanceStep },
  { name: 'Website & Hosting', component: WebsiteStep },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [businessData, setBusinessData] = useState({});
  const [completedSteps, setCompletedSteps] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('businessFormationProgress');
    if (saved) {
      const data = JSON.parse(saved);
      setBusinessData(data.businessData || {});
      setCompletedSteps(data.completedSteps || []);
      setCurrentStep(data.currentStep || 0);
    }
  }, []);

  const updateBusinessData = (step, data) => {
    setBusinessData(prev => ({ ...prev, [step]: { ...prev[step], ...data } }));
  };

  const markStepComplete = (stepId) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps(prev => [...prev, stepId]);
    }
  };

  const saveProgress = () => {
    const data = {
      businessData,
      completedSteps,
      currentStep,
      lastSaved: new Date().toISOString(),
    };
    localStorage.setItem('businessFormationProgress', JSON.stringify(data));
    alert('Progress saved successfully!');
  };

  const nextStep = () => {
    markStepComplete(currentStep);
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const downloadReport = () => {
    const report = `BUSINESS FORMATION PLAN

Generated: ${new Date().toLocaleDateString()}

=== BUSINESS CONCEPT ===
Name: ${businessData.concept?.name || 'N/A'}
Industry: ${businessData.concept?.industry || 'N/A'}
Description: ${businessData.concept?.description || 'N/A'}
Target Market: ${businessData.concept?.target || 'N/A'}

=== ENTITY SELECTION ===
Type: ${businessData.entity?.type || 'N/A'}
State: ${businessData.entity?.state || 'N/A'}

=== REGISTRATION ===
${businessData.registration?.notes || 'No notes yet'}

=== MARKETING STRATEGY ===
Value Proposition: ${businessData.marketing?.uvp || 'N/A'}
Budget: $${businessData.marketing?.budget || '0'}/month
90-Day Plan: ${businessData.marketing?.plan90 || 'N/A'}

=== FINANCIAL SETUP ===
Startup Costs: $${businessData.finance?.startupCosts || '0'}
Funding Source: ${businessData.finance?.fundingSource || 'N/A'}
Pricing Strategy: ${businessData.finance?.pricing || 'N/A'}

=== WEBSITE & HOSTING ===
Domain: ${businessData.website?.domain || 'N/A'}
Platform: ${businessData.website?.platform || 'N/A'}
Hosting: ${businessData.website?.hosting || 'N/A'}
`;
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'business-formation-plan.txt';
    a.click();
  };

  const CurrentStep = steps[currentStep].component;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Business Formation Assistant</h1>
            <p className="text-sm text-gray-600">Powered by InsightHunter</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={saveProgress}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
              <span className="text-sm">Save</span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <CurrentStep
          businessData={businessData}
          updateBusinessData={updateBusinessData}
          nextStep={nextStep}
          prevStep={prevStep}
          downloadReport={downloadReport}
          saveProgress={saveProgress}
        />
      </div>
      <Dashboard businessData={businessData} />
    </div>
  );
}

export default App;

