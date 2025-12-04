import React from 'react';
import './styles/base.scss';
import './styles/components.scss';

function ConceptStep({ businessData, updateBusinessData, nextStep, prevStep }) {
  const concept = businessData.concept || {};

  return (
    <div className="space-y-6 fade-in">
      <h2 className="text-2xl font-bold text-emerald-glow">Define Your Business Concept</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-emerald-glow mb-2">Business Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-xl bg-black/40 border border-emerald-500/20 text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            placeholder="Enter your business name"
            value={concept.name || ''}
            onChange={(e) => updateBusinessData('concept', { name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-glow mb-2">Industry/Sector</label>
          <select
            className="w-full px-4 py-2 rounded-xl bg-black/40 border border-emerald-500/20 text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            value={concept.industry || ''}
            onChange={(e) => updateBusinessData('concept', { industry: e.target.value })}
          >
            <option value="">Select industry</option>
            <option value="technology">Technology</option>
            <option value="retail">Retail</option>
            <option value="services">Professional Services</option>
            <option value="food">Food & Beverage</option>
            <option value="healthcare">Healthcare</option>
            <option value="construction">Construction</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-glow mb-2">Business Description</label>
          <textarea
            className="w-full px-4 py-2 rounded-xl bg-black/40 border border-emerald-500/20 text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            rows="4"
            placeholder="Describe what your business does and the problem it solves"
            value={concept.description || ''}
            onChange={(e) => updateBusinessData('concept', { description: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-glow mb-2">Target Market</label>
          <textarea
            className="w-full px-4 py-2 rounded-xl bg-black/40 border border-emerald-500/20 text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            rows="3"
            placeholder="Who are your ideal customers?"
            value={concept.target || ''}
            onChange={(e) => updateBusinessData('concept', { target: e.target.value })}
          />
        </div>
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

export default ConceptStep;
