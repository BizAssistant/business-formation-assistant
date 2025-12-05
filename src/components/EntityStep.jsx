import React from 'react';
import '../styles/base.scss';
import '../styles/components.scss';

functionw EntityStep({ businessData, updateBusinessData, nextStep, prevStep }) {
    const entity = businessData.entity || {};
    const entities = [
    { type: 'LLC', desc: 'Limited Liability Company' },
    { type: 'Corporation', desc: 'C-Corp or S-Corp structure' },
    { type: 'Sole Proprietorship', desc: 'Simplest for solo owners' },
    { type: 'Partnership', desc: 'Multiple owner structure' }
  ];
    const handleFormSubmit = async () => {
    const response = await fetch('/api/formation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(businessData.entity),
    });
    const result = await response.json();
    
  return (
    <div className="space-y-6 fade-in">
      <h2 className="text-2xl font-bold text-emerald-glow">Choose Your Business Entity</h2>
      <div className="space-y-4">
        {entities.map((entityType) => (
          <div
            key={entityType.type}
            onClick={() => updateBusinessData('entity', { type: entityType.type })}
            className={`glass rounded-xl p-5 cursor-pointer transition-all ${
              entity.type === entityType.type
                ? 'border-2 border-emerald-500 glow-emerald'
                : 'border border-emerald-500/20 hover:border-emerald-500/40'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-emerald-glow text-lg">{entityType.type}</h3>
                <p className="text-gray-400 text-sm">{entityType.desc}</p>
              </div>
              {entity.type === entityType.type && (
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition-colors"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors"
        >
          Next
        </button>

      </div>
    </div>
  );
}

export default EntityStep;
