import React from 'react';
import './styles/base.scss';
import './styles/components.scss';


function EntityStep({ businessData, updateBusinessData, nextStep, prevStep }) {
  const entity = businessData.entity || {};
  const entities = [
    { type: 'LLC', desc: 'Limited Liability Company - Most flexible and popular', pros: 'Personal liability protection, tax flexibility', cons: 'State filing fees, annual reports' },
    { type: 'Corporation', desc: 'C-Corp or S-Corp structure', pros: 'Strong liability protection, easier to raise capital', cons: 'More paperwork, double taxation (C-Corp)' },
    { type: 'Sole Proprietorship', desc: 'Simplest structure for solo owners', pros: 'Easy setup, complete control', cons: 'Personal liability, harder to raise capital' },
    { type: 'Partnership', desc: 'For businesses with multiple owners', pros: 'Shared responsibility, pass-through taxation', cons: 'Joint liability, potential conflicts' }
  ];

  return (
    <div className="space-y-6 fade-in">
      <h2 className="text-2xl font-bold text-gray-800">Choose Your Business Entity</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {entities.map((e) => (
            <div
              key={e.type}
              onClick={() => updateBusinessData('entity', { type: e.type })}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                entity.type === e.type ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900">{e.type}</h3>
                {entity.type === e.type && (
                  <span className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-2">{e.desc}</p>
              <div className="text-xs space-y-1">
                <p className="text-green-700">✓ {e.pros}</p>
                <p className="text-red-700">✗ {e.cons}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">State of Formation</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="e.g., Delaware, California, Texas"
            value={entity.state || ''}
            onChange={(e) => updateBusinessData('entity', { state: e.target.value })}
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          Back
        </button>
        <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Next
        </button>
      </div>
    </div>
  );
}

export default EntityStep;
