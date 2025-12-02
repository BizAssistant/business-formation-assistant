import React from 'react';

function ConceptStep({ businessData, updateBusinessData, nextStep }) {
  const concept = businessData.concept || {};

  return (
    <div className="space-y-6 fade-in">
      <h2 className="text-2xl font-bold text-gray-800">Define Your Business Concept</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your business name"
            value={concept.name || ''}
            onChange={(e) => updateBusinessData('concept', { name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Industry/Sector</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
          <label className="block text-sm font-medium text-gray-700 mb-2">Business Description</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="4"
            placeholder="Describe what your business does and the problem it solves"
            value={concept.description || ''}
            onChange={(e) => updateBusinessData('concept', { description: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Target Market</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="3"
            placeholder="Who are your ideal customers?"
            value={concept.target || ''}
            onChange={(e) => updateBusinessData('concept', { target: e.target.value })}
          />
        </div>
      </div>
      <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Next
      </button>
    </div>
  );
}

export default ConceptStep;
